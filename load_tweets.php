<?php

require 'twitter.php';

$tweets=Twitter::getTweets('Coldplay');

echo '<b>Tweets from Coldplay</b>';
echo '<ul>';
foreach($tweets as $tweet) {
	echo '<li>';
	echo $tweet->text;
	echo '</li>';
}
echo '</ul>';


?>