import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const jokeList = [
    'Yo mama so fat, she needs a watch on both arms because she covers two time zones.',
    'Yo mama so fat, when she went to KFC, she ordered a bucket of chicken, and when they asked what size, she said the one on the roof.',
    'Yo mama so fat, when she gets on the scale it says, "To be continued."',
    'Yo mama so fat, when she wears a yellow raincoat, people said, "Taxi!"',
    'Yo mama so fat, she got arrested at the airport for ten pounds of crack.',
    'Yo mama so fat, she\'s got more Chins than a Hong Kong phone book!',
    'Yo mama so fat, when she sings, it\'s over for everybody.',
    'Yo mama so fat, when she goes to an all you can eat buffet, they have to install speed bumps.',
    'Yo mama so fat, when she ran away, they had to use all four sides of the milk carton to display her picture.',
    'Yo mama so fat, when she gets in an elevator, it has to go down.',
    'Yo mama so fat, when she goes to a restaurant, she doesn\'t get a menu, she gets an estimate.',
    'Yo mama so fat, when she wears high heels, she strikes oil.',
    'Yo mama so fat, she fell in love and broke it.',
    'Yo mama so fat, when she gets on the scale it says, "We don\'t do livestock."',
    'Yo mama so fat, when she tripped on 4th Ave, she landed on 12th.',
    'Yo mama so fat, when she bungee jumps, she brings down the bridge too.',
    'Yo mama so fat, when she steps on a scale, it read "one at a time, please."',
    'Yo mama so fat, when she sits on my face I can\'t hear the stereo.',
    'Yo mama so fat, when she goes to an amusement park, people try to ride HER!',
    'Yo mama so fat, when she jumps up in the air she gets stuck!',
    'Yo mama so fat, when she wears a yellow raincoat, people said, "Taxi!"',

    'Yo mama so ugly, she made a blind kid cry.',
    'Yo mama so ugly, she made an onion cry.',
    'Yo mama so ugly, she made a bungee jump without the rope.',
    'Yo mama so ugly, she looked out the window and got arrested for mooning.',
    'Yo mama so ugly, she gets 364 extra days to dress up for Halloween.',
    'Yo mama so ugly, she made a Happy Meal cry.',

    'Yo mama so old, she sat next to Jesus in third grade.',
    'Yo mama so old, she knew Burger King while he was still a prince.',
    'Yo mama so old, she owes Jesus a nickel.',
    'Yo mama so old, she knew the Beatles when they were the New Kids on the Block.',
    'Yo mama so old, she knew Mr. Clean when he had an afro.',
    'Yo mama so old, she knew the Old Spice Guy when he was in diapers.',
    'Yo mama so old, she knew Captain Crunch while he was still a private.',

    'Yo mama smells so bad, she made Right Guard turn left.',
    'Yo mama smells so bad, she made Speed Stick slow down.',
    'Yo mama smells so bad, she made the flowers wilt.',

    'Yo mama so stupid, she put lipstick on her forehead to make up her mind.',
    'Yo mama so stupid, she put airbags on her computer in case it crashed.',
    'Yo mama so stupid, she tried to climb Mountain Dew.',
    'Yo mama so stupid, she thought a quarterback was a refund.',
    'Yo mama so stupid, she took a spoon to the Super Bowl.',

    'Yo mama so short, she can do backflips under the bed.',
    'Yo mama so short, she can sit on a dime and swing her legs.',
    'Yo mama so short, she can play handball on the curb.',
    'Yo mama so short, she can do push-ups under the door.',
    'Yo mama so short, she can do pull-ups on a staple.',
    'Yo mama so short, she can hang glide on a Dorito.',
    'Yo mama so short, she can surf on a popsicle stick.',
    'Yo mama so short, she can do sit-ups under the bed.',

    'Yo mama so skinny, she hula hoops with a Cheerio.',
    'Yo mama so skinny, she has to run around in the shower to get wet.',
    'Yo mama so skinny, she turned sideways and disappeared.',
    'Yo mama so skinny, she uses Chapstick for deodorant.',
    'Yo mama so skinny, she can dodge raindrops.',
    'Yo mama so skinny, she has to wear a belt with spandex.',
    'Yo mama so skinny, she has to wear skis in the shower.',
    'Yo mama so skinny, she can see out the peephole with both eyes.',
    'Yo mama so skinny, she can use a Band-Aid as a maxi-pad.',

    'Yo mama so hairy, Bigfoot took a picture of her.',
    'Yo mama so hairy, she shaves her legs with a weed whacker.',
    'Yo mama so hairy, she got a trim and lost 20 pounds.',
    'Yo mama so hairy, she has afros on her nipples.',

    'Yo mama so lazy, she\'s got a remote control just to operate her remote!',
    'Yo mama so lazy, she thinks a two-income family is where yo daddy has two jobs.',

    'Yo mama so poor, she can\'t afford to pay attention!',
    'Yo mama so poor, she can\'t afford to go to the free clinic.',
    'Yo mama so poor when I saw her kicking a can down the street, I asked her what she was doing, she said "Moving."',
    'Yo mama so poor when I ring the doorbell, I hear the toilet flush.',
    'Yo mama so poor when she goes to KFC, she has to lick other people\'s fingers.',
    'Yo mama so poor she went to McDonald\'s and put a milkshake on layaway.',
    'Yo mama so poor your family ate cereal with a fork to save milk.',
    'Yo mama so poor her face is on the front of a foodstamp.',
    'Yo mama so poor she was in K-Mart with a box of garbage bags. I said, "What ya doin\'?" She said, "Buying luggage."',
    'Yo mama so poor she waves around a popsicle stick and calls it air conditioning.',

    'Yo mama so weak, she can\'t even raise a family.',
    'Yo mama so weak, she can\'t even throw up her hands in disgust.',
    'Yo mama so weak, she can\'t even jump to a conclusion.',
]

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Joke = () => {
    const jokeIndex = getRandomInt(0, jokeList.length - 1);
    const joke = jokeList[jokeIndex];
    return (
        <Text style={styles.jokeText}>{joke}</Text>
    );
};

const styles = StyleSheet.create({
    jokeText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 30,
        padding: 20,
    },
});

export default Joke;