# import json
import requests as re

# http://192.168.45.7:5500/index.html
response = re.get('http://192.168.45.7:5500/index.html')
html = response.text
print(html)