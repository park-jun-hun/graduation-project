from scipy.io import wavfile
from scipy import signal
import matplotlib.pyplot as plt
from scipy import signal
import numpy as np
import librosa
import librosa.display 
import sklearn

from os import path

import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from playsound import playsound
from os import path
from pydub import AudioSegment
import pydub
#import ffprobe
#import subprocess
#subprocess.call(['path/to/ffmpeg','-i','2.mp3','3.mp3'])
#pydub.AudioSegment.ffmpeg = "ffmpeg"

sum_frequency=0
sum_times=0
sum_spectrogram=0
total_test=0
total_target=0

PROJECT_ID = "graduation-4651e"  
cred=credentials.Certificate(r'C:\Users\icsy9\Desktop\graduation-4651e-firebase-adminsdk-2au5f-33c0445007.json')
firebase_admin.initialize_app(cred,{
        'databaseURL': "https://graduation-4651e.firebaseio.com",
         'storageBucket': "graduation-4651e.appspot.com",
  })

# files                                                                         
#src = "2.mp3"
#dst = "2.wav"
#src1 = "3.mp3"
#dst1 = "3.wav"

# convert wav to mp3                                                            
#sound = AudioSegment.from_mp3(src)
#sound.export(dst, format="wav")

dir = db.reference() 
dir.update({'FilePath':['0.wav','1.wav']})

dir = db.reference('FilePath') 
path=dir.get()

name = [path[0],path[0]]

#test data set
test_sample_rate, test_samples = wavfile.read(name[0])
test_frequencies, test_times, test_spectrogram= signal.spectrogram(test_samples[:,1],test_sample_rate)

# plt.pcolormesh(test_times, test_frequencies, test_spectrogram)
# plt.ylabel('Frequency [Hz]')
# plt.xlabel('Time [sec]')
# plt.show()
#target data set
target_sample_rate, target_samples = wavfile.read(name[1])
target_frequencies, target_times, target_spectrogram= signal.spectrogram(target_samples[:,1],target_sample_rate)

#set size
if(len(test_frequencies)>=len(target_frequencies)):
    frequencies = len(target_frequencies)
else :
    frequencies = len(test_frequencies)
if(len(test_times)>=len(target_times)):
    times=len(target_times)
else :
    times=len(test_times)
if(len(test_spectrogram)>len(target_spectrogram)):
    spectrogram=len(target_spectrogram)

else:
    spectrogram=len(test_spectrogram)


if(len(target_spectrogram[0])>=len(test_spectrogram)):
    spectrogram2=len(target_spectrogram)

else:
    spectrogram2 = len(test_spectrogram)


for i in range(0, spectrogram):
    for j in range(0,spectrogram2):
        sum=abs(test_spectrogram[i][j]-target_spectrogram[i][j])
        # check simmilar
        if(sum<2500):
            sum=0
        sum_spectrogram+=sum
        total_test+= abs(test_spectrogram[i][j])
        total_target+=abs(target_spectrogram[i][j])


accuracy= sum_spectrogram/total_test
if(total_target>total_test):
    accuracy= sum_spectrogram/total_target

accuracy*=100
accuracy = 100-accuracy
print("Accuracy")
print(accuracy)

dir = db.reference() 
dir.update({'Score':[accuracy]})

FIG_SIZE = (14,5)
#x는 파형의 amplitude 값, sr은 sampling rate
x, sr = librosa.load(path[0])

#spectral centroid
spectral_centroids = librosa.feature.spectral_centroid(x, sr=sr)[0]
spectral_centroids.shape
frames = range(len(spectral_centroids))
t = librosa.frames_to_time(frames)

def normalize(x, axis=0):
    return sklearn.preprocessing.minmax_scale(x, axis=axis)

librosa.display.waveplot(x, sr=sr, alpha=0.4)
plt.plot(t, normalize(spectral_centroids), color='r')

x2, sr2 = librosa.load(path[0])

#spectral centroid
spectral_centroids = librosa.feature.spectral_centroid(x2, sr=sr2)[0]
spectral_centroids.shape
frames = range(len(spectral_centroids))
t = librosa.frames_to_time(frames)

def normalize(x, axis=0):
    return sklearn.preprocessing.minmax_scale(x, axis=axis)

librosa.display.waveplot(x2, sr=sr2, alpha=0.4)
plt.plot(t, normalize(spectral_centroids), color='b')
#plt.show()
plt.savefig("./image/sample.jpg")
