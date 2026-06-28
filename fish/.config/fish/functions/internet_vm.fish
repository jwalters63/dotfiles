function internet_vm --wraps=sudo\ iptables\ -I\ FORWARD\ -i\ virbr0\ -o\ wlan0\ -j\ ACCEPT\nsudo\ iptables\ -I\ FORWARD\ -i\ wlan0\ -o\ virbr0\ -m\ state\ --state\ RELATED,ESTABLISHED\ -j\ ACCEPT\nsudo\ iptables\ -t\ nat\ -I\ POSTROUTING\ -s\ 192.168.122.0/24\ -o\ wlan0\ -j\ MASQUERADE --description alias\ internet_vm\ sudo\ iptables\ -I\ FORWARD\ -i\ virbr0\ -o\ wlan0\ -j\ ACCEPT\nsudo\ iptables\ -I\ FORWARD\ -i\ wlan0\ -o\ virbr0\ -m\ state\ --state\ RELATED,ESTABLISHED\ -j\ ACCEPT\nsudo\ iptables\ -t\ nat\ -I\ POSTROUTING\ -s\ 192.168.122.0/24\ -o\ wlan0\ -j\ MASQUERADE
    sudo iptables -I FORWARD -i virbr0 -o wlan0 -j ACCEPT
sudo iptables -I FORWARD -i wlan0 -o virbr0 -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo iptables -t nat -I POSTROUTING -s 192.168.122.0/24 -o wlan0 -j MASQUERADE $argv
end
