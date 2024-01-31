$(document).ready(function() {
    var quoteSource = [
      {
        quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        name: "Francis of Assisi"
      },
      {
        quote: "Believe you can and you're halfway there.",
        name: "Theodore Roosevelt"
      },
      {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        name: "Confucius"
      },
      {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        name: "Thomas A. Edison"
      },
      {
        quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        name: "Confucius"
      },
      {
        quote: "Don't watch the clock; do what it does. Keep going.",
        name: "Sam Levenson"
      },
      {
        quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
        name: "Ayn Rand"
      },
      {
        quote: "Never, never, never give up.",
        name: "Winston Churchill"
      },
      {
        quote: "Expect problems and eat them for breakfast.",
        name: "Alfred A. Montapert"
      },
      {
        quote: "Start where you are. Use what you have. Do what you can.",
        name: "Arthur Ashe"
      },
      {
        quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
        name: "Samuel Beckett"
      },
      {
        quote: "Be yourself; everyone else is already taken.",
        name: "Oscar Wilde"
      },
      {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        name: "Albert Einstein"
      },
      {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        name: "Margaret Mead"
      },
      {
        quote: "Do not take life too seriously. You will never get out of it alive.",
        name: "Elbert Hubbard"
      },
      {
        quote: "People who think they know everything are a great annoyance to those of us who do.",
        name: "Isaac Asimov"
      },
      {
        quote: "Don't sweat the petty things and don't pet the sweaty things.",
        name: "George Carlin"
      },
      {
        quote: "Procrastination is the art of keeping up with yesterday.",
        name: "Don Marquis"
      },
      {
        quote: "Get your facts first, then you can distort them as you please.",
        name: "Mark Twain"
      },
      {
        quote: "A day without sunshine is like, you know, night.",
        name: "Steve Martin"
      },
      {
        quote: "My grandmother started walking 5 miles a day when she was 60. She's 97 now, and we don't know where the hell she is.",
        name: "Ellen DeGeneres"
      },
      {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        name: "Maya Angelou"
      },
      {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        name: "Albert Einstein"
      },
      
      {
        quote: "Atheism is a non-prophet organization.",
        name: "George Carlin"
      },
      {
        quote: "Hapiness is not something ready made. It comes from your own actions.",
        name: "Dalai Lama"
      },
  
      {
        quote: "You only live once, but if you do it right, once is enough.",
        name: "Mae West"
      },
  
      {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        name: "Oscar Wilde"
      },
      {
        quote: "Always do whatever's next.",
        name: "George Carlin"
      },

  
      {
        quote: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
        name: "Albert Einstein"
      },
  
      {
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        name: "J.K. Rowling, Harry Potter and the Chamber of Secrets"
      },
  
      {
        quote: "All men who have turned out worth anything have had the chief hand in their own education.",
        name: "Walter Scott"
      },
  
      {
        quote: "Trust yourself. You know more than you think you do.",
        name: "Benjamin Spock"
      },
  
      {
        quote: "No one can make you feel inferior without your consent.",
        name: "Eleanor Roosevelt, This is My Story"
      },
  
      {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        name: "Ralph Waldo Emerson"
      },
  
      {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        name: "H. Jackson Brown Jr., P.S. I Love You"
      },
  
      {
        quote: "Graphic design is building systems",
        name: "Michael Stinson"
      },
  
      {
        quote: "I rarely agree with what clients ask me to do.",
        name: "Ross Lovegrove"
      },
  
      {
        quote: "I think most programmers spend the first 5 years of their career mastering complexity, and the rest of their lives learning simplicity.",
        name: "Buzz Andersen"
      },
  
      {
        quote: "Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.",
        name: "Leo Burnett"
      },
  
      {
        quote: "What makes great design great is not a trendy technique, but the logic and conceptual aspect that were figured out in the designer's mind &ndash; or on more likely, on paper &ndash; before a mouse cursor ever opened Photoshop.",
        name: "Kyle Meyer"
      },
  
      {
        quote: "Designers tend to whisper, ad agencies tend to shout.",
        name: "David Stuart"
      },
  
      {
        quote: "Design is the method of putting form and content together. Design, just as art, has multiple definitions; there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.",
        name: "Paul Rand"
      },
  
      {
        quote: "Tell it like it is, in a way they want to hear it.",
        name: "Wihan Meerholz"
      },
  
      {
        quote: "The best way to find any and all errors is to publish your work.",
        name: "Dan Vore"
      },
  
      {
        quote: "Creativity is piercing the mundane to find the marvelous.",
        name: "Bill Moyers"
      },
  
      {
        quote: "I warn you against believing that advertising is a science.",
        name: "Bill Bernbach"
      }
    ];
  
    $('#quoteButton').click(function(evt) {
      //define the containers of the info we target
      var quote = $('#quoteContainer p').text();
      var quoteGenius = $('#quoteGenius').text();
  
      //prevent browser's default action
      evt.preventDefault();
  
      //getting a new random number to attach to a quote and setting a limit
      var sourceLength = quoteSource.length;
      var randomNumber = Math.floor(Math.random() * sourceLength);
  
      //set a new quote
      for (i = 0; i <= sourceLength; i += 1) {
        var newQuoteText = quoteSource[randomNumber].quote;
        var newQuoteGenius = quoteSource[randomNumber].name;
  
        //console.log(newQuoteText,newQuoteGenius);
        var timeAnimation = 500;
        var quoteContainer = $('#quoteContainer');
        //fade out animation with callback
        quoteContainer.fadeOut(timeAnimation, function() {
          quoteContainer.html('');
          quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteGenius">' + '-								' + newQuoteGenius + '</p>');
          //fadein animation.
          quoteContainer.fadeIn(timeAnimation);
        });
  
        break;
      };//end for loop
  
    });//end quoteButton function
  
  });//end document ready
    