vagrant box package and install

vagrant

/vay gr3nt/

$ cd /Users/coursera/VirtualBox\ VMs/vagrant-ubuntu-16.04-johnny-1.0

$ vagrant package --base vagrant-ubuntu-16.04-johnny-1.0

//



//

install it 

$ vagrant box add ubuntu package.box



//

mkdir

copy vagrant package.box in

//

$ vagrant box add ubuntu-roma vagrant-ubuntu-16.04-johnny-1.0-package.box

$ vagrant init ubuntu-roma

//

$ vagrant up

$ vagrant ssh

vagrant@127.0.0.1's password: vagrant

//

edit Vagrantfile

add share folder

![Pasted Graphic 2.tiff](blob:file:///92415230-c8a4-4f22-9e38-dd524aebfa5c)

![Pasted Graphic 2](/Users/teinei/Downloads/github/teinei.github.io/img/Pasted Graphic 2.tiff)

\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 \#  apt-get install -y apache2

 \# SHELL

 config.vm.synced_folder ".", "/vagrant"

end

\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$ vagrant reload



vagrant up

==> default: Booting VM...

==> default: Waiting for machine to boot. This may take a few minutes...

  default: SSH address: 127.0.0.1:2222

  default: SSH username: vagrant

  default: SSH auth method: private key

  default: Warning: Authentication failure. Retrying...

  default: Warning: Authentication failure. Retrying...

$ mkdir .ssh

edit Vagrantfile

\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 \#config.vm.network "forwarded_port", guest: 8000, host: 8000, host_ip: "127.0.0.1"

 \#config.vm.network "forwarded_port", guest: 8080, host: 8080, host_ip: "127.0.0.1"

 \#config.vm.network "forwarded_port", guest: 5000, host: 5000, host_ip: "127.0.0.1"

 config.vm.synced_folder ".", "/vagrant"

 \#config.ssh.private_key_path="./ssh/johnny-ssh"

 config.ssh.username = "vagrant"  

 config.ssh.password = "vagrant"

 config.ssh.insert_key = false

end

\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//