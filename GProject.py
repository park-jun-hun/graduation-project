from os import path
from pydub import AudioSegment

# files                                                                         
src = "3.mp3"
dst = "test3.wav"

# convert wav to mp3                                                            
sound = AudioSegment.from_mp3(src)
sound.export(dst, format="wav")