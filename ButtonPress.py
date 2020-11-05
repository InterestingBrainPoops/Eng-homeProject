import RPi.GPIO as GPIO
import time
pin = 18
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(pin,GPIO.OUT)
if(GPIO.input(18) == GPIO.LOW):
	print("LED TURNED ON")
	GPIO.output(pin, GPIO.HIGH)
else:
	print("LED TURNED OFF")
	GPIO.output(pin, GPIO.LOW)
