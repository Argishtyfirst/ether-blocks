# Etherium Block info

The application is for showing a block of Ethereum using Cloudflare Ethereum API gateway. The back-end is powered using `Go` front-end is implemented in `React`.

## Prerequisites
I assume that you have GO installed already. If not, check it out [here](https://golang.org/doc/install).
I also assume that you have node installed already, if not... meh... 😞

## Running the application

To run the application clone the repo go to the project directory and from the terminal run the following.

```bash
./start.sh
```
Both the back-end and the front-end applications will start after installations.
The back-end application is running on `:9609` port, front-end is running on `:3000` port.

To see the application just go to `http://localhost:3000`.

When you load the page it should display the latest block by default, however, you can also type a random block number to get info about that particular block.

Enjoy...