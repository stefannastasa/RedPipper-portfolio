from requests import get
from json import loads

token = "6093b1c80abd860b990f70defc768e7af807f881"

def projects_import():
    api_response = get("https://api.github.com/user/repos", auth=("RedPipper","6093b1c80abd860b990f70defc768e7af807f881"))
    data =  loads(api_response.text)
    result = []
    for repo in data:
        proj = {
            "name" : repo["name"],
            "url"  : repo["html_url"],
            "description" : repo["description"],
            "stars" : repo["stargazers_count"],
            "forks": repo["forks_count"],
            "language": repo["language"],
        }
        result.append(proj)

    return result




if __name__ == "__main__":
    print(projects_import())