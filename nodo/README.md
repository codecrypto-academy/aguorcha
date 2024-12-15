```bash
docker run -d --rm \
-v ./pwd.txt:/p.txt \
-v ./datos:/data \
-p 5556:8545 \
ethereum/client-go:v1.13.15 \
--datadir /data \
--unlock f9dc88a8b45f5ac9f514dd20630580f8a3e0d858 \
--allow-insecure-unlock \
--mine \
--miner.etherbase f9dc88a8b45f5ac9f514dd20630580f8a3e0d858 \
--password /p.txt \
--nodiscover \
--http \
--http.addr "0.0.0.0" \
--http.api "admin,eth,debug,miner,net,txpool,personal,web3" \
--http.corsdomain "*"
```