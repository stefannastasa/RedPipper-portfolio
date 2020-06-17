from requests import get
from json import loads

def projects_import():
    api_response = get("https://api.github.com/users/RedPipper/repos")
    data =  loads(api_response.text)
    result = []
    
    for repo in data:
        proj = {
            "name": repo["name"],
            "url": repo["html_url"],
            "description": repo["description"],
            "stars": repo["stargazers_count"],
            "forks": repo["forks_count"],
            "language": repo["language"],
        }
        result.append(proj)

    return result




if __name__ == "__main__":
    print(projects_import())
