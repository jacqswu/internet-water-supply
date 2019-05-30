# Internet Water Supply
![Internet Water Supply](/views/images/internetWaterSupply_header.jpg)

Water is mentioned hundreds of times per minute on social media. Amidst the flood of tweets are drowning cries for help from places that lack access to clean drinking water. Most recently, these include Puerto Rico and Flint, Michigan.

What if we treated our digital commodities as physical commodities? Could tweets be valued as much as water or time? If we could deliver as little as 1 oz of water for every online call and fulfill someone's daily value of 8 cups per day, the impact would be significant.


## Installation and Setup
Please run the following command in your terminal:  

```bash
$ git clone https://github.com/jacqswu/internet-water-supply.git
```

### Node.js and npm

[Website Instructions](https://www.npmjs.com/get-npm) (or install [osx release](https://nodejs.org/dist/v8.11.3/node-v8.11.3.pkg)).

```
# verify node and npm are installed
$ node -v
$ npm -v

# install node modules
# dependencies are saved in package.json file
$ cd node/
$ npm install

```
### Twitter
Replace API keys in ```server.js``` file

## Run Application
In terminal: 

```
run node server (will throw error if already running)
$ npm start
```

In web browser:

```http://localhost:8080/```