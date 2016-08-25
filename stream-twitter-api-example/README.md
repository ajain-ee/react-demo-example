This is a sample App to learn react, It fetch the public photos on Twitter using the 
stream API.

From streaming it uses Snapkite node module. To setup snapkite engine following below steps:-

1. git clone https://github.com/snapkite/snapkite-engine.git

2. npm install --global node-gyp

3. cd snapkite-engine/

4. npm install

5. cp example.config.json config.json

6. Register your this sample application with "https://apps.twitter.com" and copy
Consumer Key (API Key), Consumer Secret (API Secret), Access Token, Access Token Secret

7. Edit above config.json and add above four twitter key into the config.json.

8. In config.json edit field 'trackKeyword' with word of your choice.
 	ex. "trackKeywords": "my"	

9. cd snapkite-engine/filters/

10. git clone https://github.com/snapkite/snapkite-filter-is-possibly-sensitive.git
	git clone https://github.com/snapkite/snapkite-filter-has-mobile-photo.git
	git clone https://github.com/snapkite/snapkite-filter-is-retweet.git
	git clone https://github.com/snapkite/snapkite-filter-has-text.git

11. cp snapkite-filter-is-possibly-sensitive/example.config.json snapkite-filter-is-possibly-sensitive/config.json

cp snapkite-filter-has-mobile-photo/example.config.json snapkite-filter-has-mobile-photo/config.json

cp snapkite-filter-is-retweet/example.config.json snapkite-filter-is-retweet/config.json

cp snapkite-filter-has-text/example.config.json snapkite-filter-has-text/config.json

12. In config.json replace "filters": [] with "filters": [
  "snapkite-filter-is-possibly-sensitive",
  "snapkite-filter-has-mobile-photo",
  "snapkite-filter-is-retweet",
  "snapkite-filter-has-text"
]

13. npm start to start snapkit engine to fetch the data from twitter steaming api.