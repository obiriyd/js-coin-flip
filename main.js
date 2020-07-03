let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.round(Math.random());
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return 'Tails';
        } else {
            return 'Heads';
        }
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           image.setAttribute('width', '100px');
        if (this.state === 0) {
            image.setAttribute('src', './images/coin_tails.png');
        } else {
            image.setAttribute('src', './images/coin_heads.png');
        }
        return image;
    }
};
//Add Button
let mainElement = document.querySelector('body');
let imageDiv = document.createElement('div');
imageDiv.setAttribute('class', 'content_container')
let stringDiv = document.createElement('div');
stringDiv.setAttribute('class', 'content_container');
let stringList = document.createElement('ul');
stringDiv.append(stringList);
let pageHeader = document.createElement('h1');
pageHeader.append('Coin Flip');
mainElement.append(pageHeader);
index = 20;

while (index--) {
    coin.flip();
    let stringItem = document.createElement('li');
    stringItem.append(coin.toString());
    stringList.append(stringItem)
    imageDiv.append(coin.toHTML());
}
mainElement.append(imageDiv);
mainElement.append(stringDiv);

