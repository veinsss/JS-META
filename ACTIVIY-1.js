/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let a = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, type) {
    const nft = {
        name: name,
        description: description,
        type: type,
    };
    a.push(nft);
    console.log('Added: to array');
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    a.forEach(function (nft, index) {
        console.log('Name: ' + nft.name);
        console.log('Description: ' + nft.description);
        console.log('Type: ' + nft.type);
        console.log('-------------------');
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log('Total NFTs minted: ' + a.length);
}

// call your functions below this line

mintNFT('Bad Monkey Trolley Cub', 'Image of a monkey', '.jpg');
mintNFT('First Tweet on Twitter', 'Contains the first tweet contained on the site of twitter', 'URL');
mintNFT('NFT Music', 'Contains a .MP3 File of a artist', '.mp3');
mintNFT('Coffee Shop', 'This is a common coffee shop NFT', 'Digital Location');

listNFTs(); // Display the NFTs minted so far
getTotalSupply(); // Print the total supply of NFTs
