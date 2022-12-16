import requests

url = "https://dream-api.p.rapidapi.com/%7BPATH%7D"

response = requests.request("GET", url)

print(response.text)