INSERT INTO challenges (name, prompt, answer, score, difficulty) 
	VALUES ('subway', 'eat a shitload of subway','maybe loose weight', 80, 100);

INSERT INTO messages (name, message, challenge)
	VALUES ('postBot', 'I like to post in subway', 'subway');

INSERT INTO users (name, email, authoredChallenges, completedChallenges, solvedScore, contributedScore, isMod, googleId, googleToken)
	VALUES ('postBot', 'postBot@bot.com', 100, 100, 100, 100, 1, 'fakeID', 'fakeToken')