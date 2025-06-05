import requests_async as requests

async def main(args: Args) -> Output:
    # you can get url by this way
    url = args.params['url']
    response = await requests.get(url)
    ret = {
      'code': response.status_code,
      'res': response.text,
    }
    return ret
