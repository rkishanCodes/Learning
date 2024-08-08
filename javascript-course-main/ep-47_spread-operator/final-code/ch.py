import sounddevice as sd
import queue
import json
from vosk import Model, KaldiRecognizer
import sys

# Initialize a queue to store audio data
q = queue.Queue()

# List of abusive words
abusive_words = {"badword1", "badword2", "badword3"}

# Function to check for abusive words
def contains_abusive_words(text):
    words = text.lower().split()
    for word in words:
        if word in abusive_words:
            return True
    return False

# Callback function to capture audio data
def callback(indata, frames, time, status):
    if status:
        print(status, file=sys.stderr)
    q.put(bytes(indata))

# Load the Vosk model
model = Model("model")
recognizer = KaldiRecognizer(model, 16000)

# Open the audio stream
with sd.RawInputStream(samplerate=16000, blocksize=8000, dtype='int16', channels=1, callback=callback):
    print("Listening...")
    try:
        while True:
            data = q.get()
            if recognizer.AcceptWaveform(data):
                result = recognizer.Result()
                result_dict = json.loads(result)
                text = result_dict.get("text", "")
                print("Recognized:", text)

                # Check for abusive words
                if contains_abusive_words(text):
                    print("Abusive word detected! Taking action...")
                    # Implement your action here (e.g., notify the user, mute the audio, etc.)

    except KeyboardInterrupt:
        print("Stopping...")