from requests import get
from json import loads

def projects_import():
    api_response = get("https://api.github.com/user/repos", auth=("RedPipper","f2f8f9ac796d4e5a93e3863f11b34431c4a09b45"))
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