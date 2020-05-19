from requests import get
from json import loads

def projects_import():
<<<<<<< HEAD
    api_response = get("https://api.github.com/user/repos", auth=("RedPipper","Stefan09304"))
=======
    api_response = get("https://api.github.com/users/RedPipper/repos?sort=pushed&page=1")
>>>>>>> fd550cf40b9b0e6b7a57e848dfdedf26dc289fd9
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