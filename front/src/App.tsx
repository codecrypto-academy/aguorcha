import { useEffect, useState } from "react"

/*
curl --location 'localhost:5556/' \
--header 'Content-Type: application/json' \
--data '{
	"jsonrpc":"2.0",
	"method":"eth_getBalance",
	"params":[
		"0xF324d070B3eE4B14F6432C372119392a7fE76530", 
		"latest"
	],
	"id":1
}'
*/
// Respuesta: {"jsonrpc":"2.0","id":1,"result":"0x579a814e10a740000"}

type Data = {
  jsonrpc: string
  id: number
  result: string
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    fetch('http://localhost:5556', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_getBalance',
        params: [
          '0x125f85D02912c62E7E63FFdc12F1f4511B14c3DC',
          'latest'
        ],
        id: 1
      })
    })
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
  }, [])

  if (!data) return <div>Loading...</div>

  return (
    <div>
      {Number(data.result) / 10**18}
    </div>
  )
}
