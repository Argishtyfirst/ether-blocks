# Etherium explorer app

The application is for showing a block of Ethereum using Cloudflare Ethereum API gateway. 

The back-end is powered by `Go` and the front-end is implemented in `React`.



## Prerequisites

If you prefer `docker` go to the next step (`Docker` stage). It will save you installations steps of the technologies used.

If not, I assume that you have GO installed already. If not, check it out [here](https://golang.org/doc/install).
I also assume that you have node installed already, if not... meh... 😞

## Running the application

###Docker

In this case there is not much to do. 
 - Just `clone` the repo
 - `cd` to the directory
 - run `docker-compose  up`
 - the application will start on `:3000` port

###Run locally

To run the application without docker.  
  - Just `clone` the repo
  - `cd` to the directory
  - from the terminal run the following.

```bash
./start.sh
```

Both the back-end and the front-end applications will start after installations.
The back-end application is running on `:9609` port, the front-end is running on `:3000` port.

To see the application just navigate to `http://localhost:3000`.

When you load the page it should display the latest block by default, however, you can also type a random block number to get info about that particular block.

Enjoy...🍷
