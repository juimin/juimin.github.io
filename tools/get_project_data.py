import json
import requests
from typing import Dict, List

HOST = "https://api.github.com"
USER = "juimin"
TOKEN_FILE = "token"
OUTPUT_FILE = "../src/repos.json"

def get_token() -> str:
    with open(TOKEN_FILE, "r") as f:
        return f.readline().strip()

def get_default_headers() -> Dict:
    return {
        "Authorization": f"token {get_token()}",
        "Content-Type": "application/json; charset=utf8"
    }

def get_repo_data() -> List[Dict]:
    r = requests.get(f"{HOST}/users/{USER}/repos?type=owner", headers=get_default_headers())
    return r.json()

if __name__ == "__main__":
    print("Getting repo data")
    output = []
    repo_data = get_repo_data()
    for repo in repo_data:
        output.append({
            "name": repo["name"],
            "language": repo["language"],
            "url": repo["url"]
        })
    
    output_str = json.dumps(output)
    with open(OUTPUT_FILE, "w+") as f:
        f.write(output_str)