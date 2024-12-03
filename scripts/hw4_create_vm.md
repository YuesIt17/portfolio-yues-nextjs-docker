Yandex CLI PowerShell:
- iex (New-Object System.Net.WebClient).DownloadString('https://storage.yandexcloud.net/yandexcloud-yc/install.ps1')
- Add yc installation dir to your PATH? [Y/n] Y
- get token from Yandex ID https://oauth.yandex.ru/verification_code?ncrnd=623925&status=ok#access_token=***&token_type=bearer&expires_in=31536000&cid=3vnfdvgubkpucakbjt3mq9qu8g

- yc config set token ***
- yc init
- yc config list

Basic template of create to vm: 
- yc compute instance create --name my-yc-instance --network-interface subnet-name=default-ru-central1-a,nat-ip-version=ipv4 --zone ru-central1-a --ssh-key .ssh/id_rsa.pub

Custom template of create to vm: 
- yc compute instance create --name hw-otus-instance --cores 2 --core-fraction 5 --create-disk image-folder-id=standard-images,image-family=ubuntu-1804-lts,size=15 --memory 4 --preemptible --network-interface subnet-name=default-ru-central1-a,nat-ip-version=ipv4 --zone ru-central1-a --ssh-key .ssh/id_rsa.pub