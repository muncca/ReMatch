{
	"dataset": {
		"id": "qald-7-train-multilingual"
	},
	"questions": [{
			"id": "0",
			"answertype": "date",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "When was the Battle of Gettysburg?",
					"keywords": "Battle of Gettysburg"
				},
				{
					"language": "de",
					"string": "Wann fand die Schlacht von Gettysburg statt?",
					"keywords": "Schlacht von Gettysburg"
				},
				{
					"language": "es",
					"string": "¿Cuándo tuvo lugar la batalla de Gettysburg?",
					"keywords": "batalla de Gettysburg"
				},
				{
					"language": "it",
					"string": "Quando ha avuto luogo la battaglia di Gettysburg?",
					"keywords": "battaglia di Gettysburg"
				},
				{
					"language": "fr",
					"string": "Quand se déroula la bataille de Gettysburg?",
					"keywords": "bataille de Gettysburg, quand"
				},
				{
					"language": "nl",
					"string": "Wanneer was de Slag bij Gettysburg?",
					"keywords": "Slag bij Gettysburg"
				},
				{
					"language": "hi_IN",
					"string": "गेटिसबर्ग का युद्ध कब हुआ था?",
					"keywords": "गेटिसबर्ग का युद्ध"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?date \nWHERE { \n       res:Battle_of_Gettysburg dbo:date ?date .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"date"
					]
				},
				"results": {
					"bindings": [{
						"date": {
							"type": "literal",
							"value": "1863-07-03"
						}
					}]
				}
			}]
		},
		{
			"id": "1",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "List all the musicals with music by Elton John.",
					"keywords": "musicals, music by, Elton John"
				},
				{
					"language": "de",
					"string": "Liste alle Musicals mit Musik von Elton John auf.",
					"keywords": "Musicals, Musik von, Elton John"
				},
				{
					"language": "es",
					"string": "Dame todos los musicales con música de Elton John.",
					"keywords": "musicales, música, Elton John"
				},
				{
					"language": "it",
					"string": "Elenca tutti i musicals con musiche di Elton John.",
					"keywords": "musicals, musiche, Elton John"
				},
				{
					"language": "fr",
					"string": "Donne-moi tous les musicals avec de la musique de de Elton John.",
					"keywords": "musicals, musique, Elton John"
				},
				{
					"language": "nl",
					"string": "Toen een lijst van alle musicals met muziek van Elton John.",
					"keywords": "musicals, muziek van, Elton John"
				},
				{
					"language": "hi_IN",
					"string": "एल्टन जॉन द्वारा संगीत के साथ सभी संगीतों को सूचीबद्ध करें।",
					"keywords": "एल्टन जॉन का संगीत"
				},
				{
					"language": "ro",
					"string": "Listează toate muzicalurile cu muzică de Elton John.",
					"keywords": "muzicaluri, muzică de Elton John"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \nSELECT DISTINCT ?uri\nWHERE { \n        ?uri rdf:type dbo:Musical .\n        ?uri dbo:musicBy res:Elton_John .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Lion_King_(musical)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Lestat_(musical)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Billy_Elliot_the_Musical"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Aida_(musical)"
							}
						}
					]
				}
			}]
		},
		{
			"id": "2",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How high is the lighthouse in Colombo?",
					"keywords": "high, lighthouse in Colombo"
				},
				{
					"language": "fa",
					"string": "فانوس دریایی کولومبو چقدر بلند است؟",
					"keywords": "فانوس دریایی کولومبو، بلند"
				},
				{
					"language": "de",
					"string": "Wie hoch ist der Leuchtturm in Colombo?",
					"keywords": "hoch, Leuchtturm in Colombo"
				},
				{
					"language": "es",
					"string": "¿Cómo de alta el faro de Colombo?",
					"keywords": "alta, Faro de Colombo?"
				},
				{
					"language": "it",
					"string": "Quanto è alto il faro di Colombo?",
					"keywords": "altezza, faro di Colombo"
				},
				{
					"language": "fr",
					"string": "Quelle est la hauteur du phare de Colombo?",
					"keywords": "hauteur, Phare de Colombo"
				},
				{
					"language": "nl",
					"string": "Hoe hoog is de vuurtoren van Colombo?",
					"keywords": "hoog, vuurtoren van Colombo"
				},
				{
					"language": "hi_IN",
					"string": "कोलंबो में लाइटहाउस कितना ऊँचा है?",
					"keywords": "कोलंबो, लाइटहाउस"
				},
				{
					"language": "ro",
					"string": "Cât de înalt este farul din Colombo?",
					"keywords": "înalt, farul din Colombo"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?num WHERE {  <http://dbpedia.org/resource/Colombo_Lighthouse> <http://dbpedia.org/ontology/height> ?num . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "29.0"
						}
					}]
				}
			}]
		},
		{
			"id": "3",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was the wife of U.S. president Lincoln?",
					"keywords": "U.S. president, Lincoln, wife"
				},
				{
					"language": "de",
					"string": "Wer war die Frau von US-Präsident Lincoln?",
					"keywords": "US-Präsident, Lincoln, Frau"
				},
				{
					"language": "es",
					"string": "¿Quién fué la mujer del presidente americano Lincoln?",
					"keywords": "presidente Americano, Lincoln, mujer"
				},
				{
					"language": "it",
					"string": "Chi era la moglie del presidente degli Stati Uniti Lincoln?",
					"keywords": "presidente degli Stati Uniti, Lincoln, moglie"
				},
				{
					"language": "fr",
					"string": "Qui était l'épouse du président américain Lincoln?",
					"keywords": "épouse, président américain Lincoln"
				},
				{
					"language": "nl",
					"string": "Wie was de vrouw van de Amerikaanse president Lincoln?",
					"keywords": "vrouw, president van America, Lincoln"
				},
				{
					"language": "hi_IN",
					"string": "अमेरिकी राष्ट्रपति लिंकन की पत्नी कौन थी?",
					"keywords": "अमेरिकी राष्ट्रपति लिंकन"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n\tres:Abraham_Lincoln dbo:spouse ?uri.\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Mary_Todd_Lincoln"
						}
					}]
				}
			}]
		},
		{
			"id": "4",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the host of the BBC Wildlife Specials?",
					"keywords": "host, BBC Wildlife Specials"
				},
				{
					"language": "fa",
					"string": "مجری مجموعه حیات وحش بی.بی.سی چه کسی است؟",
					"keywords": "مجری، مجموعه حیات وحش بی.بی.سی"
				},
				{
					"language": "de",
					"string": "Wer moderiert die BBC Wildlife Specials?",
					"keywords": "BBC Wildlife Specials, Moderator"
				},
				{
					"language": "es",
					"string": "¿Quién es el anfitrión de los especiales de la BBC Wildlife?",
					"keywords": "anfitrión, BBC Wildlife"
				},
				{
					"language": "it",
					"string": "Chi è il presentatore degli speciali della BBC Wildlife?",
					"keywords": "presentatore, speciali, BBC Wildlife"
				},
				{
					"language": "fr",
					"string": "Qui est le présentateur de BBC Wildlife Specials?",
					"keywords": "présentateur, BBC Wildlife Specials?"
				},
				{
					"language": "nl",
					"string": "Wie is de presentator van de BBC Wildlife Specials?",
					"keywords": "presentator, BBC Wildlife Specials"
				},
				{
					"language": "hi_IN",
					"string": "बीबीसी वाइल्डलाइफ स्पेशल का मेजबान कौन है?",
					"keywords": "बीबीसी वाइल्डलाइफ स्पेशल, मेजबान"
				},
				{
					"language": "ro",
					"string": "Cine este prezentatorul pentru BBC Wildlife Specials?",
					"keywords": "prezentator, BBC Wildlife Specials"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/BBC_Wildlife_Specials> <http://dbpedia.org/ontology/presenter> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/David_Attenborough"
						}
					}]
				}
			}]
		},
		{
			"id": "5",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How much did Pulp Fiction cost?",
					"keywords": "cost, Pulp Fiction"
				},
				{
					"language": "fa",
					"string": "پالپ فیکشن چقدر هزینه داشت؟",
					"keywords": "پالپ فیکشن، هزینه"
				},
				{
					"language": "de",
					"string": "Wieviel hat Pulp Fiction gekostet?",
					"keywords": "Kosten, Pulp Fiction"
				},
				{
					"language": "es",
					"string": "¿Cuanto costo Pulp Fiction?",
					"keywords": "costo, Pulp Fiction"
				},
				{
					"language": "it",
					"string": "Quanto è costato Pulp Fiction?",
					"keywords": "costo, Pulp Fiction"
				},
				{
					"language": "fr",
					"string": "Combien a coûté Pulp Fiction?",
					"keywords": "prix, Pulp Fiction"
				},
				{
					"language": "nl",
					"string": "Howeveel koste Pulp Fiction?",
					"keywords": "kosten, Pulp Fiction"
				},
				{
					"language": "hi_IN",
					"string": "पल्प फिक्शन की लागत कितनी थी?",
					"keywords": "पल्प फिक्शन, लागत"
				},
				{
					"language": "ro",
					"string": "Cât a costat Pulp Fiction?",
					"keywords": "cost, Pulp Fiction"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?n WHERE {  <http://dbpedia.org/resource/Pulp_Fiction> <http://dbpedia.org/ontology/budget> ?n . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "8.0"
						}
					}]
				}
			}]
		},
		{
			"id": "6",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In what city is the Heineken brewery?",
					"keywords": "city, Heineken brewery"
				},
				{
					"language": "fa",
					"string": "آبجوسازی هینکن در کدام شهر قرار دارد؟",
					"keywords": "آبجوسازی هینکن، شهر"
				},
				{
					"language": "de",
					"string": "In welcher Stadt ist die Heinekenbrauerei?",
					"keywords": "Stadt, Heinekenbrauerei"
				},
				{
					"language": "es",
					"string": "¿En qué ciudad esta la fábrica de cerveza Heineken?",
					"keywords": "ciudad, fábrica cerveza Heineken"
				},
				{
					"language": "it",
					"string": "In quale città si trova il birrificio della Heiniken?",
					"keywords": "città, birrificio della Heiniken"
				},
				{
					"language": "fr",
					"string": "Dans quelle ville se trouve la brasserie de Heineken?",
					"keywords": "ville, brasserie, Heineken?"
				},
				{
					"language": "nl",
					"string": "In welke stad bevindt zich de Heineken brouwerij?",
					"keywords": "stad, Heineken, brouwerij"
				},
				{
					"language": "hi_IN",
					"string": "हाइनेकेन शराब की भठ्ठी किस शहर में है?",
					"keywords": "हाइनेकेन, शराब की भठ्ठ, शहर"
				},
				{
					"language": "ro",
					"string": "În ce oraș este fabrica de bere Heineken?",
					"keywords": "oraș, fabrica de bere Heineken"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Heineken> <http://dbpedia.org/ontology/manufacturer> ?x . ?x <http://dbpedia.org/ontology/locationCity> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Amsterdam"
						}
					}]
				}
			}]
		},
		{
			"id": "7",
			"answertype": "date",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "When did Operation Overlord commence?",
					"keywords": "when, Operation Overlord, commence"
				},
				{
					"language": "fa",
					"string": "نبرد خان بزرگ کی شروع شد؟",
					"keywords": "نبرد خان بزرگ، شروع"
				},
				{
					"language": "de",
					"string": "Wann wurde die Operation Overlord durchgeführt?",
					"keywords": "Operation Overlord, Datum"
				},
				{
					"language": "es",
					"string": "¿Cuándo comenzó la operación Overlord?",
					"keywords": "comienzo, operación Overlord "
				},
				{
					"language": "it",
					"string": "Quando è iniziata l'operatione Overlord?",
					"keywords": "data di inizio, operatione Overlord"
				},
				{
					"language": "fr",
					"string": "Quand a commencé l'opération Overlord?",
					"keywords": "date de commencement, opération Overlord"
				},
				{
					"language": "nl",
					"string": "Wanneer vond Operatie Overlord plaats?",
					"keywords": "Operatie Overlord, datum"
				},
				{
					"language": "hi_IN",
					"string": "ऑपरेशन ओवेरलोर्ड कब शुरू हुआ था?",
					"keywords": "ऑपरेशन ओवेरलोर्ड"
				},
				{
					"language": "ro",
					"string": "Când a început operațiunea Overlord?",
					"keywords": "când, început, operațiunea Overlord"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?d WHERE { <http://dbpedia.org/resource/Operation_Overlord> <http://dbpedia.org/ontology/date> ?d . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"date"
					]
				},
				"results": {
					"bindings": [{
						"date": {
							"type": "literal",
							"value": "1944-08-30"
						}
					}]
				}
			}]
		},
		{
			"id": "8",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which city does the Chile Route 68 end?",
					"keywords": "city, Chile Route 68, ends"
				},
				{
					"language": "fa",
					"string": "در کدام شهر مسیر 68 شیلی پایان می یابد؟",
					"keywords": "شهر، مسیر 68 شیلی، پایان"
				},
				{
					"language": "de",
					"string": "In welcher Stadt hört die Ruta 68 auf?",
					"keywords": "Stadt, aufhören, Ruta 68"
				},
				{
					"language": "es",
					"string": "¿En que ciudad termina la ruta Chilena 68?",
					"keywords": "ciudad, termina, ruta Chilena 68"
				},
				{
					"language": "it",
					"string": "In quale città termina la Route 68 in Cile?",
					"keywords": "città, termina, Route 68, Cile"
				},
				{
					"language": "fr",
					"string": "Dans quelle ville se termine la route 68 chilienne?",
					"keywords": "route 68, chili, ville, terminaison"
				},
				{
					"language": "nl",
					"string": "In welke stad eindigt de Route 68 in Chili?",
					"keywords": "stad, eindigt, Route 68, Chili"
				},
				{
					"language": "hi_IN",
					"string": "चिली रूट 68 का अंत कौनसे शहर में होता है?",
					"keywords": "चिली रूट 68, शहर"
				},
				{
					"language": "ro",
					"string": "În ce oraș se termină Route 68 din Chile?",
					"keywords": "oraș, termină, Route 68, Chile"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/Chile_Route_68> <http://dbpedia.org/ontology/routeEnd> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Valparaíso"
						}
					}]
				}
			}]
		},
		{
			"id": "9",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who developed Slack?",
					"keywords": "developer, Slack"
				},
				{
					"language": "fa",
					"string": "اسلک را چه کسی توسعه داد؟",
					"keywords": "اسلک، توسعه"
				},
				{
					"language": "de",
					"string": "Wer hat Slack entwickelt?",
					"keywords": "Slack, Entwickler"
				},
				{
					"language": "es",
					"string": "¿Quien desarrolló Slack?",
					"keywords": "desarrollador, Slack"
				},
				{
					"language": "it",
					"string": "Chi ha sviluppato Slack?",
					"keywords": "sviluppatore, Slack"
				},
				{
					"language": "fr",
					"string": "Qui est le développeur de Slack?",
					"keywords": "développeur, Slack"
				},
				{
					"language": "nl",
					"string": "Wie ontwikkelde Slack?",
					"keywords": "Slack, ontwikkelaar"
				},
				{
					"language": "hi_IN",
					"string": "कौन ने स्लैक विकसित किया है?",
					"keywords": "स्लैक, विकासक"
				},
				{
					"language": "ro",
					"string": "Cine a dezvoltat Slack?",
					"keywords": "dezvoltator, Slack"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/product> <http://dbpedia.org/resource/Slack_(software)> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Slack_Technologies"
						}
					}]
				}
			}]
		},
		{
			"id": "10",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was married to president Chirac?",
					"keywords": "married to, president Chirac"
				},
				{
					"language": "de",
					"string": "Wer war mit Präsident Chirac verheiratet?",
					"keywords": "verheiratet mit, Päsident Chirac"
				},
				{
					"language": "es",
					"string": "¿Quién estuvo casado con el presidente Chirac?",
					"keywords": "casado con, presidented Chirac"
				},
				{
					"language": "it",
					"string": "Chi è stato sposato con il presidente Chirac?",
					"keywords": "sposato con, presidente Chirac"
				},
				{
					"language": "fr",
					"string": "Qui était marrié avec le président Chirac?",
					"keywords": "épouse, président Chirac"
				},
				{
					"language": "nl",
					"string": "Wie was met president Chirac getrouwd?",
					"keywords": "getrouwd met, president Chirac"
				},
				{
					"language": "hi_IN",
					"string": "राष्ट्रपति चिराक से किसने विवाह किया था?",
					"keywords": "राष्ट्रपति चिराक, विवाह"
				},
				{
					"language": "ro",
					"string": "Cine a fost căsătorit cu președintele Chirac?",
					"keywords": "căsătorit cu, președintele Chirac"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nSELECT DISTINCT ?uri\nWHERE { \n         res:Jacques_Chirac dbo:spouse ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Bernadette_Chirac"
						}
					}]
				}
			}]
		},
		{
			"id": "11",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What did Bruce Carver die from?",
					"keywords": "Bruce Carver, die"
				},
				{
					"language": "de",
					"string": "Woran ist Bruce Carver gestorben?",
					"keywords": "Bruce Carver, gestorben an"
				},
				{
					"language": "es",
					"string": "¿De qué murió Bruce Carver?",
					"keywords": "Bruce Caver, muerte"
				},
				{
					"language": "it",
					"string": "Di cosa è morto Bruce Carver?",
					"keywords": "Bruce Caver, morire"
				},
				{
					"language": "fr",
					"string": "Quel est la cause de décès de Bruce Carver?",
					"keywords": "cause de décès, Bruce Carver"
				},
				{
					"language": "nl",
					"string": "Waaraan overleed Bruce Carver?",
					"keywords": "Bruce Carver, gestorven aan"
				},
				{
					"language": "hi_IN",
					"string": "ब्रूस कार्वर कि मृत्यु किस से हुई?",
					"keywords": "ब्रूस कार्वर, मृत्यु"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/>\nSELECT DISTINCT ?uri\nWHERE {\n        res:Bruce_Carver dbo:deathCause ?uri .     \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Cancer"
						}
					}]
				}
			}]
		},
		{
			"id": "12",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": false,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who painted The Storm on the Sea of Galilee?",
					"keywords": "The Storm on the Sea of Galilee, paint"
				},
				{
					"language": "de",
					"string": "Wer malte Christus im Sturm auf dem See von Galilea?",
					"keywords": "Christus im Sturm auf dem See von Galilea, malen"
				},
				{
					"language": "es",
					"string": "¿Quién pintó el Cristo en la tormenta en el lago de Galilea?",
					"keywords": "Cristo en la tormenta en el lago de Galilea, pintor"
				},
				{
					"language": "it",
					"string": "Chi dipinse il Cristo nella tempesta sul mare di Galilea?",
					"keywords": "Cristo nella tempesta sul mare di Galilea, pittore"
				},
				{
					"language": "fr",
					"string": "Qui a peint Christ dans la tempête sur la mer de Galilée?",
					"keywords": "peintre, Christ dans la tempête sur la mer de Galilée"
				},
				{
					"language": "nl",
					"string": "Wie schilderde Christus in de storm op het meer van Galilea?",
					"keywords": "schilder, Christus in de storm op het meer van Galilea"
				},
				{
					"language": "hi_IN",
					"string": "किसने गलील के सागर पर द स्टॉर्म को चित्रित किया?",
					"keywords": "गलील सागर, द स्टॉर्म, चित्रित"
				}
			],
			"query": {
				"sparql": "PREFIX dbp: <http://dbpedia.org/property/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n\tres:The_Storm_on_the_Sea_of_Galilee dbp:artist ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Rembrandt"
						}
					}]
				}
			}]
		},
		{
			"id": "13",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which cities does the Weser flow through?",
					"keywords": "Weser, flow through, city"
				},
				{
					"language": "fa",
					"string": "وزر از چه شهرهایی می گذرد؟",
					"keywords": "وزر، شهرهایی، می گذرد"
				},
				{
					"language": "de",
					"string": "Durch welche Städte fließt die Weser?",
					"keywords": "Weser, fließen, Stadt"
				},
				{
					"language": "es",
					"string": "¿Por qué ciudades pasa el río Weser?",
					"keywords": "cuidad, pasa, Weser"
				},
				{
					"language": "it",
					"string": "Attraverso quali città scorre il fiume Weser?",
					"keywords": "città, scorrere, fiume Weser"
				},
				{
					"language": "fr",
					"string": "Quels sont les villes traversées par la Weser?",
					"keywords": "villes, traverser, Weser"
				},
				{
					"language": "nl",
					"string": "Door welke steden loopt de Weser?",
					"keywords": "stad, loopt door, Weser"
				},
				{
					"language": "hi_IN",
					"string": "किन शहरों से वेसर का प्रवाह होता है?",
					"keywords": "वेसर, शहरो, प्रवाह"
				},
				{
					"language": "ro",
					"string": "Ce orașe străbate Weserul?",
					"keywords": "Weser, străbate, oraș"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/Weser> <http://dbpedia.org/ontology/city> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Fulda_(river)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Kassel"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Minden"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Bremerhaven"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Bremen"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Hamelin"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Hann._Münden"
							}
						}
					]
				}
			}]
		},
		{
			"id": "14",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many seats does the home stadium of FC Porto have?",
					"keywords": "How many seats, stadium of FC Porto"
				},
				{
					"language": "fa",
					"string": "ورزشگاه باشگاه پورتو چند صندلی دارد؟",
					"keywords": "ورزشگاه باشگاه پورتو، چند صندلی"
				},
				{
					"language": "de",
					"string": "Wieviele Plätze hat das Heimstadium des FC Porto?",
					"keywords": "FC Porto, Heimstadium, wieviele, Plätze"
				},
				{
					"language": "es",
					"string": "¿Cuántos asientos tiene el estadio del FC Porto?",
					"keywords": "asientos, estadio FC Porto"
				},
				{
					"language": "it",
					"string": "Quanti posti a sedere ha lo stadio del FC Porto",
					"keywords": "posti a sedere, stadio del FC Porto"
				},
				{
					"language": "fr",
					"string": "Quel est le nombre de sièges dans le stade de FC Porto?",
					"keywords": "nombre de sièges, stade, FC Porto"
				},
				{
					"language": "nl",
					"string": "Hoeveel plaatsen heeft het stadion van FC Porto?",
					"keywords": "plaatsen, stadion, FC Porto"
				},
				{
					"language": "hi_IN",
					"string": "एफसी पोर्टो के घर स्टेडियम में कितनी सीटें हैं?",
					"keywords": "एफसी पोर, सीटें, स्टेडियम"
				},
				{
					"language": "ro",
					"string": "Câte locuri are stadionul lui FC Porto?",
					"keywords": "Câte locuri, stadionul lui FC Porto"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?n WHERE { <http://dbpedia.org/resource/FC_Porto> <http://dbpedia.org/ontology/ground> ?x . ?x <http://dbpedia.org/ontology/seatingCapacity> ?n . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "50035"
						}
					}]
				}
			}]
		},
		{
			"id": "15",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the daughter of Robert Kennedy married to?",
					"keywords": "Robert Kennedy, daughter, married"
				},
				{
					"language": "fa",
					"string": "دختر رابرت کندی با چه کسی ازدواج کرده است؟",
					"keywords": "دختر، رابرت کندی، ازدواج"
				},
				{
					"language": "de",
					"string": "Mit wem ist die Tochter von Robert Kennedy verheiratet?",
					"keywords": "Robert Kennedy, Tochter, verheiratet"
				},
				{
					"language": "es",
					"string": "¿Con quién está casada la hija de Robert Kennedy?",
					"keywords": "Robert Kennedy, hija, casada"
				},
				{
					"language": "it",
					"string": "Con chi è sposata la figlia di Robert Kennedy?",
					"keywords": "Robert Kennedy, figlia, sposata"
				},
				{
					"language": "fr",
					"string": "Qui est l'époux de la fille de Robert Kennedy?",
					"keywords": "épou, fille, Ingrid Bergman"
				},
				{
					"language": "nl",
					"string": "Met wie is de dochter van Robert Kennedy getrouwd?",
					"keywords": "Robert Kennedy, dochter, getrouwd"
				},
				{
					"language": "hi_IN",
					"string": "रॉबर्ट कैनेडी की बेटी की कौन से शादी हुइ है?",
					"keywords": "रॉबर्ट कैनेडी, बेटी, शादी"
				},
				{
					"language": "ro",
					"string": "Cu cine este căsătorită fiica lui Robert Kennedy?",
					"keywords": "Robert Kennedy, fiică, căsătorită"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/Robert_F._Kennedy> <http://dbpedia.org/ontology/child> ?child .  ?child <http://dbpedia.org/ontology/spouse> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Cheryl_Hines"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Andrew_Cuomo"
							}
						}
					]
				}
			}]
		},
		{
			"id": "16",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which books by Kerouac were published by Viking Press?",
					"keywords": "book, Kerouac, publish, Viking Press"
				},
				{
					"language": "fa",
					"string": "چه کتاب هایی اثر کرواک توسط انتشارات وایکینگ منتشر شدند؟",
					"keywords": "کتاب هایی، کرواک، انتشارات وایکینگ، منتشر"
				},
				{
					"language": "de",
					"string": "Welche Bücher von Kerouac wurden von Viking Press verlegt?",
					"keywords": "Buch, Kerouac, verlegen, Viking Press"
				},
				{
					"language": "es",
					"string": "¿Qué libros de Kerouac han sido publicados por Viking Press?",
					"keywords": "libro, Kerouac, publicado, Viking Press"
				},
				{
					"language": "it",
					"string": "Quali libri di Kerouac furono pubblicati da Viking Press?",
					"keywords": "libro, Kerouac, pubblicare, Viking Press"
				},
				{
					"language": "fr",
					"string": "Quels lives de Kerouac ont été publiés par Viking Press?",
					"keywords": "lives de Kerouac, publiés, Viking Press"
				},
				{
					"language": "nl",
					"string": "Welke boeken van Jack Kerouac werden uitgegeven door Viking Press?",
					"keywords": "boek, Jack Kerouac, uitgever, Viking Press"
				},
				{
					"language": "hi_IN",
					"string": "वाइकिंग प्रेस द्वारा कैरौक की कौन सी किताबें प्रकाशित की गई थीं?",
					"keywords": "वाइकिंग प्रेस, कैरौक, प्रकाशित"
				},
				{
					"language": "ro",
					"string": "Ce cărți de Kerouac a fost publicate de Viking Press?",
					"keywords": "carte, Kerouac, publica, Viking Press"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Book> .  ?uri <http://dbpedia.org/ontology/publisher> <http://dbpedia.org/resource/Viking_Press> .  ?uri <http://dbpedia.org/ontology/author> <http://dbpedia.org/resource/Jack_Kerouac> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/On_the_Road"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Door_Wide_Open"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Atop_an_Underwood:_Early_Stories_and_Other_Writings"
							}
						}
					]
				}
			}]
		},
		{
			"id": "17",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How tall is Amazon Eve?",
					"keywords": "Amazon Eve, tall"
				},
				{
					"language": "fa",
					"string": "قد آمازون ایو چقدر است؟",
					"keywords": "قد، آمازون ایو"
				},
				{
					"language": "de",
					"string": "Wie groß ist Amazon Eve?",
					"keywords": "Amazon Eve, groß"
				},
				{
					"language": "es",
					"string": "¿Cómo de alta es Amazon Eve?",
					"keywords": "Amazon Eve, altura"
				},
				{
					"language": "it",
					"string": "Quanto è alta Amazon Eve?",
					"keywords": "Amazon Eve, altezza"
				},
				{
					"language": "fr",
					"string": "Quelle est la taille de Amazon Eve?",
					"keywords": "taille, Amazon Eve"
				},
				{
					"language": "nl",
					"string": "Hoe lang is Amazon Eve?",
					"keywords": "lengte, Amazon Eve"
				},
				{
					"language": "hi_IN",
					"string": "अमेज़ॅन ईव कितनी लंबी है?",
					"keywords": "अमेज़ॅन ईव, लंबी"
				},
				{
					"language": "ro",
					"string": "Ce înălțime are Amazon Eve?",
					"keywords": "Amazon Eve, înălțime"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?height WHERE {  <http://dbpedia.org/resource/Amazon_Eve> <http://dbpedia.org/ontology/height> ?height . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "2.02"
						}
					}]
				}
			}]
		},
		{
			"id": "18",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which museum exhibits The Scream by Munch?",
					"keywords": "museum, Scream, Munch"
				},
				{
					"language": "de",
					"string": "In welchem Museum ist Der Schrei von Munch ausgestellt?",
					"keywords": "Museum, Schrei, Munch"
				},
				{
					"language": "es",
					"string": "¿En qué museo está expuesto el Grito de Munch?",
					"keywords": "museo, El Grito, Munch"
				},
				{
					"language": "it",
					"string": "In quale museo è esposto l'Urlo di Munch?",
					"keywords": "museo, l'Urlo, Munch"
				},
				{
					"language": "fr",
					"string": "Dans quel musée est exposé Le Cri de Munch?",
					"keywords": "musée, le Cri, Munch"
				},
				{
					"language": "nl",
					"string": "In welk museum hangt De Schreeuw van Munch?",
					"keywords": "museum, De Schreeuw, Munch"
				},
				{
					"language": "hi_IN",
					"string": "कौन सा संग्रहालय मंच द्वारा द स्क्रीम प्रदर्शित करता है?",
					"keywords": "संग्रहालय, मंच, द स्क्रीम, प्रदर्शित"
				},
				{
					"language": "ro",
					"string": "În ce muzeu este expus “Strigătul” lui Munch?",
					"keywords": "muzeu, Strigătul, Munch"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {\n       res:The_Scream dbo:museum ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/National_Gallery_(Norway)"
						}
					}]
				}
			}]
		},
		{
			"id": "19",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who wrote the book Les Piliers de la terre?",
					"keywords": "wrote, book, The pillars of the Earth"
				},
				{
					"language": "de",
					"string": "Wer schrieb das Buch Die Säulen der Erde?",
					"keywords": "schreiben, Buch, Die Säulen der Erde"
				},
				{
					"language": "es",
					"string": "¿Quen escribió el libro Los pilares de la Tierra?",
					"keywords": "escritor, libro, Pilares de la Tierra"
				},
				{
					"language": "it",
					"string": "Chi ha scritto il libro I pilastri della Terra?",
					"keywords": "scritto, libro, I pilastri della Terra"
				},
				{
					"language": "fr",
					"string": "Qui a écrit le livre Les Piliers de la terre?",
					"keywords": "Les Piliers de la terre, écrivain"
				},
				{
					"language": "nl",
					"string": "Wie schreef het boek De Pilaren van de Aarde?",
					"keywords": "auteur, De Pilaren van de Aarde"
				},
				{
					"language": "hi_IN",
					"string": "लेस पिलीरेस डी ला टेरे किताब को किसने लिखा है?",
					"keywords": "लेस पिलीरेस डी ला टेर, लेखक"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n\tres:The_Pillars_of_the_Earth dbo:author ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Ken_Follett"
						}
					}]
				}
			}]
		},
		{
			"id": "20",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is James Bond married?",
					"keywords": "James Bond, married"
				},
				{
					"language": "de",
					"string": "Ist James Bond verheiratet?",
					"keywords": "James Bond, verheiratet"
				},
				{
					"language": "es",
					"string": "¿Está James Bond casado?",
					"keywords": "James Bond, casado"
				},
				{
					"language": "it",
					"string": "James è Bond sposato?",
					"keywords": "James Bond, sposato"
				},
				{
					"language": "fr",
					"string": "James Bond est-il marié?",
					"keywords": "James Bond, marié"
				},
				{
					"language": "nl",
					"string": "Is James Bond getrouwd?",
					"keywords": "James Bond, getrouwd"
				},
				{
					"language": "hi_IN",
					"string": "क्या जेम्स बांड ने शादी की है?",
					"keywords": "जेम्स बांड, शादी"
				},
				{
					"language": "ro",
					"string": "James Bond este căsătorit?",
					"keywords": "James Bond, căsătorit"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE {\n        res:James_Bond dbo:spouse ?uri . \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": false
			}]
		},
		{
			"id": "21",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who discovered Ceres?",
					"keywords": "discoverer, Ceres"
				},
				{
					"language": "fa",
					"string": "سرس را چه کسی کشف کرد؟",
					"keywords": "سرس، کشف"
				},
				{
					"language": "de",
					"string": "Wer entdeckte Ceres?",
					"keywords": "Ceres, Entdecker"
				},
				{
					"language": "es",
					"string": "¿Quién descubrió Ceres?",
					"keywords": "descubridor, Ceres"
				},
				{
					"language": "it",
					"string": "Chi ha scoperto Cerere?",
					"keywords": "scopritore, Cerere"
				},
				{
					"language": "fr",
					"string": "Qui a découvert Cérès?",
					"keywords": "découvreur, Cérès"
				},
				{
					"language": "nl",
					"string": "Wie ontdekte Ceres?",
					"keywords": "Ceres, ontdekker"
				},
				{
					"language": "hi_IN",
					"string": "सेरेस की खोज किसने की?",
					"keywords": "सेरेस, खोज"
				},
				{
					"language": "ro",
					"string": "Cine l-a descoperit pe Ceres?",
					"keywords": "descoperitor, Ceres"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Ceres_(dwarf_planet)> <http://dbpedia.org/ontology/discoverer> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Giuseppe_Piazzi"
						}
					}]
				}
			}]
		},
		{
			"id": "22",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which river does the Brooklyn Bridge cross?",
					"keywords": "river, cross, Brooklyn Bridge"
				},
				{
					"language": "de",
					"string": "Welchen Fluss überspannt die Brooklyn Bridge?",
					"keywords": "Fluss, überspannen, Brooklyn Bridge"
				},
				{
					"language": "es",
					"string": "¿Por qué río cruza la Brooklyn Bridge?",
					"keywords": "río, cruza, Brooklyn Bridge"
				},
				{
					"language": "it",
					"string": "Quale fiume attraversa il ponte di Brooklyn?",
					"keywords": "fiume, attraversare, ponte di Brooklyn"
				},
				{
					"language": "fr",
					"string": "Quelle cours d'eau est traversé par le pont de Brooklyn?",
					"keywords": "cours d'eau, pont de Brooklyn"
				},
				{
					"language": "nl",
					"string": "Welke rivier overspant de Brooklyn Bridge?",
					"keywords": "rivier, Brooklyn Bridge, overspant"
				},
				{
					"language": "hi_IN",
					"string": "ब्रुकलिन ब्रिज को कोनसी नदी पार करती है?",
					"keywords": "ब्रुकलिन ब्रिज, नदी"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {       \n        res:Brooklyn_Bridge dbo:crosses ?uri . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/East_River"
						}
					}]
				}
			}]
		},
		{
			"id": "23",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": false,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was called Frank The Tank?",
					"keywords": "called, Frank The Tank"
				},
				{
					"language": "de",
					"string": "Wer wurde Frank The Tank genannt?",
					"keywords": "nennen, Frank The Tank"
				},
				{
					"language": "es",
					"string": "¿Quién era llamado Frank The Tank?",
					"keywords": "llamado, Frank The Tank"
				},
				{
					"language": "it",
					"string": "Chi venne chiamato Frank The Tank?",
					"keywords": "chiamare, Frank The Tank"
				},
				{
					"language": "fr",
					"string": "Qui était surnommé Frank The Tank?",
					"keywords": "surnommé, Frank The Tank"
				},
				{
					"language": "nl",
					"string": "Wie werd er Frank The Tank genoemd?",
					"keywords": "Frank The Tank, bijnaam"
				},
				{
					"language": "hi_IN",
					"string": "कौनको फ्रैंक द टैंक कहा जाता था?",
					"keywords": "फ्रैंक द टैंक"
				},
				{
					"language": "ro",
					"string": "Cine era numit Frank The Tank?",
					"keywords": "numit, Frank The Tank"
				}
			],
			"query": {
				"sparql": "PREFIX dbp: <http://dbpedia.org/property/> \nSELECT DISTINCT ?uri \nWHERE { \n        ?uri dbp:nickname 'Frank The Tank'@en . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Frank_Young_(basketball)"
						}
					}]
				}
			}]
		},
		{
			"id": "24",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the largest country in the world?",
					"keywords": "largest country, world"
				},
				{
					"language": "fa",
					"string": "بزرگترین کشور در دنیا کدام است؟",
					"keywords": "بزرگترین کشور، دنیا"
				},
				{
					"language": "de",
					"string": "Was ist das größte Land der Welt?",
					"keywords": "größtes Land"
				},
				{
					"language": "es",
					"string": "¿Cuál es el país más grande del mundo?",
					"keywords": "país, más grande mundo"
				},
				{
					"language": "it",
					"string": "Qual è la nazione più grande al mondo?",
					"keywords": "nazione, più grande al mondo"
				},
				{
					"language": "fr",
					"string": "Quel est le pays le plus grand du monde?",
					"keywords": "Pays, grandeur maximale"
				},
				{
					"language": "nl",
					"string": "Wat is het grootse land ter wereld?",
					"keywords": "grootste land"
				},
				{
					"language": "hi_IN",
					"string": "दुनिया का सबसे बड़ा देश क्या है?",
					"keywords": "सबसे बड़ा, देश"
				},
				{
					"language": "ro",
					"string": "Care este cea mai mare țară din lume?",
					"keywords": "cea mai mare țară, lume"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri a <http://dbpedia.org/ontology/Country> . ?uri <http://dbpedia.org/ontology/areaTotal> ?n . } ORDER BY DESC(?n) OFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Organization_for_Security_and_Co-operation_in_Europe"
						}
					}]
				}
			}]
		},
		{
			"id": "25",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the mayor of Paris?",
					"keywords": "mayor of Paris"
				},
				{
					"language": "fa",
					"string": "شهردار پاریس کیست؟",
					"keywords": "شهردار، پاریس"
				},
				{
					"language": "de",
					"string": "Wer ist Bürgermeister von Paris?",
					"keywords": "Paris, Bürgermeister"
				},
				{
					"language": "es",
					"string": "¿Quién es el alcalde de París?",
					"keywords": "alcalde París"
				},
				{
					"language": "it",
					"string": "Chi è il sindaco di Parigi?",
					"keywords": "sindaco di Parigi"
				},
				{
					"language": "fr",
					"string": "Qui est le maire de Paris?",
					"keywords": "maire, Paris"
				},
				{
					"language": "nl",
					"string": "Wie is de burgemeester van Parijs?",
					"keywords": "burgemeester, Parijs"
				},
				{
					"language": "hi_IN",
					"string": "पेरिस का महापौर कौन है?",
					"keywords": "पेरिस, महापौर"
				},
				{
					"language": "ro",
					"string": "Cine este primarul Parisului?",
					"keywords": "primarul Parisului"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Paris> <http://dbpedia.org/ontology/mayor> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Anne_Hidalgo"
						}
					}]
				}
			}]
		},
		{
			"id": "26",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the coach of Ankara's ice hockey team?",
					"keywords": "coach, ice hockey team, Ankara"
				},
				{
					"language": "fa",
					"string": "سرمربی تیم هاکی آنکارا کیست؟",
					"keywords": "سرمربی، تیم هاکی آنکارا"
				},
				{
					"language": "de",
					"string": "Wer ist der Trainer von Ankaras Eishockeymannschaft?",
					"keywords": "Ankara, Eishockeymannschaft, Trainer"
				},
				{
					"language": "es",
					"string": "¿Quién es el entrenador del equipo de hockey sobre hielo de Ankara?",
					"keywords": "entrenador, equipo hockey sobre hielo, Ankara"
				},
				{
					"language": "it",
					"string": "Chi è l'allenatore della squadra di hockey di Ankara?",
					"keywords": "allenatore, squadra di hockey, Ankara"
				},
				{
					"language": "fr",
					"string": "Qui est le coach de l'équipe d'hockey sur glace d'Ankara?",
					"keywords": "coach, hockey sur glace, Ankara"
				},
				{
					"language": "nl",
					"string": "Wie is de coach van het ijshockey team van Ankara.",
					"keywords": "coach, ijshockey team, Ankara"
				},
				{
					"language": "hi_IN",
					"string": "अंकारा के आइस हॉकी टीम का कोच कौन है?",
					"keywords": "अंकारा, आइस हॉकी टीम, कोच"
				},
				{
					"language": "ro",
					"string": "Cine este antrenorul echipei de hochei pe gheață din Ankara?",
					"keywords": "antrenor, echipa de hochei pe gheață, Ankara"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?x <http://dbpedia.org/ontology/city> <http://dbpedia.org/resource/Ankara> . ?x <http://dbpedia.org/ontology/league> <http://dbpedia.org/resource/Turkish_Ice_Hockey_First_League> . ?x <http://dbpedia.org/ontology/coach> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/İbrahim_Oğuz"
						}
					}]
				}
			}]
		},
		{
			"id": "27",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the mayor of the capital of French Polynesia?",
					"keywords": "mayor, capital, French Polynesia"
				},
				{
					"language": "de",
					"string": "Wer ist der Bürgermeister der Hauptstadt von Französisch-Polynesien?",
					"keywords": "Bürgermeister, Hauptstadt, Französisch-Polynesien"
				},
				{
					"language": "es",
					"string": "¿Quien es el alcalde de la capital de la Polinesia Francesa?",
					"keywords": "alcalde, capital Polinesia Francesa"
				},
				{
					"language": "it",
					"string": "Chi è il sindaco della capitale della Polinesia Francese?",
					"keywords": "sindaco, capitale, Polinesia Francese"
				},
				{
					"language": "fr",
					"string": "Qui est le maire de la capitale de la Polynésie Francaise?",
					"keywords": "maire, capitale, Polynésie Francaise"
				},
				{
					"language": "nl",
					"string": "Wie is de burgermeester van de hoofdstad van Frans-Polynesië?",
					"keywords": "burgermeester, hoofdstad, Frans-Polynesië"
				},
				{
					"language": "hi_IN",
					"string": "फ्रेंच पोलिनेशिया की राजधानी का महापौर कौन है?",
					"keywords": "फ्रेंच पोलिनेशिया, राजधानी, महापौर"
				},
				{
					"language": "ro",
					"string": "Cine este primarul capitaliei Polineziei Franceze?",
					"keywords": "primar, capitală, Polinezia Franceză"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE { \n        res:French_Polynesia dbo:capital ?x .\n        ?x dbo:mayor ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Michel_Buillard"
						}
					}]
				}
			}]
		},
		{
			"id": "28",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which awards did Douglas Hofstadter win?",
					"keywords": "Douglas Hofstadter, award"
				},
				{
					"language": "de",
					"string": "Welche Preise hat Douglas Hofstadter gewonnen?",
					"keywords": "Douglas Hofstadter, Preise"
				},
				{
					"language": "es",
					"string": "¿Qué premios ha ganado Douglas Hofstadter?",
					"keywords": "Douglas Hofstadter, premios"
				},
				{
					"language": "it",
					"string": "Quali premi ha vinto Douglas Hofstadter?",
					"keywords": "Douglas Hofstadter, premio"
				},
				{
					"language": "fr",
					"string": "Quels prix ont été gagnés par Douglas Hofstadter?",
					"keywords": "Douglas Hofstadter, prix"
				},
				{
					"language": "nl",
					"string": "Welke prijzen heeft Douglas Hofstadter gewonnen?",
					"keywords": "Douglas Hofstadter, prijs"
				},
				{
					"language": "hi_IN",
					"string": "डगलस हॉफस्टैडर ने किन पुरस्कारों को जीता है?",
					"keywords": "डगलस हॉफस्टैडर, पुरस्कार, जीत"
				},
				{
					"language": "ro",
					"string": "Ce premii a câștigat Douglas Hofstadter?",
					"keywords": "Douglas Hofstadter, premii"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/>\nSELECT DISTINCT ?uri\nWHERE {\n        res:Douglas_Hofstadter dbo:award ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/National_Book_Award"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/American_Academy_of_Arts_and_Sciences"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Pulitzer_Prize"
							}
						}
					]
				}
			}]
		},
		{
			"id": "29",
			"answertype": "string",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How much did the Lego Movie cost?",
					"keywords": "Lego Movie, cost"
				},
				{
					"language": "fa",
					"string": "فیلم لگو چقدر هزینه داشت؟",
					"keywords": "فیلم لگو، هزینه"
				},
				{
					"language": "de",
					"string": "Wieviel hat der Legofilm gekostet?",
					"keywords": "Legofilm, Budget"
				},
				{
					"language": "es",
					"string": "¿Cuánto cuesta la película de Lego?",
					"keywords": "precio, película de Lego"
				},
				{
					"language": "it",
					"string": "Quanto è costato il Lego Movie?",
					"keywords": "costo, Lego Movie"
				},
				{
					"language": "fr",
					"string": "Combien a coûté le film de Légo",
					"keywords": "prix, film de Légo"
				},
				{
					"language": "nl",
					"string": "Hoveel heeft de Lego Movie gekost?",
					"keywords": "Lego Movie, kosten"
				},
				{
					"language": "hi_IN",
					"string": "लेगो मूवी की लागत कितनी थी?",
					"keywords": "लेगो मूवी, लागत"
				},
				{
					"language": "ro",
					"string": "Cât de mult a costat filmul Lego?",
					"keywords": "filmul Lego, costa"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?n WHERE { <http://dbpedia.org/resource/The_Lego_Movie> <http://dbpedia.org/ontology/budget> ?n . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"string"
					]
				},
				"results": {
					"bindings": [{
						"string": {
							"type": "literal",
							"value": "6.0E7"
						}
					}]
				}
			}]
		},
		{
			"id": "30",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Where does Piccadilly start?",
					"keywords": "Piccadilly, start"
				},
				{
					"language": "fa",
					"string": "پیکدیلی از کجا شروع می شود؟",
					"keywords": "پیکدیلی، شروع"
				},
				{
					"language": "de",
					"string": "Wo fängt Piccadilly an?",
					"keywords": "Start, Piccadilly"
				},
				{
					"language": "es",
					"string": "¿Dónde empieza Piccadilly?",
					"keywords": "principio, Piccadilly"
				},
				{
					"language": "it",
					"string": "Dove inizia Piccadilly?",
					"keywords": "Piccadilly, iniziare"
				},
				{
					"language": "fr",
					"string": "Où commence Piccadilly?",
					"keywords": "début, Piccadilly"
				},
				{
					"language": "nl",
					"string": "Waar begint Piccadilly?",
					"keywords": "Piccadilly, begin"
				},
				{
					"language": "hi_IN",
					"string": "पिकाडिली कहां शुरू होती है?",
					"keywords": "पिकाडिली, शुरू"
				},
				{
					"language": "ro",
					"string": "Unde începe Piccadilly?",
					"keywords": "Piccadilly, început"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/routeStart> <http://dbpedia.org/resource/Piccadilly>. } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Dover_Street"
						}
					}]
				}
			}]
		},
		{
			"id": "31",
			"answertype": "boolean",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Do Prince Harry and Prince William have the same parents?",
					"keywords": "Prince Harry, Prince William, same, parents"
				},
				{
					"language": "de",
					"string": "Haben Prinz Harry und Prinz William dieselben Eltern?",
					"keywords": "Prinz Harry, Prinz William, selbe Eltern"
				},
				{
					"language": "es",
					"string": "¿Tienen el príncipe Harry y el prínciple William la misma madre?",
					"keywords": "príncipe Harry, príncipe William, la misma madre"
				},
				{
					"language": "it",
					"string": "Il principe Harry e il principe William hanno gli stessi genitoris?",
					"keywords": "principe Harry, principe William, stessi genitori"
				},
				{
					"language": "fr",
					"string": "Ont les princes Harry et William la même mère?",
					"keywords": "prince Harry, Prince William, même mère"
				},
				{
					"language": "nl",
					"string": "Hebben prins Harry en prins William dezelfde ouders?",
					"keywords": "prins Harry, prins William, dezelfde, ouders"
				},
				{
					"language": "hi_IN",
					"string": "क्या प्रिंस हैरी और प्रिंस विलियम के माता-पिता एक हैं?",
					"keywords": "प्रिंस हैरी, प्रिंस विलियम, माता, पिता"
				},
				{
					"language": "ro",
					"string": "Prințul Harry și Prințul William au aceiași părinți?",
					"keywords": "Prințul Harry, Prințul William, aceiași, părinți"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nASK\nWHERE { \n        <http://dbpedia.org/resource/Prince_William,_Duke_of_Cambridge> dbo:parent ?x . \n        <http://dbpedia.org/resource/Prince_Harry> dbo:parent ?x .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "32",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": false,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who played Agent Smith in Matrix?",
					"keywords": "played, Agent Smith, Matrix"
				},
				{
					"language": "de",
					"string": "Wer hat Agent Smith in Matrix gespielt?",
					"keywords": "gespielt, Agent Smith, Matrix"
				},
				{
					"language": "es",
					"string": "¿Quien actuó como el agente Smith en Matrix?",
					"keywords": "actor, agente Smith, Matrix"
				},
				{
					"language": "it",
					"string": "Chi interpretava l'agente Smith in Matrix?",
					"keywords": "attore, agente Smith, Matrix"
				},
				{
					"language": "fr",
					"string": "Qui a joué Agent Smith dans Matrix?",
					"keywords": "acteur, Agent Smith, Matrix"
				},
				{
					"language": "nl",
					"string": "Wie speelde Agent Smith in Matrix?",
					"keywords": "speelde, Agent Smith, Matrix"
				},
				{
					"language": "hi_IN",
					"string": "मैट्रिक्स में किसने एजेंट स्मिथ को निभाया है ?",
					"keywords": "मैट्रिक्स, एजेंट, स्मिथ, निभाया"
				},
				{
					"language": "ro",
					"string": "Cine l-a jucat pe Agent Smith în Matrix?",
					"keywords": "jucat, Agent Smith, Matrix"
				}
			],
			"query": {
				"sparql": "PREFIX dbp: <http://dbpedia.org/property/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE { \n        res:Agent_Smith dbp:portrayer ?uri . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Hugo_Weaving"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Ian_Bliss"
							}
						}
					]
				}
			}]
		},
		{
			"id": "33",
			"answertype": "number",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many languages are spoken in Turkmenistan?",
					"keywords": "languages, Turkmenistan"
				},
				{
					"language": "fa",
					"string": "چند زبان در ترکمنستان صحبت می شود؟]",
					"keywords": "زبان، ترکمنستان"
				},
				{
					"language": "de",
					"string": "Wieviele Sprachen werden in Turkmenistan gesprochen?",
					"keywords": "Sprachen, Turkmenistan"
				},
				{
					"language": "es",
					"string": "¿Cuántos idiomas se hablan en Turkmenistán?",
					"keywords": "idiomas, Turkmenistán"
				},
				{
					"language": "it",
					"string": "Quante lingue sono parlate in Turkmenistan?",
					"keywords": "lingue, Turkmenistan"
				},
				{
					"language": "fr",
					"string": "Combien de langues sont parlées au Turkménistan?",
					"keywords": "langues, Turkménistan"
				},
				{
					"language": "nl",
					"string": "Hoeveel talen worden er gesproken in Turkmenistan?",
					"keywords": "talen, Turkmenistan"
				},
				{
					"language": "hi_IN",
					"string": "तुर्कमेनिस्तान में कितनी भाषाएं बोली जाती हैं?",
					"keywords": "तुर्कमेनिस्तान, भाषाएं, बोली"
				},
				{
					"language": "ro",
					"string": "Câte limbi sunt vorbite în Turkmenistan?",
					"keywords": "limbi, Turkmenistan"
				}
			],
			"query": {
				"sparql": "SELECT (COUNT(DISTINCT ?x) as ?c) WHERE {  <http://dbpedia.org/resource/Turkmenistan> <http://dbpedia.org/ontology/language> ?x . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "2"
						}
					}]
				}
			}]
		},
		{
			"id": "34",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which films did Julia Roberts as well as Richard Gere play?",
					"keywords": "film, play, Julia Roberts, Richard Gere"
				},
				{
					"language": "fa",
					"string": "در چه فیلم هایی جولیا رابرتس همچنین ریچارد گییر بازی کردند؟",
					"keywords": "فیلم هایی، جولیا رابرتس، ریچارد گییر، بازی"
				},
				{
					"language": "de",
					"string": "In welchen Filmen spielen sowohl Julia Roberts als auch Richard Gere mit?",
					"keywords": "Film, mitspielen, Julia Roberts, Richard Gere"
				},
				{
					"language": "es",
					"string": "¿En qué películas actúan Julia Roberts y Richard Gere?",
					"keywords": "película, actores, Julia Roberts, Richard Gere"
				},
				{
					"language": "it",
					"string": "In quali film recitano sia Julia Roberts che Richard Gere?",
					"keywords": "film, recitare, Julia Roberts, Richard Gere"
				},
				{
					"language": "fr",
					"string": "Dans quels films jouent Julia Roberts et Richard Gere?",
					"keywords": "films, Julia Roberts, Richard Gere"
				},
				{
					"language": "nl",
					"string": "In welke films speelden zowel Julia Roberts als Richard Gere?",
					"keywords": "film, speel, Julia Roberts, Richard Gere"
				},
				{
					"language": "hi_IN",
					"string": "जूलिया रॉबर्ट्स और रिचर्ड गेरे ने किस फिल्म में अभिनय किया था?",
					"keywords": "जूलिया रॉबर्ट्स, रिचर्ड गेरे, फिल्म, अभिनय"
				},
				{
					"language": "ro",
					"string": "În ce filme joacă Julia Roberts precum și Richard Gere?",
					"keywords": "film, joacă, Julia Roberts, Richard Gere"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Film> .  ?uri <http://dbpedia.org/ontology/starring> <http://dbpedia.org/resource/Julia_Roberts> .  ?uri <http://dbpedia.org/ontology/starring> <http://dbpedia.org/resource/Richard_Gere> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Runaway_Bride_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Pretty_Woman"
							}
						}
					]
				}
			}]
		},
		{
			"id": "35",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which country does the Ganges start?",
					"keywords": "Ganges, start, country"
				},
				{
					"language": "de",
					"string": "In welchem Land entspringt der Ganges?",
					"keywords": "Ganges, entspringen, Land"
				},
				{
					"language": "es",
					"string": "¿En qué país nace el Ganges?",
					"keywords": "Ganges, país, orígen"
				},
				{
					"language": "it",
					"string": "In quale stato nasce il Gange?",
					"keywords": "Gange, stato, origine"
				},
				{
					"language": "fr",
					"string": "Dans quel pays commence le Gange?",
					"keywords": "pays, commence, Gange"
				},
				{
					"language": "nl",
					"string": "In welk land ontspringt de Ganges?",
					"keywords": "ontspringt, Ganges"
				},
				{
					"language": "hi_IN",
					"string": "गंगा किस देश में शुरू होती है?",
					"keywords": "गंगा, देश, शुरू"
				},
				{
					"language": "ro",
					"string": "Din ce țară izvorăște Ganga?",
					"keywords": "Gangele, izvor, țară"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nSELECT DISTINCT ?uri \nWHERE { \n        res:Ganges dbo:sourceCountry ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/India"
						}
					}]
				}
			}]
		},
		{
			"id": "36",
			"answertype": "date",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which year was Rachel Stevens born?",
					"keywords": "year, born, Rachel Stevens"
				},
				{
					"language": "fa",
					"string": "ریچل استیونز در چه سالی متولد شد؟",
					"keywords": "ریچل استیونز، سالی، متولد"
				},
				{
					"language": "de",
					"string": "In welchem Jahr wurde Rachel Stevens geboren?",
					"keywords": "Jahr, geboren, Rachel Stevens"
				},
				{
					"language": "es",
					"string": "¿En que año nació Rachel Stevens?",
					"keywords": "año, nació, Rachel Stevens"
				},
				{
					"language": "it",
					"string": "In quale anno è nata Rachel Stevens?",
					"keywords": "anno nascita, Rachel Stevens"
				},
				{
					"language": "fr",
					"string": "Quand est née Rachel Stevens?",
					"keywords": "année de naissance, Rachel Stevens"
				},
				{
					"language": "nl",
					"string": "In welk jaar word Rachel Stevens geboren?",
					"keywords": "jaar, geboren, Rachel Stevens"
				},
				{
					"language": "hi_IN",
					"string": "रेचल स्टीवंस का जन्म किस साल हुआ था?",
					"keywords": "रेचल स्टीवंस, जन्म, साल"
				},
				{
					"language": "ro",
					"string": "În ce an s-a născut Rachel Stevens?",
					"keywords": "an, născut, Rachel Stevens"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/Rachel_Stevens> <http://dbpedia.org/ontology/birthYear> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"date"
					]
				},
				"results": {
					"bindings": [{
						"date": {
							"type": "literal",
							"value": "1978"
						}
					}]
				}
			}]
		},
		{
			"id": "37",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is Barack Obama a democrat?",
					"keywords": "Barack Obama, democrat"
				},
				{
					"language": "de",
					"string": "Ist Barack Obama ein Demokrat?",
					"keywords": "Barack Obama, Demokrat"
				},
				{
					"language": "es",
					"string": "¿Es Barack Obama demócrata?",
					"keywords": "Barack Obama, demócrata"
				},
				{
					"language": "it",
					"string": "Barack Obama è un democratico?",
					"keywords": "Barack Obama, democratico"
				},
				{
					"language": "fr",
					"string": "Barack Obama est-il un démocrate?",
					"keywords": "Barack Obama, démocrate"
				},
				{
					"language": "nl",
					"string": "Is Barack Obama een democraat?",
					"keywords": "Barack Obama, democraat"
				},
				{
					"language": "hi_IN",
					"string": "क्या बराक ओबामा एक डेमोक्रेट है?",
					"keywords": "बराक ओबामा, डेमोक्रेट"
				},
				{
					"language": "ro",
					"string": "Barack Obama este un democrat?",
					"keywords": "Barack Obama, democrat"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK\nWHERE { \n        res:Barack_Obama dbo:party <http://dbpedia.org/resource/Democratic_Party_(United_States)> . \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "38",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Where was Bach born?",
					"keywords": "birthplace, Bach"
				},
				{
					"language": "de",
					"string": "Wo wurde Bach geboren?",
					"keywords": "Bach, geboren"
				},
				{
					"language": "es",
					"string": "¿Dónde nació Bach?",
					"keywords": "Bach, lugar de nacimiento"
				},
				{
					"language": "it",
					"string": "Dove è nato Bach?",
					"keywords": "Bach, luogo di nascita"
				},
				{
					"language": "fr",
					"string": "Où est né Bach?",
					"keywords": "Lieu de naissance, Bach"
				},
				{
					"language": "nl",
					"string": "Waar was Bach geboren?",
					"keywords": "Bach, geboorteplaats"
				},
				{
					"language": "hi_IN",
					"string": "बाख का जन्म कहाँ हुवा था?",
					"keywords": "बाख, जन्म"
				},
				{
					"language": "ro",
					"string": "Unde s-a născut Bach?",
					"keywords": "locul nașterii, Bach"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n        res:Johann_Sebastian_Bach dbo:birthPlace ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Eisenach"
						}
					}]
				}
			}]
		},
		{
			"id": "39",
			"answertype": "number",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How often did Jane Fonda marry?",
					"keywords": "Jane Fonda, marry, how often"
				},
				{
					"language": "fa",
					"string": "جین فوندا چند بار ازدواج کرد؟",
					"keywords": "جین فوندا، ازدواج"
				},
				{
					"language": "de",
					"string": "Wie oft hat Jane Fonda geheiratet?",
					"keywords": "Jane Fonda, heiraten, wie oft"
				},
				{
					"language": "es",
					"string": "¿Cuántas veces ha estado casada Jane Fonda?",
					"keywords": "Jane Fonda, casada, cuántas veces"
				},
				{
					"language": "it",
					"string": "Quante volte si è sposata Jane Fonda?",
					"keywords": "Jane Fonda, sposata, quante volte"
				},
				{
					"language": "fr",
					"string": "Combien de fois s'est mariée Jane Fonda?",
					"keywords": "Jane Fonda, marriages, nombre de fois"
				},
				{
					"language": "nl",
					"string": "Hoe vaak is Jane Fonda getrouwd?",
					"keywords": "Jane Fonda, getrouwd, hoe vaak"
				},
				{
					"language": "hi_IN",
					"string": "जेन फोंडा ने कितनी बार शादी की?",
					"keywords": "जेन फोंडा, कितनी बार, शादी"
				},
				{
					"language": "ro",
					"string": "Cât de des s-a măritat Jane Fonda?",
					"keywords": "Jane Fonda, mărita, cât de des"
				}
			],
			"query": {
				"sparql": "SELECT (COUNT(DISTINCT ?uri) as ?c) WHERE {  <http://dbpedia.org/resource/Jane_Fonda> <http://dbpedia.org/ontology/spouse> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "3"
						}
					}]
				}
			}]
		},
		{
			"id": "40",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was the first to climb Mount Everest?",
					"keywords": "first, climb, mount Everest"
				},
				{
					"language": "de",
					"string": "Wer hat als erstes den Mount Everest bestiegen?",
					"keywords": "Mount Everest, besteigen, erster"
				},
				{
					"language": "es",
					"string": "¿Quién fue el primero en ascender al Monte Everest?",
					"keywords": "primero, ascender, Monte Everest"
				},
				{
					"language": "it",
					"string": "Chi è stato il primo a scalare il Monte Everest?",
					"keywords": "primo, scalare, Monte Everest"
				},
				{
					"language": "fr",
					"string": "Qui est la première personne à conquerir le Mont Everest?",
					"keywords": "première personne, Mont Everest"
				},
				{
					"language": "nl",
					"string": "Wie was de eerste die de Mount Everest beklom?",
					"keywords": "Mount Everest, eerste, beklimmen"
				},
				{
					"language": "hi_IN",
					"string": "माउंट एवरेस्ट पर चढ़ने वाला पहला कौन था?",
					"keywords": "माउंट एवरेस्ट, चढ़ने वाला पहला"
				},
				{
					"language": "ro",
					"string": "Cine a fost primul om care a escaladat muntele Everest?",
					"keywords": "primul, escaladat, muntele Everest"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/>\nSELECT DISTINCT ?uri\nWHERE {\n          res:Mount_Everest dbo:firstAscentPerson ?uri . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Tenzing_Norgay"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Edmund_Hillary"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Krzysztof_Wielicki"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Leszek_Cichy"
							}
						}
					]
				}
			}]
		},
		{
			"id": "41",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many people live in Poland?",
					"keywords": "How many people, Poland"
				},
				{
					"language": "fa",
					"string": "چند نفر در لهستان زندگی می کنند؟",
					"keywords": "نفر، لهستان، زندگی"
				},
				{
					"language": "de",
					"string": "Wieviele Menschen leben in Polen?",
					"keywords": "Polen, Einwohner"
				},
				{
					"language": "es",
					"string": "¿Cuántas personas viven en Polonia?",
					"keywords": "Cuántas personas, habitan, Polonia"
				},
				{
					"language": "it",
					"string": "Quante persone vivono in Polonia?",
					"keywords": "quante persone, Polonia"
				},
				{
					"language": "fr",
					"string": "Combien de personnes vivent en Pologne?",
					"keywords": "nombre de personnnes, Pologne"
				},
				{
					"language": "nl",
					"string": "Hoeveel mensen wonen er in Polen?",
					"keywords": "Polen, inwoners"
				},
				{
					"language": "hi_IN",
					"string": "पोलैंड में कितने लोग रहते हैं?",
					"keywords": "पोलैंड, कितन लोग, रहते"
				},
				{
					"language": "ro",
					"string": "Câți oameni locuiesc în Polonia?",
					"keywords": "câți oameni, Polonia"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Poland> <http://dbpedia.org/ontology/populationTotal> ?uri . }  "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "38483957"
						}
					}]
				}
			}]
		},
		{
			"id": "42",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the location of the Houses of Parliament?",
					"keywords": "location, Houses of Parliament"
				},
				{
					"language": "fa",
					"string": "مکان کاخ وستمینستر کجاست؟",
					"keywords": "مکان، کاخ وستمینستر"
				},
				{
					"language": "de",
					"string": "Wo ist der Westminster-Palast?",
					"keywords": "Ort, Westminster-Palast"
				},
				{
					"language": "es",
					"string": "¿Donde están situadas las Casas del Parlamento?",
					"keywords": "localización, casas del parlamento"
				},
				{
					"language": "it",
					"string": "Dove si trova il Palazzo di Westminster?",
					"keywords": "luogo, Palazzo di Westminster"
				},
				{
					"language": "fr",
					"string": "Où se trouve le palais de Westminster?",
					"keywords": "location, palais de Westminster"
				},
				{
					"language": "nl",
					"string": "Waar is de Palace of Westminster?",
					"keywords": "plaats, Palace of Westminster"
				},
				{
					"language": "hi_IN",
					"string": "संसद के सदनों का स्थान क्या है?",
					"keywords": "संसद के सदनों, स्थान"
				},
				{
					"language": "ro",
					"string": "Care este locația Palatului Westminster?",
					"keywords": "locație, Palatul Westminster"
				}
			],
			"query": {
				"sparql": "SELECT ?uri WHERE {  <http://dbpedia.org/resource/Palace_of_Westminster> <http://dbpedia.org/ontology/location> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Greater_London"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/United_Kingdom"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/England"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/City_of_Westminster"
							}
						}
					]
				}
			}]
		},
		{
			"id": "43",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is Christian Bale starring in Batman Begins?",
					"keywords": "Christian Bale, starring, Batman Begins"
				},
				{
					"language": "de",
					"string": "Spielt Christian Bale in Batman Begins mit?",
					"keywords": "Christian Bale, mitspielen, Batman Begins"
				},
				{
					"language": "es",
					"string": "¿Actúa Christian Bale en Batman Begins?",
					"keywords": "Christian Bale, actúa, Batman Begins"
				},
				{
					"language": "it",
					"string": "Christian Bale ha recitato in Batman Begins?",
					"keywords": "Christian Bale, recitare, Batman Begins"
				},
				{
					"language": "fr",
					"string": "Christian Bale joue-t-il dans Batman Begins?",
					"keywords": "Christian Bale, joue, Batman Begins"
				},
				{
					"language": "nl",
					"string": "Speelt Christian Bale in Batman Begins?",
					"keywords": "Christian Bale, speelt in, Batman Begins"
				},
				{
					"language": "hi_IN",
					"string": "क्या क्रिस्चियन बॉल बैटमैन बेगिंस में है?",
					"keywords": "क्रिस्चियन बॉल, बैटमैन बेगिंस"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE {\n\tres:Batman_Begins dbo:starring res:Christian_Bale .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": false
			}]
		},
		{
			"id": "44",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which country is the Limerick Lake?",
					"keywords": "Limerick Lake, country"
				},
				{
					"language": "de",
					"string": "In welchem Land befindet sich der Limerick Lake?",
					"keywords": "Limerick Lake, Land"
				},
				{
					"language": "es",
					"string": "¿En qué país se encuentra el lago Limerick?",
					"keywords": "lago Limerick, país"
				},
				{
					"language": "it",
					"string": "In quale stato si trova il lago Limerick?",
					"keywords": "lago Limerick, stato"
				},
				{
					"language": "fr",
					"string": "Dans quel pays se trouve le lac Limerick?",
					"keywords": "pays, lac Limerick"
				},
				{
					"language": "nl",
					"string": "In welk land ligt Limerick Lake?",
					"keywords": "Limerick Lake, land"
				},
				{
					"language": "hi_IN",
					"string": "लिमरिक झील किस देश में है?",
					"keywords": "लिमरिक झील, देश"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE { \n\tres:Limerick_Lake dbo:country ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Canada"
						}
					}]
				}
			}]
		},
		{
			"id": "45",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What was the last movie with Alec Guinness?",
					"keywords": "Alec Guinness, last, movie"
				},
				{
					"language": "fa",
					"string": "آخرین فیلم الک گینس چه بود؟",
					"keywords": "آخرین، فیلم، الک گینس"
				},
				{
					"language": "de",
					"string": "Was war der letzte Film mit Alec Guinness?",
					"keywords": "Alec Guinness, letzter, Film"
				},
				{
					"language": "es",
					"string": "¿Cuál fue la última película con Alec Guinness?",
					"keywords": "última película, Alec Guinness"
				},
				{
					"language": "it",
					"string": "Qual è l'ultimo film con Alec Guinness?",
					"keywords": "Alec Guinness, ultimo film"
				},
				{
					"language": "fr",
					"string": "Quel est le dernier film d'Alec Guinness?",
					"keywords": "Alec Guiness, dernier film"
				},
				{
					"language": "nl",
					"string": "Wat was de laatste film met Alec Guinness?",
					"keywords": "Alec Guinness, laatste, film"
				},
				{
					"language": "hi_IN",
					"string": "एलेक गिनीज की आखिरी फिल्म क्या थी?",
					"keywords": "एलेक गिनीज, आखिरी फिल्म"
				},
				{
					"language": "ro",
					"string": "Care a fost ultimul film cu Alec Guinness?",
					"keywords": "Alec Guinness, ultim, film"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Film> .  ?uri <http://dbpedia.org/ontology/starring> <http://dbpedia.org/resource/Alec_Guinness> .  ?uri <http://dbpedia.org/ontology/releaseDate> ?date . } ORDER BY DESC(?date) LIMIT 1 "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Kafka_(film)"
						}
					}]
				}
			}]
		},
		{
			"id": "46",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the highest mountain in Australia?",
					"keywords": "Australia, highest mountain"
				},
				{
					"language": "de",
					"string": "Was ist der höchste Berg in Australien?",
					"keywords": "Australien, höchster Berg"
				},
				{
					"language": "es",
					"string": "¿Cuál es la montaña más alta de Australia?",
					"keywords": "Australia, montaña más alta"
				},
				{
					"language": "it",
					"string": "Qual è la montagna più alta d'Australia?",
					"keywords": "Australia, montagna più alta"
				},
				{
					"language": "fr",
					"string": "Quelle est la plus haute montagne d'Australie?",
					"keywords": "plus haute montagne, Australie"
				},
				{
					"language": "nl",
					"string": "Wat is de hoogste berg van Australië?",
					"keywords": "Australië, hoogste berg"
				},
				{
					"language": "hi_IN",
					"string": "ऑस्ट्रेलिया में सर्वोच्च पर्वत कोनसा है?",
					"keywords": "ऑस्ट्रेलिया, सर्वोच्च पर्वत"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri \nWHERE {\n\t?uri rdf:type dbo:Mountain .\n        ?uri dbo:locatedInArea res:Australia .\n        ?uri dbo:elevation ?elevation .\n} \nORDER BY DESC(?elevation) LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Mawson_Peak"
						}
					}]
				}
			}]
		},
		{
			"id": "47",
			"answertype": "boolean",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is Frank Herbert still alive?",
					"keywords": "Frank Herbert, alive"
				},
				{
					"language": "de",
					"string": "Lebt Frank Herbert noch?",
					"keywords": "Frank Herbert, leben"
				},
				{
					"language": "es",
					"string": "¿Todavía vive Frank Herbert?",
					"keywords": "Frank Herbert, vive"
				},
				{
					"language": "it",
					"string": "Frank Herbert è ancora vivo?",
					"keywords": "Frank Herbert, vivente"
				},
				{
					"language": "fr",
					"string": "Frank Herbert est-il encore en vie?",
					"keywords": "Frank Herbert, en vie"
				},
				{
					"language": "nl",
					"string": "Leeft Frank Herbert nog?",
					"keywords": "Frank Herbert, leeft"
				},
				{
					"language": "hi_IN",
					"string": "क्या फ्रैंक हरबर्ट अभी भी जीवित है?",
					"keywords": "फ्रैंक हरबर्ट, जीवित"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE {\n\tOPTIONAL { res:Frank_Herbert dbo:deathDate ?date . }\n        FILTER (!BOUND(?date))\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": false
			}]
		},
		{
			"id": "48",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who created Family Guy?",
					"keywords": "create, Family Guy"
				},
				{
					"language": "fa",
					"string": "چه کسی مرد خانواده را ساخته است؟",
					"keywords": "مرد خانواده، ساخته"
				},
				{
					"language": "de",
					"string": "Wer hat sich Family Guy ausgedacht?",
					"keywords": "Family Guy, Erschaffer"
				},
				{
					"language": "es",
					"string": "¿Quién creó Family Guy?",
					"keywords": "creador, Family Guy"
				},
				{
					"language": "it",
					"string": "Chi ha creato I Griffin?",
					"keywords": "creare, I Griffin"
				},
				{
					"language": "fr",
					"string": "Qui est le créateur de Family Guy?",
					"keywords": "créateur, Family Guy?"
				},
				{
					"language": "nl",
					"string": "Wie heeft Family Guy bedacht?",
					"keywords": "Family Guy, schepper"
				},
				{
					"language": "hi_IN",
					"string": "फॅमिली गाए कौन ने बनाया है?",
					"keywords": "फॅमिली गाए, बनाया"
				},
				{
					"language": "ro",
					"string": "Cine a creat Family Guy?",
					"keywords": "creat, Family Guy"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Family_Guy> <http://dbpedia.org/ontology/creator> ?uri . }  "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Seth_MacFarlane"
						}
					}]
				}
			}]
		},
		{
			"id": "49",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the official language of Suriname?",
					"keywords": "Suriname, official language"
				},
				{
					"language": "de",
					"string": "Was ist die Amtssprache Von Surinam?",
					"keywords": "Surinam, Amtssprache"
				},
				{
					"language": "es",
					"string": "¿Cuál es la idioma oficial de Surinam?",
					"keywords": "Surinam, idioma oficial"
				},
				{
					"language": "it",
					"string": "Qual è la lingua ufficiale del Suriname?",
					"keywords": "Suriname, lingua ufficiale"
				},
				{
					"language": "fr",
					"string": "Quelle est la langue officielle du Suriname?",
					"keywords": "Suriname, langue officielle"
				},
				{
					"language": "nl",
					"string": "Wat is de officiële taal van Suriname?",
					"keywords": "Suriname, officiële taal"
				},
				{
					"language": "hi_IN",
					"string": "सूरीनाम की आधिकारिक भाषा क्या है?",
					"keywords": "सूरीनाम, आधिकारिक भाषा"
				},
				{
					"language": "ro",
					"string": "Care este limba oficială din Suriname?",
					"keywords": "Suriname, limba oficială"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE { \n        res:Suriname dbo:officialLanguage ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Dutch_language"
						}
					}]
				}
			}]
		},
		{
			"id": "50",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who wrote the song Hotel California?",
					"keywords": "write, song, Hotel California"
				},
				{
					"language": "fa",
					"string": "چه کسی آهنگ هتل کالیفرنیا را نوشت؟",
					"keywords": "اهنگ هتل کالیفرنیا، نوشت"
				},
				{
					"language": "de",
					"string": "Wer hat das Lied Hotel California geschrieben?",
					"keywords": "Lied, Hotel California, geschrieben"
				},
				{
					"language": "es",
					"string": "¿Quién escribió la canción Hotel California?",
					"keywords": "autor, canción Hotel California"
				},
				{
					"language": "it",
					"string": "Chi ha scritto la canzone Hotel California?",
					"keywords": "scrivere, canzone, Hotel California"
				},
				{
					"language": "fr",
					"string": "Qui a composé la chanson Hotel California?",
					"keywords": "compositeur, Hotel California, chanson"
				},
				{
					"language": "nl",
					"string": "Wie schreef het lied Hotel California?",
					"keywords": "lied, Hotel California, schrijver"
				},
				{
					"language": "hi_IN",
					"string": "गीत होटल कैलिफोर्निया कोंन ने लिखा था?",
					"keywords": "गीत होटल कैलिफोर्निया, लिखा"
				},
				{
					"language": "ro",
					"string": "Cine a compus cântecul Hotel California?",
					"keywords": "scrie, cântec, Hotel California"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Hotel_California> <http://dbpedia.org/ontology/writer> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Don_Felder"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Glenn_Frey"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Don_Henley"
							}
						}
					]
				}
			}]
		},
		{
			"id": "51",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all actors starring in movies directed by William Shatner.",
					"keywords": "actor, starring, movie, direct, William Shatner"
				},
				{
					"language": "fa",
					"string": "تمام بازیگرانی که در فیلم های کارگردانی شده توسط ویلیام شاتنر بازی کرده اند را لیست کن.",
					"keywords": "بازیگرانی، فیلم های، کارگردانی شده، ویلیام شاتنر، بازی کرده اند"
				},
				{
					"language": "de",
					"string": "Gib mir alle Schauspieler von Filmen, in denen William Shatner Regie geführt hat.",
					"keywords": "Schauspieler, Film, Regie, William Shatner"
				},
				{
					"language": "es",
					"string": "Dame todos los actores de películas dirigidas por William Shatner.",
					"keywords": "actor, película, director, William Shatner"
				},
				{
					"language": "it",
					"string": "Dammi tutti gli attori che recitano in film diretti da William Shatner.",
					"keywords": "attore, recitare, film, diretto, William Shatner"
				},
				{
					"language": "fr",
					"string": "Donnes-moi tous les acteurs qui ont joué dans des films réalisés par Williams Shatner.",
					"keywords": "acteur, film, réalisé, William Shatner"
				},
				{
					"language": "nl",
					"string": "Geef alle acteurs van films waar William Shatner de regie van voerde.",
					"keywords": "acteur, film, regisseur, William Shatner"
				},
				{
					"language": "hi_IN",
					"string": "विलियम शेटनेर द्वारा निर्देशित फिल्मों में सभी कलाकारों की सूचि दे।",
					"keywords": "विलियम शेटनेर, निर्देशित फिल्म, कलाकार"
				},
				{
					"language": "ro",
					"string": "Dă-mi toți actorii care joacă roluri principale în filme regizate de William Shatner.",
					"keywords": "actor, rol principal, film, regiza, William Shatner"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  ?x <http://dbpedia.org/ontology/director> <http://dbpedia.org/resource/William_Shatner> .  ?x <http://dbpedia.org/ontology/starring> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Tom_Towles"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/William_Shatner"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Brenda_Bakke"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/John_Prosky"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Dan_Martin_(actor)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Duane_Whitaker"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/J.T._Colosa"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Chuck_Williams_(actor)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Dick_Van_Patten"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Dan_Gauthier"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Amy_Acker"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Rickey_Medlocke"
							}
						}
					]
				}
			}]
		},
		{
			"id": "52",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is in a chocolate chip cookie?",
					"keywords": "ingredients, chocolate chip cookie"
				},
				{
					"language": "fa",
					"string": "چه چیزهایی در یک کیک شکلاتی هست؟",
					"keywords": "کیک شکلاتی"
				},
				{
					"language": "de",
					"string": "Was ist in Chocolate Chip Cookies drin?",
					"keywords": "Zutaten, Chocolate Chip Cookie"
				},
				{
					"language": "es",
					"string": "¿Qué contiene una galleta de chocolate?",
					"keywords": "ingredientes, galleta de chocolate"
				},
				{
					"language": "it",
					"string": "Cosa c'e' in un biscotto con gocce di cioccolato?",
					"keywords": "ingredienti, biscotto con gocce di cioccolato"
				},
				{
					"language": "fr",
					"string": "Quels sont les ingrédients d'un cookie au chocolat",
					"keywords": "ingrédients, cookie au chocolat"
				},
				{
					"language": "nl",
					"string": "Wat heb je nodig voor chocolate chip cookies?",
					"keywords": "ingrediënten, chocolate chip cookie"
				},
				{
					"language": "hi_IN",
					"string": "चॉकलेट चिप कुकी में क्या है?",
					"keywords": "चॉकलेट चिप कुकी, सामग्री"
				},
				{
					"language": "ro",
					"string": "Ce conține un biscuit cu fulgi de ciocolată?",
					"keywords": "ingrediente, biscuit cu fulgi de ciocolată"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Chocolate_chip_cookie> <http://dbpedia.org/ontology/ingredient> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Chocolate_chip"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Egg_(food)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Butter"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Shortening"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Sodium_bicarbonate"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Flour"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Salt"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Brown_sugar"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Vanilla"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Sugar"
							}
						}
					]
				}
			}]
		},
		{
			"id": "53",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": false,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all professional skateboarders from Sweden.",
					"keywords": "professional, skateboarder, Sweden"
				},
				{
					"language": "de",
					"string": "Gib mir alle Profiskateboarder aus Schweden.",
					"keywords": "Profiskateboarder, Schweden"
				},
				{
					"language": "es",
					"string": "Dame todos las skateboarders profesionales de Suecia.",
					"keywords": "skateboarder profesional, Suecia"
				},
				{
					"language": "it",
					"string": "Dammi tutti gli skateboarders professionisti di Svezia.",
					"keywords": "skateboarders professionisti, Svezia"
				},
				{
					"language": "fr",
					"string": "Donne-moi tous les skateboarders professionnels de Suède.",
					"keywords": "skateboarders professionnels, Suède"
				},
				{
					"language": "nl",
					"string": "Noem alle professionele skateboarders uit Zweden.",
					"keywords": "skateboarder, professioneel, Zweden"
				},
				{
					"language": "hi_IN",
					"string": "मुझे स्वीडन से सभी पेशेवर स्केटबोर्डर की सूचि दो।",
					"keywords": "स्वीडन, पेशेवर स्केटबोर्डर, सूचि"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX dbp: <http://dbpedia.org/property/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n\t?uri dbo:occupation res:Skateboarding . \n        { ?uri dbo:birthPlace res:Sweden . }\n        UNION\n        { ?uri dbo:birthPlace ?place . \n          ?place dbo:country res:Sweden . }\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Ali_Boulala"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Tony_Magnusson"
							}
						}
					]
				}
			}]
		},
		{
			"id": "54",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which ingredients do I need for carrot cake?",
					"keywords": "carrot cake, ingredients"
				},
				{
					"language": "fa",
					"string": "چه مواد اولیه ای را من برای کیک هویج نیاز دارم؟",
					"keywords": "مواد اولیه ای، کیک هویج"
				},
				{
					"language": "de",
					"string": "Welche Zutaten brauche ich für Möhrenkuchen?",
					"keywords": "Möhrenkuchen, Zutaten"
				},
				{
					"language": "es",
					"string": "¿Qué ingredientes son necesarios para una tarta de zanahorias?",
					"keywords": "ingredientes, tarta de zanahorias?"
				},
				{
					"language": "it",
					"string": "Di quali ingredienti ho bisogno per la torta di carote?",
					"keywords": "ingredienti, torta di carote"
				},
				{
					"language": "fr",
					"string": "Quels sont les ingrédients du gateau aux carottes?",
					"keywords": "ingrédients, gateau aux carottes"
				},
				{
					"language": "nl",
					"string": "Welke ingrediënten heb ik nodig voor worteltaart?",
					"keywords": "worteltaart, ingrediënten"
				},
				{
					"language": "hi_IN",
					"string": "गाजर केक के लिए मुझे कौन से सामग्री की आवश्यकता है?",
					"keywords": "गाजर केक, सामग्री"
				},
				{
					"language": "ro",
					"string": "De ce ingrediente am nevoie pentru tort de morcovi?",
					"keywords": "tort de morcovi, ingrediente"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/Carrot_cake> <http://dbpedia.org/ontology/ingredient> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Almond"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Carrot"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Egg_(food)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Flour"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Baking_powder"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Sugar"
							}
						}
					]
				}
			}]
		},
		{
			"id": "55",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Does Neymar play for Real Madrid?",
					"keywords": "Neymar, play, Real Madrid"
				},
				{
					"language": "fa",
					"string": "آیا نیمار برای رئال مادرید بازی می کند؟",
					"keywords": "نیمار، رئال مادرید، بازی"
				},
				{
					"language": "de",
					"string": "Spielt Neymar für Real Madrid?",
					"keywords": "Neymar, spielen für, Real Madrid"
				},
				{
					"language": "es",
					"string": "¿juega Neymar en el Real Madrid?",
					"keywords": "Neymar, jugador, Real Madrid"
				},
				{
					"language": "it",
					"string": "Neymar gioca per il Real Madrid?",
					"keywords": "Neymar, giocare, Real Madrid"
				},
				{
					"language": "fr",
					"string": "Est-ce que Neymar joue pour Madrid?",
					"keywords": "Neymar, joueur, Madrid"
				},
				{
					"language": "nl",
					"string": "Speelt Neymar bij Real Madrid?",
					"keywords": "Neymar, spelen bij, Real Madrid"
				},
				{
					"language": "hi_IN",
					"string": "क्या नेयमार रियल मैड्रिड के लिए खेलते हैं?",
					"keywords": "नेयमार, रियल मैड्रिड, खेलते"
				},
				{
					"language": "ro",
					"string": "Neymar joacă pentru Real Madrid?",
					"keywords": "Neymar, joacă, Real Madrid"
				}
			],
			"query": {
				"sparql": "ASK WHERE { <http://dbpedia.org/resource/Neymar> <http://dbpedia.org/ontology/team> <http://dbpedia.org/resource/Real_Madrid_C.F.> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "false"
						}
					}]
				}
			}]
		},
		{
			"id": "56",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which computer scientist won an oscar?",
					"keywords": "computer scientist, win, oscar"
				},
				{
					"language": "fa",
					"string": "کدام دانشمند کامپیوتر اسکار برده است؟",
					"keywords": "دانشمند کامپیوتر، اسکار"
				},
				{
					"language": "de",
					"string": "Welcher Informatiker hat einen Oscar gewonnen?",
					"keywords": "Informatiker, Oscar, gewonnen"
				},
				{
					"language": "es",
					"string": "¿Qué ingeniero informático ganó un Oscar?",
					"keywords": "ingeniero informático, ganó, Oscar"
				},
				{
					"language": "it",
					"string": "Quale informatico ha vinto un Oscar?",
					"keywords": "informatico, vincere, Oscar"
				},
				{
					"language": "fr",
					"string": "Quel informaticien a gagné un Oscar?",
					"keywords": "informaticient, gagné, Oscar"
				},
				{
					"language": "nl",
					"string": "Welke informaticus won een Oscar?",
					"keywords": "informaticus, winnen, Oscar"
				},
				{
					"language": "hi_IN",
					"string": "किस कंप्यूटर वैज्ञानिक ने ऑस्कर जीता?",
					"keywords": "कंप्यूटर वैज्ञानिक, ऑस्कर, जीत"
				},
				{
					"language": "ro",
					"string": "Care informatician a câștigat un Oscar?",
					"keywords": "informatician, câștigat, Oscar"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { { ?uri <http://dbpedia.org/ontology/field> <http://dbpedia.org/resource/Computer_science> . } UNION { ?uri <http://purl.org/dc/elements/1.1/description> ?s . FILTER regex(?s,'computer scientist','i') } ?uri <http://dbpedia.org/ontology/award> <http://dbpedia.org/resource/Academy_Awards> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Edwin_Catmull"
						}
					}]
				}
			}]
		},
		{
			"id": "57",
			"answertype": "number",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many companies were founded in the same year as Google?",
					"keywords": "companies, founded, same year, Google"
				},
				{
					"language": "fa",
					"string": "چه تعداد شرکت در سال یکسانی با گوگل تأسیس شدند؟",
					"keywords": "شرکت، سال یکسانی، گوگل، تأسیس"
				},
				{
					"language": "de",
					"string": "Wieviele Firmen wurden im selben Jahr wie Google gegründet?",
					"keywords": "Firmen, gegründet, selbes Jahr, Google"
				},
				{
					"language": "es",
					"string": "¿Cuántas compañías fueron fundadas en el mismo año que Google?",
					"keywords": "compañías, fundadas, mismo año Google"
				},
				{
					"language": "it",
					"string": "Quante società sono state fondate nello stesso anno di Google?",
					"keywords": "società, fondate, stesso anno, Google"
				},
				{
					"language": "fr",
					"string": "Combien de companies ont été fondées la même année que Google?",
					"keywords": "nombre, companies, fondées, même année, Google"
				},
				{
					"language": "nl",
					"string": "Hoeveel bedrijven werden opgericht in hetzelfde jaar als Google?",
					"keywords": "bedrijven, opgericht, hetzelfde jaar, Google"
				},
				{
					"language": "hi_IN",
					"string": "कितनी कंपनियां स्थापित की गईं जिस वर्ष में गूगल हुइ?",
					"keywords": "कंपनिया, वर्ष, गूगल, स्थापित"
				},
				{
					"language": "ro",
					"string": "Câte companii au fost înființate în același an cu Google?",
					"keywords": "companii, înființate, același an, Google"
				}
			],
			"query": {
				"sparql": "SELECT (COUNT(DISTINCT ?uri) as ?c) WHERE {  ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Company> .  ?uri <http://dbpedia.org/ontology/foundingYear> ?year .  <http://dbpedia.org/resource/Google> <http://dbpedia.org/ontology/foundingYear> ?year . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "0"
						}
					}]
				}
			}]
		},
		{
			"id": "58",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which UK city are the headquarters of the MI6?",
					"keywords": "MI6, headquarters, city, UK"
				},
				{
					"language": "de",
					"string": "In welcher Stadt im Vereinigten Königreich ist das Hauptquartier des MI6?",
					"keywords": "MI6, Hauptquartier, Stadt, Vereinigtes Königreich"
				},
				{
					"language": "es",
					"string": "¿En qué ciudad del reino unido se encuentra el cuartel genetal del MI6?",
					"keywords": "MI6, cuartel general, ciudad, reino unido"
				},
				{
					"language": "it",
					"string": "In quale città del Regno Unito si trova il quartier generale del MI6?",
					"keywords": "MI6, quartier generale, città, Regno Unito"
				},
				{
					"language": "fr",
					"string": "Dans quelle ville anglaise se trouvent les quartiers genéraux du MI6?",
					"keywords": "ville anglaise, quartiers genéraux, MI6"
				},
				{
					"language": "nl",
					"string": "In welke Britse stad is het hoofdkwartier van MI6 gevestigd?",
					"keywords": "MI6, hoofdkwartier, Britse stad"
				},
				{
					"language": "hi_IN",
					"string": "किस यूके शहर में एमआई-6 का मुख्यालय है?",
					"keywords": "यूके, शहर, एमआई-6, मुख्यालय"
				},
				{
					"language": "ro",
					"string": "În care oraș din Regatul Unit se află cartierul general al MI6?",
					"keywords": "MI6, cartier general, oraș, Regatul Unit"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/> \nPREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri \nWHERE { \n        res:Secret_Intelligence_Service dbo:headquarter ?uri . \n        ?uri dbo:country res:United_Kingdom . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/London"
						}
					}]
				}
			}]
		},
		{
			"id": "59",
			"answertype": "boolean",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Was the Cuban Missile Crisis earlier than the Bay of Pigs Invasion?",
					"keywords": "Cuban Missile Crisis, earlier, Bay of Pigs Invasion"
				},
				{
					"language": "de",
					"string": "War die Kubakrise vor der Schweinebuchtinvasion?",
					"keywords": "Kubakrise, vor, Schweinebuchtinvasion"
				},
				{
					"language": "es",
					"string": "¿Fué la crisis de cuba antes de la invasión de bahía de cochinos?",
					"keywords": "crísis de cuba, anterior a la invasión de bahía de cochinos?"
				},
				{
					"language": "it",
					"string": "La crisi dei missili di Cuba avvenne prima dello sbarco nella Baia dei Porci?",
					"keywords": "Crisi dei missili di Cuba, precedente, sbarco nella Baia dei Porci"
				},
				{
					"language": "fr",
					"string": "La crise des missiles de Cuba a-t-elle eu lieu avant the débarquement de la baie des Cochons?",
					"keywords": "Débarquement de la baie des Cochons, crise des missiles de Cuba"
				},
				{
					"language": "nl",
					"string": "Was de Cubacrisis eerder dan de invasie in de Varkensbaai?",
					"keywords": "Cubacrisis, eerder dan, invasie in de Varkensbaai"
				},
				{
					"language": "hi_IN",
					"string": "क्या क्यूबाई मिसाइल संकट बे ऑफ़ पिग्स आक्रमण के पहले हुआ था?",
					"keywords": "क्यूबाई मिसाइल संकट, बे ऑफ़ पिग्स आक्रमण, पहले हुआ"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE {\n        res:Cuban_Missile_Crisis dbo:date ?x .\n\tres:Bay_of_Pigs_Invasion dbo:date ?y .\n\tFILTER (?x < ?y)\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": false
			}]
		},
		{
			"id": "60",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What does IYCM stand for?",
					"keywords": "IYCM, stand for"
				},
				{
					"language": "de",
					"string": "Wofür steht IYCM?",
					"keywords": "IYCM, stehen für"
				},
				{
					"language": "es",
					"string": "¿Qué abrevia IYCM?",
					"keywords": "IYCM, abreviación"
				},
				{
					"language": "it",
					"string": "Che cosa significa IYCM?",
					"keywords": "IYCM, significato"
				},
				{
					"language": "fr",
					"string": "Que veut dire IYCM?",
					"keywords": "IYCM, signification"
				},
				{
					"language": "nl",
					"string": "Waarvoor staat de afkorting IYCM?",
					"keywords": "IYCM, staat voor"
				},
				{
					"language": "hi_IN",
					"string": "आईसीवायएम् का पूर्ण प्रपत्र क्या है?",
					"keywords": "आईसीवायएम, पूर्ण प्रपत्र"
				},
				{
					"language": "ro",
					"string": "Ce înseamnă IYCM?",
					"keywords": "IYCM, înseamnă"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {\n        ?uri dbo:abbreviation 'IYCM' .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Youth_Climate_Movement"
						}
					}]
				}
			}]
		},
		{
			"id": "61",
			"answertype": "date",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "When did the Ming dynasty dissolve?",
					"keywords": "dissolve, Ming dynasty"
				},
				{
					"language": "de",
					"string": "Wann endete die Ming-Dynastie?",
					"keywords": "Ende, Ming-Dynastie"
				},
				{
					"language": "es",
					"string": "¿Cuándo se disolvió la dinastía de Ming?",
					"keywords": "disolvió, dinastía de Ming"
				},
				{
					"language": "it",
					"string": "Quando è scomparsa la dinastia Ming?",
					"keywords": "anno scomparsa, dinastia Ming"
				},
				{
					"language": "fr",
					"string": "Quand la dynastie Ming s'est-elle dissoute?",
					"keywords": "dissoudre, dynastie Ming"
				},
				{
					"language": "nl",
					"string": "Wanneer werd de Ming-dynastie beëindigd?",
					"keywords": "Ming-dynastie, beëindigd"
				},
				{
					"language": "hi_IN",
					"string": "मिंग राजवंश को कब भंग किया?",
					"keywords": "मिंग राजवंश, भंग"
				},
				{
					"language": "ro",
					"string": "Când a dispărut dinastia Ming?",
					"keywords": "dispărut, dinastia Ming"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/> \nSELECT DISTINCT ?date\nWHERE {  \n        res:Ming_dynasty dbo:dissolutionDate ?date .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"date"
					]
				},
				"results": {
					"bindings": [{
						"date": {
							"type": "literal",
							"value": "1644-04-25"
						}
					}]
				}
			}]
		},
		{
			"id": "62",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "List all episodes of the first season of the HBO television series The Sopranos!",
					"keywords": "HBO, television series, Sopranos, first season, episode"
				},
				{
					"language": "de",
					"string": "Liste alle Episoden der ersten Staffel der HBO-Fernsehserie Die Sopranos auf.",
					"keywords": "HBO-Fernsehserie, Sopranos, erste Staffel, Episode"
				},
				{
					"language": "es",
					"string": "Dame todos los episodios de la prímera época de la serie de HBO Los Sporanos.",
					"keywords": "serie televisiva de HBO, Los Sopranos, primera época, episodios"
				},
				{
					"language": "it",
					"string": "Elenca tutti gli episodi della prima stagione della serie televisiva di HBO i Sopranos!",
					"keywords": "serie televisiva di HBO, i Sopranos, prima stagione, episodio"
				},
				{
					"language": "fr",
					"string": "Donnes-moi tous les épisodes de la première saison de la série télévisée de HBO les Sopranos.",
					"keywords": "épisodes de la première saison, HBO, les Sopranos"
				},
				{
					"language": "nl",
					"string": "Noem alle afleveringen van het eerste seizoen van de HBO-serie The Sopranos.",
					"keywords": "HBO-serie, The Sopranos, eerste seizoen, aflevering"
				},
				{
					"language": "hi_IN",
					"string": "एचबीओ टेलीविजन श्रृंखला द सोप्रानोस! के पहले सीज़न के सभी एपिसोड की सूची बनाएं ।",
					"keywords": "एचबीओ, टेलीविजन श्रृंखला, द सोप्रानोस!, पहले सीज़न, सभी एपिसोड"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n\t?uri dbo:series res:The_Sopranos  .\n        ?uri dbo:seasonNumber 1 .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Isabella_(The_Sopranos)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Meadowlands_(The_Sopranos)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Legend_of_Tennessee_Moltisanti"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/I_Dream_of_Jeannie_Cusamano"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Boca_(The_Sopranos)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Nobody_Knows_Anything"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Pax_Soprana"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/A_Hit_Is_a_Hit"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Denial,_Anger,_Acceptance"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/College_(The_Sopranos)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/46_Long"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Sopranos_(episode)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Down_Neck"
							}
						}
					]
				}
			}]
		},
		{
			"id": "63",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the total population of Melbourne, Florida?",
					"keywords": "total population, Melbourne Florida"
				},
				{
					"language": "de",
					"string": "Was ist die Gesamteinwohnerzahl von Melbourne, Florida?",
					"keywords": "Gesamteinwohnerzahl, Melbourne Florida"
				},
				{
					"language": "es",
					"string": "¿Cuál es la población total de Melbourne, Florida?",
					"keywords": "población total, Melbourne Florida"
				},
				{
					"language": "it",
					"string": "Qual è la popolazione totale di Melbourne, Florida?",
					"keywords": "popolazione totale, Melbourne, Florida"
				},
				{
					"language": "fr",
					"string": "Quelle est la population totale de Melbourne, Floride?",
					"keywords": "population totale, Melbourne, Floride"
				},
				{
					"language": "nl",
					"string": "Wat is de bevolking van Melbourne, Florida?",
					"keywords": "bevolking, Melbourne Florida"
				},
				{
					"language": "hi_IN",
					"string": "मेलबोर्न, फ्लोरिडा की कुल आबादी क्या है?",
					"keywords": "मेलबोर्न, फ्लोरिडा, कुल आबादी"
				},
				{
					"language": "ro",
					"string": "Care este populația totală a Melbourne, Florida?",
					"keywords": "populația totală, Melbourne Florida"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nSELECT ?uri \nWHERE { \n        <http://dbpedia.org/resource/Melbourne,_Florida> dbo:populationTotal ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "76068"
						}
					}]
				}
			}]
		},
		{
			"id": "64",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Did Arnold Schwarzenegger attend a university?",
					"keywords": "Arnold Schwarzenegger, attend, university"
				},
				{
					"language": "de",
					"string": "Hat Arnold Schwarzenegger eine Universität besucht?",
					"keywords": "Arnold Schwarzenegger, Universität, besucht"
				},
				{
					"language": "es",
					"string": "¿Fue Arnold Schwarzenegger a la universidad?",
					"keywords": "Arnold Schwarzenegger, universidad"
				},
				{
					"language": "it",
					"string": "Arnold Schwarzenegger ha frequentato l'Università?",
					"keywords": "Arnold Schwarzenegger, frequentare, Università"
				},
				{
					"language": "fr",
					"string": "Est-ce que Arnold Schwarzenegger a étudié à une université?",
					"keywords": "Arnold Schwarzenegger, etudié, université"
				},
				{
					"language": "nl",
					"string": "Had Arnold Schwarzenegger aan een universiteit gestudeerd?",
					"keywords": "Arnold Schwarzenegger, universiteit, gestudeerd"
				},
				{
					"language": "hi_IN",
					"string": "क्या अर्नोल्ड श्वार्ज़नेगर विश्वविद्यालय गए थे?",
					"keywords": "अर्नोल्ड श्वार्ज़नेगर, विश्वविद्यालय"
				},
				{
					"language": "ro",
					"string": "Arnold Schwarzenegger a frecventat o universitate?",
					"keywords": "Arnold Schwarzenegger, frecventa, universitate"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/> \nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nASK\nWHERE {\n        res:Arnold_Schwarzenegger dbo:almaMater ?x .\n        ?x rdf:type dbo:University .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "65",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What country is Mount Everest in?",
					"keywords": "country, Mount Everest"
				},
				{
					"language": "de",
					"string": "In welchem Land ist der Mount Everest?",
					"keywords": "Land, Mount Everest"
				},
				{
					"language": "es",
					"string": "¿En que país esta el monte Everest?",
					"keywords": "país, monte Everest"
				},
				{
					"language": "it",
					"string": "In quale stato si trova il Monte Everest?",
					"keywords": "stato, Monte Everest"
				},
				{
					"language": "fr",
					"string": "Dans quel pays se trouve le mont Everest?",
					"keywords": "pays, Everest"
				},
				{
					"language": "nl",
					"string": "In welke land is de Mount Everest?",
					"keywords": "land, Mount Everest"
				},
				{
					"language": "hi_IN",
					"string": "कोनसे देश में माउंट एवरेस्ट है?",
					"keywords": "देश, माउंट एवरेस्ट"
				},
				{
					"language": "ro",
					"string": "În ce țară se află muntele Everest?",
					"keywords": "țară, muntele Everest"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \nSELECT DISTINCT ?uri\nWHERE { \n        res:Mount_Everest dbo:locatedInArea ?uri . \n        ?uri rdf:type dbo:Country .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/China"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Nepal"
							}
						}
					]
				}
			}]
		},
		{
			"id": "66",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the largest city in Australia?",
					"keywords": "Australia, largest city"
				},
				{
					"language": "de",
					"string": "Was ist die größte Stadt in Australien?",
					"keywords": "Australien, größte Stadt"
				},
				{
					"language": "es",
					"string": "¿Cuál es la cuidad más grande de Australia?",
					"keywords": "Australia, ciudad más grande"
				},
				{
					"language": "it",
					"string": "Qual è la città più grande d'Australia?",
					"keywords": "Australia, città più grande"
				},
				{
					"language": "fr",
					"string": "Quelle est la plus grande ville d'Australie?",
					"keywords": "plus grande ville, Australie"
				},
				{
					"language": "nl",
					"string": "Wat is de grootste stad van Australië?",
					"keywords": "grootste stad, Australië"
				},
				{
					"language": "hi_IN",
					"string": "ऑस्ट्रेलिया में सबसे बड़ा शहर क्या है?",
					"keywords": "ऑस्ट्रेलिया, सबसे बड़ा शहर"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n\tres:Australia dbo:largestCity ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Sydney"
						}
					}]
				}
			}]
		},
		{
			"id": "67",
			"answertype": "list",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all launch pads operated by NASA.",
					"keywords": "launch pad, operate, NASA"
				},
				{
					"language": "de",
					"string": "Gib mir alle von der NASA betriebenen Startrampen.",
					"keywords": "Startrampe, betreiben, NASA"
				},
				{
					"language": "es",
					"string": "Dame todas las plataformas de lanzamiento operadas por la NASA.",
					"keywords": "plataforma de lanzamiento, operada por la NASA"
				},
				{
					"language": "it",
					"string": "Dammi tutte le rampe di lancio gestite dalla NASA.",
					"keywords": "rampa di lancio, gestire, NASA"
				},
				{
					"language": "fr",
					"string": "Donnes-moi toutes les rampes de lancements des Etats-unis.",
					"keywords": "rampes de lancements, Etats-unis"
				},
				{
					"language": "nl",
					"string": "Noem alle lanceerplatformen van de NASA.",
					"keywords": "lanceerplatform, NASA"
				},
				{
					"language": "hi_IN",
					"string": "मुझे नासा द्वारा संचालित सभी लॉन्च पैड की सूचि दें।",
					"keywords": "नासा, संचालित, लॉन्च पैड"
				},
				{
					"language": "ro",
					"string": "Dă-mi toate rampele de lansare operate de către NASA.",
					"keywords": "rampă de lansare, operat, NASA"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \nSELECT DISTINCT ?uri \nWHERE { \n        ?uri rdf:type dbo:LaunchPad .  \n        ?uri dbo:operator res:NASA . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"list"
					]
				},
				"results": {
					"bindings": [{
							"list": {
								"type": "list",
								"value": "http://dbpedia.org/resource/Mid-Atlantic_Regional_Spaceport_Launch_Pad_0"
							}
						},
						{
							"list": {
								"type": "list",
								"value": "http://dbpedia.org/resource/Keweenaw_Rocket_Range"
							}
						},
						{
							"list": {
								"type": "list",
								"value": "http://dbpedia.org/resource/Spaceport_Florida_Launch_Complex_36"
							}
						},
						{
							"list": {
								"type": "list",
								"value": "http://dbpedia.org/resource/Wallops_Flight_Facility_Launch_Area_3"
							}
						},
						{
							"list": {
								"type": "list",
								"value": "http://dbpedia.org/resource/Broglio_Space_Centre"
							}
						},
						{
							"list": {
								"type": "list",
								"value": "http://dbpedia.org/resource/Kennedy_Space_Center_Launch_Complex_39"
							}
						},
						{
							"list": {
								"type": "list",
								"value": "http://dbpedia.org/resource/Cape_Canaveral_Air_Force_Station_Launch_Complex_13"
							}
						}
					]
				}
			}]
		},
		{
			"id": "68",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the mayor of Tel Aviv?",
					"keywords": "Tel Aviv, mayor"
				},
				{
					"language": "de",
					"string": "Wer ist der Bürgermeister von Tel Aviv?",
					"keywords": "Tel Aviv, Bürgermeister"
				},
				{
					"language": "es",
					"string": "¿Quién es el alcalde de Tel Aviv?",
					"keywords": "Tel Aviv, alcalde"
				},
				{
					"language": "it",
					"string": "Chi è il sindaco di Tel Aviv?",
					"keywords": "Tel Aviv, sindaco"
				},
				{
					"language": "fr",
					"string": "Qui est le maire de Tel Aviv?",
					"keywords": "Tel Aviv, maire"
				},
				{
					"language": "nl",
					"string": "Wie is de burgemeester van Tel Aviv?",
					"keywords": "Tel Aviv, burgemeester"
				},
				{
					"language": "hi_IN",
					"string": "तेल अवीव के महापौर कौन हैं?",
					"keywords": "तेल अवीव, महापौर"
				},
				{
					"language": "ro",
					"string": "Cien este primarul din Tel Aviv?",
					"keywords": "Tel Aviv, primar"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE { \n        res:Tel_Aviv dbo:leaderName ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Ron_Huldai"
						}
					}]
				}
			}]
		},
		{
			"id": "69",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "List all episodes of the first season of the HBO television series The Sopranos.",
					"keywords": "HBO, television series, Sopranos, first season, episode"
				},
				{
					"language": "de",
					"string": "Liste alle Episoden der ersten Staffel der HBO-Fernsehserie Die Sopranos auf.",
					"keywords": "HBO-Fernsehserie, Sopranos, erste Staffel, Episode"
				},
				{
					"language": "es",
					"string": "Dame todos los episodios de la prímera época de la serie de HBO Los Sporanos.",
					"keywords": "serie televisiva de HBO, Los Sopranos, primera época, episodios"
				},
				{
					"language": "it",
					"string": "Elenca tutti gli episodi della prima stagione della serie televisiva di HBO i Sopranos.",
					"keywords": "serie televisiva di HBO, i Sopranos, prima stagione, episodio"
				},
				{
					"language": "fr",
					"string": "Donnes-moi tous les épisodes de la première saison de la série télévisée de HBO les Sopranos.",
					"keywords": "épisodes de la première saison, HBO, les Sopranos"
				},
				{
					"language": "nl",
					"string": "Noem alle afleveringen van het eerste seizoen van de HBO-serie The Sopranos.",
					"keywords": "HBO-serie, The Sopranos, eerste seizoen, aflevering"
				},
				{
					"language": "hi_IN",
					"string": "एचओओ टेलीविजन श्रृंखला द सोप्रानोस के पहले सीज़न के सभी एपिसोड की सूची बनाएं। '",
					"keywords": "एचओओ टेलीविजन श्रृंखला, द सोप्रानोस, पहले सीज़न, एपिसोड"
				},
				{
					"language": "ro",
					"string": "Listează toate episodele din primul sezon al serialului HBO de televiziune The Sopranos",
					"keywords": "HBO, serial de televiziune, Sopranos, primul sezon, episod"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n        ?uri dbo:series res:The_Sopranos  .\n        ?uri dbo:seasonNumber 1 .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Isabella_(The_Sopranos)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Meadowlands_(The_Sopranos)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Legend_of_Tennessee_Moltisanti"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/I_Dream_of_Jeannie_Cusamano"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Boca_(The_Sopranos)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Nobody_Knows_Anything"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Pax_Soprana"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/A_Hit_Is_a_Hit"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Denial,_Anger,_Acceptance"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/College_(The_Sopranos)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/46_Long"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Sopranos_(episode)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Down_Neck"
							}
						}
					]
				}
			}]
		},
		{
			"id": "70",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who created Batman?",
					"keywords": "Batman, creator"
				},
				{
					"language": "fa",
					"string": "چه کسی بتمن را ساخت؟",
					"keywords": "بتمن، ساخت"
				},
				{
					"language": "de",
					"string": "Wer hat Batman erfunden?",
					"keywords": "Batman, Erfinder"
				},
				{
					"language": "es",
					"string": "¿Quién creó Batman?",
					"keywords": "creador, comic, Capitán América"
				},
				{
					"language": "it",
					"string": "Chi ha creato Batman?",
					"keywords": "creatore, Batman"
				},
				{
					"language": "fr",
					"string": "Qui a créé la bande dessinée Captain America?",
					"keywords": "bande dessinée, créer, Captain America"
				},
				{
					"language": "nl",
					"string": "Door wie werd Batman bedacht?",
					"keywords": "bedenker, Batman"
				},
				{
					"language": "hi_IN",
					"string": "किसने बैटमैन बनाया?",
					"keywords": "बैटमैन, निर्माता"
				},
				{
					"language": "ro",
					"string": "Cine a creat Batman?",
					"keywords": "Batman, creat"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/Batman> <http://dbpedia.org/ontology/creator> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Bill_Finger"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Bob_Kane"
							}
						}
					]
				}
			}]
		},
		{
			"id": "71",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who played Gus Fring in Breaking Bad?",
					"keywords": "play, Gus Fring, Breaking Bad"
				},
				{
					"language": "fa",
					"string": "چه کسی گوستاوو فرینگ را در بریکینگ بد بازی کرد؟",
					"keywords": "گوستاوو فرینگ، بریکینگ بد، بازی"
				},
				{
					"language": "de",
					"string": "Wer hat Gus Fring in Breaking Bad gespielt?",
					"keywords": "Gus Fring, Breaking Bad, Schauspieler"
				},
				{
					"language": "es",
					"string": "¿Quién interpreto a Gus Fring en Breaking Bad?",
					"keywords": "actor, Gus Fring, Breaking Bad"
				},
				{
					"language": "it",
					"string": "Chi ha interpretato Gustavo Fring in Breaking Bad - Reazioni collaterali?",
					"keywords": "interpretare, Gustavo Fring, Breaking Bad - Reazioni collaterali"
				},
				{
					"language": "fr",
					"string": "Qui joua Gus Fring dans Breaking Bad?",
					"keywords": "acteur, Gus Fring, Breaking Bad"
				},
				{
					"language": "nl",
					"string": "Wie speelt Gus Fring in Breaking Bad?",
					"keywords": "Gus Fring, acteur, Breaking Bad"
				},
				{
					"language": "hi_IN",
					"string": "किसने गस फ्रिंग को ब्रेकिंग बैड में निभाया है ?",
					"keywords": "गस फ्रिंग, ब्रेकिंग बैड, निभाया, अभिनेता"
				},
				{
					"language": "ro",
					"string": "Cine l-a jucat pe Gus Fring în Breaking Bad?",
					"keywords": "jucat, Gus Fring, Breaking Bad"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Gus_Fring> <http://dbpedia.org/ontology/portrayer> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Giancarlo_Esposito"
						}
					}]
				}
			}]
		},
		{
			"id": "72",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which programming language is GIMP written?",
					"keywords": "GIMP, programming language"
				},
				{
					"language": "de",
					"string": "In welcher Programmiersprache wurde GIMP geschrieben?",
					"keywords": "GIMP, Programmiersprache"
				},
				{
					"language": "es",
					"string": "¿En qué lenguaje de programación esta programado GIMP?",
					"keywords": "GIMP, lenguaje de programación"
				},
				{
					"language": "it",
					"string": "In quale linguaggio di programmazione è scritto GIMP?",
					"keywords": "GIMP, linguaggio di programmazione"
				},
				{
					"language": "fr",
					"string": "En quel langage de programmation a été écrit GIMP?",
					"keywords": "langage de programmation, GIMP"
				},
				{
					"language": "nl",
					"string": "In welke programmeertaal is GIMP geschreven?",
					"keywords": "GIMP, programmeertaal"
				},
				{
					"language": "hi_IN",
					"string": "जीआईएमपी किस प्रोग्रामिंग भाषा में लिखी गई है?",
					"keywords": "जीआईएमपी, प्रोग्रामिंग भाषा"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE { \n\tres:GIMP dbo:programmingLanguage ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/C_(programming_language)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/GTK+"
							}
						}
					]
				}
			}]
		},
		{
			"id": "73",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which ancient empire could you pay with cocoa beans?",
					"keywords": "ancient empire, pay, cocoa beans"
				},
				{
					"language": "fa",
					"string": "در کدام امپراتوری باستانی می توان با دانه های کاکائو داد و ستد کرد؟",
					"keywords": "امپراتوری باستانی، دانه های کاکائو، داد و ستد"
				},
				{
					"language": "de",
					"string": "In welchem alten Reich konnte man mit Kakaobohnen bezahlen?",
					"keywords": "altes Reich, bezahlen, Kakaobohnen"
				},
				{
					"language": "es",
					"string": "En que imperio antiguo pagaría con granos de cacao?",
					"keywords": "imperio antiguo, pagar, granos cacao"
				},
				{
					"language": "it",
					"string": "In quale antico impero era possibile pagare con le fave di cacao?",
					"keywords": "antico impero, pagare, fave di cacao"
				},
				{
					"language": "fr",
					"string": "Dans quel empire ancien payait-on avec des fèves de cacao?",
					"keywords": "empire ancien, monnaie, fève de cacao"
				},
				{
					"language": "nl",
					"string": "In welke oude imperium kon je met cacaobonen betalen?",
					"keywords": "oude imperium, betalen, cacaobonen"
				},
				{
					"language": "hi_IN",
					"string": "किस प्राचीन साम्राज्य में आप कोको बीन से भुगतान कर सकते हैं?",
					"keywords": "प्राचीन साम्राज्य, कोको बीन, भुगतान"
				},
				{
					"language": "ro",
					"string": "În ce imperiu antic puteai plăti cu boabe de cacao?",
					"keywords": "imperiu antic, plăti, boabe de cacao"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/currency> <http://dbpedia.org/resource/Cocoa_bean> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Aztec_Empire"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Tabasco_(former_state)"
							}
						}
					]
				}
			}]
		},
		{
			"id": "74",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the editor of Forbes?",
					"keywords": "Forbes, editor"
				},
				{
					"language": "de",
					"string": "Wer ist der Herausgeber von Forbes?",
					"keywords": "Forbes, Herausgeber"
				},
				{
					"language": "es",
					"string": "¿Quién es el editor de Forbes?",
					"keywords": "Forbes, editor"
				},
				{
					"language": "it",
					"string": "Chi è l'editore di Forbes?",
					"keywords": "Forbes, editore"
				},
				{
					"language": "fr",
					"string": "Qui est le rédacteur en chef de Forbes?",
					"keywords": "Forbes, rédacteur en chef"
				},
				{
					"language": "nl",
					"string": "Wie is de uitgever van Forbes.",
					"keywords": "Forbes, uitgever"
				},
				{
					"language": "hi_IN",
					"string": "फोर्ब्स के संपादक कौन है?",
					"keywords": "फोर्ब्स, संपादक"
				},
				{
					"language": "ro",
					"string": "Cine este editorul Forbes?",
					"keywords": "Forbes, editor"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/>\nSELECT DISTINCT ?uri \nWHERE {\n        res:Forbes dbo:editor ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Steve_Forbes"
						}
					}]
				}
			}]
		},
		{
			"id": "75",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many people live in the capital of Australia?",
					"keywords": "Australia, capital, people, live"
				},
				{
					"language": "de",
					"string": "Wieviele Menschen leben in der Hauptstadt Australiens?",
					"keywords": "Australien, Hauptstadt, Menschen, leben"
				},
				{
					"language": "es",
					"string": "¿Cuánta gente vive en la capital de Australia?",
					"keywords": "Australia, capital, habitantes"
				},
				{
					"language": "it",
					"string": "Quante persone vivono nella capitale dell'Australia?",
					"keywords": "Australia, capitale, abitanti"
				},
				{
					"language": "fr",
					"string": "Quel est le nombre d'habitants de la capitale de l'Australie?",
					"keywords": "nombre d'habitants, capitale, Australie"
				},
				{
					"language": "nl",
					"string": "Hoeveel mensen wonen er in de hoofdstad van Australië?",
					"keywords": "inwoners, hoofdstad van Australië"
				},
				{
					"language": "hi_IN",
					"string": "कितने लोग ऑस्ट्रेलिया की राजधानी में रहते हैं?",
					"keywords": "ऑस्ट्रेलिया, राजधानी, आबादी"
				},
				{
					"language": "ro",
					"string": "Câți oameni locuiesc in capitala Australiei?",
					"keywords": "Australia, captital, oameni, locui"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?num \nWHERE {\n        res:Australia dbo:capital ?x .\n        ?x dbo:populationTotal ?num .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "381488"
						}
					}]
				}
			}]
		},
		{
			"id": "76",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which professional surfers were born in Australia?",
					"keywords": "professional surfer, born, Australia"
				},
				{
					"language": "de",
					"string": "Welche Profisurfer wurden in Australien geboren?",
					"keywords": "Profisurfer, geboren, Australien"
				},
				{
					"language": "es",
					"string": "¿Qué surfistas profesionales nacieron en Australia?",
					"keywords": "surfista profesional, nacido, Australia"
				},
				{
					"language": "it",
					"string": "Quali surfisti professionisti sono nati in Australia?",
					"keywords": "surfista professionista, nato, Australia"
				},
				{
					"language": "fr",
					"string": "Quels surfeurs professionels sont nés en Australie?",
					"keywords": "surfeurs professionels, Australie"
				},
				{
					"language": "nl",
					"string": "Welke professionele surfers werden geboren in Australië?",
					"keywords": "professionele surfer, Australië"
				},
				{
					"language": "hi_IN",
					"string": "कौन से पेशेवर सर्फरस ऑस्ट्रेलिया में पैदा हुए थे?",
					"keywords": "पेशेवर सर्फरस, ऑस्ट्रेलिया, पैदा"
				},
				{
					"language": "ro",
					"string": "Ce surferi profesioniști s-au născut în Australia?",
					"keywords": "surfer profesionist, născut, Australia"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nSELECT DISTINCT ?uri \nWHERE { \n        ?uri dbo:occupation res:Surfing .  \n        ?uri dbo:birthPlace res:Australia . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Ian_Cairns"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Midget_Farrelly"
							}
						}
					]
				}
			}]
		},
		{
			"id": "77",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which electronics companies were founded in Beijing?",
					"keywords": "electronics companies, founded, Beijing"
				},
				{
					"language": "fa",
					"string": "چه شرکت های الکترونیکی در پکن تأسیس شدند؟",
					"keywords": "شرکت های الکترونیکی، پکن، تأسیس"
				},
				{
					"language": "de",
					"string": "Welche Elektronikunternehmen wurden in Peking gegründet?",
					"keywords": "Elektronikunternehmen, gegründet in, Peking"
				},
				{
					"language": "es",
					"string": "¿Qué compañías de electrónica fueron fundadas en Pekín?",
					"keywords": "compañías de electrónica, fundadas, Pekín"
				},
				{
					"language": "it",
					"string": "Quali società di elettronica sono state fondate a Pechino?",
					"keywords": "società di elettronica, fondate, Pechino"
				},
				{
					"language": "fr",
					"string": "Quelles sont les companies d'électronique fondées à Beijing?",
					"keywords": "companies d'électronique, fondées, Beijing"
				},
				{
					"language": "nl",
					"string": "Welke elektronica bedrijven zijn opgericht in Peking?",
					"keywords": "elektronica bedrijven, opgericht in, Peking"
				},
				{
					"language": "hi_IN",
					"string": "बीजिंग में कौन से इलेक्ट्रॉनिक्स कंपनियां स्थापित की गई थीं?",
					"keywords": "बीजिंग, इलेक्ट्रॉनिक्स कंपनियां, स्थापित"
				},
				{
					"language": "ro",
					"string": "Care companii de electronice au fost fondate în Beijing?",
					"keywords": "companii de electronice, fondat, Beijing"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri a <http://dbpedia.org/ontology/Company> . ?uri <http://dbpedia.org/ontology/industry> <http://dbpedia.org/resource/Electronics> . ?uri <http://dbpedia.org/ontology/foundationPlace> <http://dbpedia.org/resource/Beijing> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Lenovo"
						}
					}]
				}
			}]
		},
		{
			"id": "78",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all video games published by Mean Hamster Software.",
					"keywords": "video game, publish, Mean Hamster Software"
				},
				{
					"language": "de",
					"string": "Gib mir alle Videospiele von Mean Hamster Software.",
					"keywords": "Videospiel, Mean Hamster Software"
				},
				{
					"language": "es",
					"string": "Dame todos los videojuegos de Mean Hamster Software.",
					"keywords": "videojuego, Mean Hamster Software"
				},
				{
					"language": "it",
					"string": "Dammi tutti i videogiochi di Mean Hamster Software.",
					"keywords": "videogioco, prodotto, Mean Hamster Software"
				},
				{
					"language": "fr",
					"string": "Donnes-moi tous les jeux vidéos publiés par Mean Hamster Software.",
					"keywords": "jeux vidéos, publiés, Mean Hamster Software"
				},
				{
					"language": "nl",
					"string": "Geef me alle videogames van Mean Hamster Software.",
					"keywords": "videogame, Mean Hamster Software"
				},
				{
					"language": "hi_IN",
					"string": "मीन हम्सटर सॉफ्टवेयर द्वारा प्रकाशित सभी वीडियो गेम की सूचि दें। '",
					"keywords": "मीन हम्सटर सॉफ्टवेयर, प्रकाशित, वीडियो गेम"
				},
				{
					"language": "ro",
					"string": "Dă-mi toate jocurile video publicate de Mean Hamster Software",
					"keywords": "joc video, publicat, Mean Hamster Software"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri \nWHERE {\n      ?uri rdf:type dbo:VideoGame .\n      ?uri dbo:publisher res:Mean_Hamster_Software . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Crossbow_(video_game)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Riven"
							}
						}
					]
				}
			}]
		},
		{
			"id": "79",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many Aldi stores are there?",
					"keywords": "own, Aldi"
				},
				{
					"language": "fa",
					"string": "چه تعداد فروشگاه آلدی وجود دارد؟",
					"keywords": "فروشگاه، آلدی"
				},
				{
					"language": "de",
					"string": "Wieviele Aldi-Filialen gibt es?",
					"keywords": "gehören, Aldi"
				},
				{
					"language": "es",
					"string": "¿Cuántas tiendas Aldi hay?",
					"keywords": "pertenece, Aldi"
				},
				{
					"language": "it",
					"string": "Quanti negozi Aldi ci sono?",
					"keywords": "possedere, Aldi"
				},
				{
					"language": "fr",
					"string": "Combien de magasins Aldi sont là?",
					"keywords": "possède, Aldi"
				},
				{
					"language": "nl",
					"string": "Hoeveel Aldi winkels zijn er?",
					"keywords": "eigenaar, Aldi"
				},
				{
					"language": "hi_IN",
					"string": "आलड़ी के कितने स्टोर हैं?",
					"keywords": "आलड़ी, कितने स्टोर"
				},
				{
					"language": "ro",
					"string": "Câte magazine Aldi există?",
					"keywords": "avea, Aldi"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?number WHERE {  <http://dbpedia.org/resource/Aldi> <http://dbpedia.org/ontology/numberOfLocations> ?number . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "9600"
						}
					}]
				}
			}]
		},
		{
			"id": "80",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the capital of Cameroon?",
					"keywords": "capital, Cameroon"
				},
				{
					"language": "fa",
					"string": "پایتخت کامرون کجاست؟",
					"keywords": "پایتخت، کامرون"
				},
				{
					"language": "de",
					"string": "Was ist die Hauptstadt von Kamerun?",
					"keywords": "Hauptstadt, Kamerun"
				},
				{
					"language": "es",
					"string": "¿Cuál es la capital de Camerún?",
					"keywords": "capital, Camerún"
				},
				{
					"language": "it",
					"string": "Qual è la capitale del Cameroon",
					"keywords": "capitale, Cameroon"
				},
				{
					"language": "fr",
					"string": "Quelle est la capitale du Cameroun?",
					"keywords": "capitale, Cameroun"
				},
				{
					"language": "nl",
					"string": "Wat is de hoofdstad van Kameroen?",
					"keywords": "hoofdstad, Kameroen"
				},
				{
					"language": "hi_IN",
					"string": "कैमरून की राजधानी क्या है?",
					"keywords": "कैमरून, राजधानी"
				},
				{
					"language": "ro",
					"string": "Care este capitala Camerunului?",
					"keywords": "capitală, Camerun"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Cameroon> <http://dbpedia.org/ontology/capital> ?uri. } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Yaoundé"
						}
					}]
				}
			}]
		},
		{
			"id": "81",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is there a video game called Battle Chess?",
					"keywords": "video game, Battle Chess"
				},
				{
					"language": "de",
					"string": "Gibt es ein Videospiel, das Battle Chess heißt?",
					"keywords": "Videospiel, Battle Chess"
				},
				{
					"language": "es",
					"string": "¿Hay algún videojuego que se llame Battle Chess?",
					"keywords": "videojuego, Battle Chess"
				},
				{
					"language": "it",
					"string": "Esiste un videogioco che si chiama Battle Chess?",
					"keywords": "videogioco, Battle Chess"
				},
				{
					"language": "fr",
					"string": "Existe-t-il un jeu vidéo appelé Battle Chess?",
					"keywords": "jeu vidéo, Battle Chess"
				},
				{
					"language": "nl",
					"string": "Bestaat er een videospel met de naam Battle Chess?",
					"keywords": "videospel, Battle Chess"
				},
				{
					"language": "hi_IN",
					"string": "क्या बैटल चैस नामक वीडियो गेम है?",
					"keywords": "बैटल चैस, वीडियो गेम"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nASK \nWHERE {\n\t?uri rdf:type dbo:VideoGame .\n        ?uri rdfs:label 'Battle Chess'@en .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "82",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Was the wife of president Lincoln called Mary?",
					"keywords": "Lincoln, president, wife, called, Mary"
				},
				{
					"language": "de",
					"string": "Hieß die Frau von Präsident Lincoln Mary?",
					"keywords": "Lincoln, Präsident, Frau, heißen, Mary"
				},
				{
					"language": "es",
					"string": "¿La mujer del presidente Lincoln se llama Mary?",
					"keywords": "mujer, presidente, Lincoln, se lamma, Mary"
				},
				{
					"language": "it",
					"string": "La moglie del presidente Lincoln si chiamava Mary?",
					"keywords": "moglie, presidente, Lincoln, si chiama, Mary"
				},
				{
					"language": "fr",
					"string": "Est-ce que l'épouse du président Lincoln s'appelait Mary?",
					"keywords": "épouse, Lincoln, Mary, appelle"
				},
				{
					"language": "nl",
					"string": "Heette de echtgenote van president Lincoln Mary?",
					"keywords": "echtgenote, Lincoln, Mary"
				},
				{
					"language": "hi_IN",
					"string": "क्या राष्ट्रपति लिंकन की पत्नी का नाम मैरी था?",
					"keywords": "राष्ट्रपति लिंकन, पत्नी, मैरी"
				},
				{
					"language": "ro",
					"string": "Este soția președintelui Lincoln numită Mary?",
					"keywords": "Lincoln, președinte, soție, numită, Mary"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nASK \nWHERE {\n        res:Abraham_Lincoln dbo:spouse ?spouse .\n        ?spouse rdfs:label ?name .\n        FILTER(regex(?name,'Mary')) \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "83",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all movies directed by Francis Ford Coppola.",
					"keywords": "movie, direct, Francis Ford Coppola"
				},
				{
					"language": "fa",
					"string": "تمام فیلم های کارگردانی شده توسط فرانسیس فورد کوپولا را لیست کن.",
					"keywords": "فیلم، کارگردانی، فرانسیس فورد کوپولا"
				},
				{
					"language": "de",
					"string": "Gib mir alle Filme, bei denen Francis Ford Coppola Regie geführt hat.",
					"keywords": "Film, Regie, Francis Ford Coppola"
				},
				{
					"language": "es",
					"string": "Dame todas las películas que haya dirigido Francis Ford Coppola.",
					"keywords": "película, director, Francis Ford Coppola"
				},
				{
					"language": "it",
					"string": "Dammi tutti i film diretti da Francis Ford Coppola.",
					"keywords": "film, dirigere, Francis Ford Coppola"
				},
				{
					"language": "fr",
					"string": "Donnes-moi tous les films dont Francis réalisés par Francis Ford Coppola.",
					"keywords": "film, directeur, Francis Ford Coppola"
				},
				{
					"language": "nl",
					"string": "Geef alle films die werden geregisseerd door Francis Ford Coppola.",
					"keywords": "films, regisseur, Francis Ford Coppola"
				},
				{
					"language": "hi_IN",
					"string": "मुझे फ्रांसिस फोर्ड कोपोला द्वारा निर्देशित सभी फिल्मों की सूचि दे ।",
					"keywords": "फ्रांसिस फोर्ड कोपोला, निर्देशित, फिल्मों"
				},
				{
					"language": "ro",
					"string": "Dă-mi toate filmele regizate de Francis Ford Coppola.",
					"keywords": "film, regizat, Francis Ford Coppola"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Film> .  ?uri <http://dbpedia.org/ontology/director> <http://dbpedia.org/resource/Francis_Ford_Coppola> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Rain_People"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Godfather_Part_III"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/One_from_the_Heart"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Outsiders_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Terror_(1963_film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Godfather_Part_II"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Twixt_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Cotton_Club_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Tonight_for_Sure"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Peggy_Sue_Got_Married"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Apocalypse_Now"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Conversation"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Apocalypse_Now_Redux"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Bram_Stoker's_Dracula"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Rumble_Fish"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Hammett_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Godfather"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Youth_Without_Youth_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Finian's_Rainbow_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Dementia_13"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Tucker:_The_Man_and_His_Dream"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Gardens_of_Stone"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Rainmaker_(1997_film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/You're_a_Big_Boy_Now"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Tetro"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/New_York_Stories"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Godfather_Saga"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Godfather_(film_series)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Battle_Beyond_the_Sun"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Bellboy_and_the_Playgirls"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Captain_EO__Captain_EO__1"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Jack_(1996_film)"
							}
						}
					]
				}
			}]
		},
		{
			"id": "84",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which of Tim Burton's films had the highest budget?",
					"keywords": "highest budget, film, Tim Burton"
				},
				{
					"language": "de",
					"string": "Welcher von Tim Burtons Filmen hatte das höchste Budget?",
					"keywords": "höchstes Budget, Film, Tim Burton"
				},
				{
					"language": "es",
					"string": "¿Cuál es la película de Tim Burton con el mayor presupuesto?",
					"keywords": "película de Tim Burton, mayor presupuesto"
				},
				{
					"language": "it",
					"string": "Quali film di Tim Burton hanno avuto il budget più alto?",
					"keywords": "budget più alto, film, Tim Burton"
				},
				{
					"language": "fr",
					"string": "Quel film de Tim Burton a le budget le plus haut?",
					"keywords": "budget le plus haut, Tim Burton"
				},
				{
					"language": "nl",
					"string": "Welke van Tim Burton's films had het hoogste budget?",
					"keywords": "film, Tim Burton, hoogste budget"
				},
				{
					"language": "hi_IN",
					"string": "टिम बर्टन की फिल्मों में से कौन सी का सबसे ज्यादा बजट था?",
					"keywords": "टिम बर्टन, फिल्मो, सबसे ज्यादा बजट"
				},
				{
					"language": "ro",
					"string": "Care dintre filmele lui Tom Burton a avut cel mai mare buget?",
					"keywords": "cel mai mare buget, film, Tim Burton"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE { \n        ?uri dbo:director res:Tim_Burton .\n        ?uri dbo:budget ?b .\n}\nORDER BY ?b\nOFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Big_Eyes"
						}
					}]
				}
			}]
		},
		{
			"id": "85",
			"answertype": "boolean",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Does Breaking Bad have more episodes than Game of Thrones?",
					"keywords": "Breaking Bad, episodes, more than, Game of Thrones"
				},
				{
					"language": "de",
					"string": "Hat Breaking Bad mehr Episoden als Game of Thrones?",
					"keywords": "Breaking Bad, Episoden, mehr als, Game of Thrones"
				},
				{
					"language": "es",
					"string": "¿Tiene Breaking Bad más episodios que Game of Thrones?",
					"keywords": "Breaking Bad, episodios, más que, Game of Thrones"
				},
				{
					"language": "it",
					"string": "Breaking Bad ha più episodi di Game of Thrones?",
					"keywords": "Breaking Bad, eposido, più di, Game of Thrones"
				},
				{
					"language": "fr",
					"string": "A Breaking Bad plus d'épisodes que Game of Thrones?",
					"keywords": "Breaking Bad, épisodes plus que, Game of Thrones"
				},
				{
					"language": "nl",
					"string": "Heeft Breaking Bad meer afleveringen dan Game of Thrones?",
					"keywords": "Breaking Bad, afleveringen, meer dan, Game of Thrones"
				},
				{
					"language": "hi_IN",
					"string": "ब्रेकिंग बैड में गेम ऑफ़ थ्रोन्स की तुलना में अधिक एपिसोड हैं?",
					"keywords": "ब्रेकिंग बैड, गेम ऑफ़ थ्रोन्स, अधिक एपिसोड"
				},
				{
					"language": "ro",
					"string": "Are Breaking Bad mai multe episoade decât Game of Thrones?",
					"keywords": "Breaking Bad, episoade, mai multe decât, Game of Thrones"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nASK \nWHERE { \n        res:Breaking_Bad dbo:numberOfEpisodes ?x . \n        res:Game_of_Thrones dbo:numberOfEpisodes ?y . \n        FILTER (?y > ?x) \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": false
			}]
		},
		{
			"id": "86",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": false,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was called Rodzilla?",
					"keywords": "called, Rodzilla"
				},
				{
					"language": "de",
					"string": "Wer wurde Rodzilla genannt?",
					"keywords": "genannt, Rodzilla"
				},
				{
					"language": "es",
					"string": "¿Quien se llamaba Rodzilla?",
					"keywords": "llamaba, Rodzilla"
				},
				{
					"language": "it",
					"string": "Chi era chiamato Rodzilla?",
					"keywords": "chiamato, Rodzilla"
				},
				{
					"language": "fr",
					"string": "Qui était appelé Rodzilla?",
					"keywords": "appelé, Rodzilla"
				},
				{
					"language": "nl",
					"string": "Wie werd Rodzilla genoemd?",
					"keywords": "genoemd, Rodzilla"
				},
				{
					"language": "hi_IN",
					"string": "किसको रॉडज़िला कहा जाता था?",
					"keywords": "रॉडज़िला"
				},
				{
					"language": "ro",
					"string": "Cine a fost numit Rodzilla?",
					"keywords": "numit, Rodzilla"
				}
			],
			"query": {
				"sparql": "PREFIX dbp: <http://dbpedia.org/property/> \nSELECT DISTINCT ?uri \nWHERE { \n         ?uri dbp:nickname \"Rodzilla\"@en .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Rodney_Blake"
						}
					}]
				}
			}]
		},
		{
			"id": "87",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Was Natalie Portman born in the United States?",
					"keywords": "Natalie Portman, born, United States"
				},
				{
					"language": "de",
					"string": "Wurde Natalie Portman in den Vereinigten Staaten geboren?",
					"keywords": "Natalie Portman, geboren, Vereinigte Staaten"
				},
				{
					"language": "es",
					"string": "¿Nació Natalie Portman en los estados unidos de américa?",
					"keywords": "Natalie Portman"
				},
				{
					"language": "it",
					"string": "Natalie Portman, nata, Stati Uniti d'America",
					"keywords": "Natalie Portman, nata, Stati Uniti d'America"
				},
				{
					"language": "fr",
					"string": "Natalie Portman est-elle née aux Etats-Unis?",
					"keywords": "Natalie Portman, née, Etats-Unis"
				},
				{
					"language": "nl",
					"string": "Werd Natalie Portman geboren in de Verenigde Staten?",
					"keywords": "Natalie Portman, geboren, Verenigde Staten"
				},
				{
					"language": "hi_IN",
					"string": "क्या नेटली पोर्टमैन संयुक्त राज्य में पैदा हुइ थी ?",
					"keywords": "नेटली पोर्टमैन, संयुक्त राज्य, पैदा"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE { \n\tres:Natalie_Portman dbo:birthPlace ?city .\n      \t?city dbo:country res:United_States .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": false
			}]
		},
		{
			"id": "88",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me the grandchildren of Elvis Presley.",
					"keywords": "Elvis Presley, grandchildren"
				},
				{
					"language": "fa",
					"string": "نوه های الویس پرسلی را لیست کن.",
					"keywords": "نوه های، الویس پرسلی"
				},
				{
					"language": "de",
					"string": "Gib mir die Enkel von Elvis Presley.",
					"keywords": "Elvis Presley, Enkel"
				},
				{
					"language": "es",
					"string": "Dame todos los nietos de Elvis Presley.",
					"keywords": "Elvis Presley, nietos"
				},
				{
					"language": "it",
					"string": "Dammi i nipoti di Elvis Presley.",
					"keywords": "Elvis Presley, nipoti"
				},
				{
					"language": "fr",
					"string": "Donne-moi tous les petit-enfants de Elvis Presley.",
					"keywords": "petit-enfants, Elvis Presley"
				},
				{
					"language": "nl",
					"string": "Toon alle kleinkinderen van Elvis Presley.",
					"keywords": "Elvis Presley, kleinkinderen"
				},
				{
					"language": "hi_IN",
					"string": "मुझे एल्विस प्रेस्ली के पोतों के नाम दे। ",
					"keywords": "एल्विस प्रेस्ली, पोतो के नाम"
				},
				{
					"language": "ro",
					"string": "Dă-mi nepoții lui Elvis Presley.",
					"keywords": "Elvis Presley, nepoți"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Elvis_Presley> <http://dbpedia.org/ontology/child> ?child . ?child <http://dbpedia.org/ontology/child> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Riley_Keough"
						}
					}]
				}
			}]
		},
		{
			"id": "89",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which movies starring Mickey Rourke were directed by Guy Ritchie?",
					"keywords": "movies, starring, Mickey Rourke, directed, Guy Ritchie"
				},
				{
					"language": "fa",
					"string": "چه فیلم هایی با بازی میکی رورک توسط گای ریچی کارگردانی شدند؟",
					"keywords": "فیلم هایی، بازی، میکی رورک، گای ریچی، کارگردانی"
				},
				{
					"language": "de",
					"string": "Bei welchen Filmen, in denen Mickey Rourke mitspielt, hat Guy Ritchie Regie geführt?",
					"keywords": "Filme, mitspielen, Mickey Rourke, Regie führen, Guy Ritchie"
				},
				{
					"language": "es",
					"string": "¿Que peliculas protagonizadas por Mickey Rourke han sido dirigidas por Guy Ritchie?",
					"keywords": "peliculas, protagonizadas, Mickey Rourke, dirigidas, Guy Ritchie"
				},
				{
					"language": "it",
					"string": "Quali film in cui recita Mickey Rourke sono stati diretti da Guy Ritchie?",
					"keywords": "film, attore, Mickey Rourke, diretti, Guy Ritchie"
				},
				{
					"language": "fr",
					"string": "Quels films avec Mickey Rourke furent dirigés par Guy Richtie?",
					"keywords": "films, acteur, Mickey Rourke, directeur, Guy Richtie?"
				},
				{
					"language": "nl",
					"string": "Welke films met Mickey Rourke werden geregisseerd door Guy Ritchie?",
					"keywords": "films, acteur, Mickey Rourke, geregisseerd, Guy Ritchie"
				},
				{
					"language": "hi_IN",
					"string": "मिकी रोर्के अभिनीत कौन सी फिल्में गाए रिची द्वारा निर्देशित थीं?",
					"keywords": "मिकी रोर्, अभिनीत, गाए रिची, निर्देशित"
				},
				{
					"language": "ro",
					"string": "Ce filme cu Mickey Rourke ca protagonist au fost regizate de Guy Ritchie?",
					"keywords": "filme, Mickey Rourke, protagonist, regizate, Guy Ritchie"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Film> . ?uri <http://dbpedia.org/ontology/starring> <http://dbpedia.org/resource/Mickey_Rourke> . ?uri <http://dbpedia.org/ontology/director> <http://dbpedia.org/resource/Guy_Ritchie> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/The_Hire"
						}
					}]
				}
			}]
		},
		{
			"id": "90",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "When did Dracula's creator die?",
					"keywords": "Dracula, creator, die"
				},
				{
					"language": "fa",
					"string": "چه زمانی خالق دراکولا فوت کرد؟",
					"keywords": "خالق، دراکولا، فوت"
				},
				{
					"language": "de",
					"string": "Wann ist Draculas Schöpfer gestorben?",
					"keywords": "Dracula, Schöpfer, gestorben"
				},
				{
					"language": "es",
					"string": "¿Cuando murió el creador de Drácula?",
					"keywords": "muerte, creador, Drácula"
				},
				{
					"language": "it",
					"string": "Quando è morto il creatore di Dracula?",
					"keywords": "Dracula, creatore, morire"
				},
				{
					"language": "fr",
					"string": "Quand est mort le créateur de Dracula?",
					"keywords": "mort, créateur, Dracula"
				},
				{
					"language": "nl",
					"string": "Wanneer stierf de bedenker van Dracula?",
					"keywords": "stierf, bedenker, Dracula"
				},
				{
					"language": "hi_IN",
					"string": "ड्रेकुला के निर्माता का निधन कब हुआ?",
					"keywords": "ड्रेकुला, निर्माता, निधन"
				},
				{
					"language": "ro",
					"string": "Când a murit creatorul Dracula?",
					"keywords": "Dracula, creator, a muri"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?date WHERE {  <http://dbpedia.org/resource/Count_Dracula> <http://dbpedia.org/ontology/creator> ?x .  ?x <http://dbpedia.org/ontology/deathDate> ?date . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "1912-04-20"
						}
					}]
				}
			}]
		},
		{
			"id": "91",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which country does the creator of Miffy come from?",
					"keywords": "Miffy, creator, country"
				},
				{
					"language": "de",
					"string": "Aus welchem Land kommt der Erfinder von Nijntje?",
					"keywords": "Nijntje, Erfinder, Land"
				},
				{
					"language": "es",
					"string": "¿De qué país viene el creador de Nijntje?",
					"keywords": "Njintje, creados, país"
				},
				{
					"language": "it",
					"string": "Da quale stato proviene il creatore di Miffy?",
					"keywords": "Miffy, creatore, nazione"
				},
				{
					"language": "fr",
					"string": "De quel pays vient le créateur de Miffy?",
					"keywords": "pays, créateur, Miffy"
				},
				{
					"language": "nl",
					"string": "Uit welk land komt de bedenker van Nijntje?",
					"keywords": "Nijntje, bedenker, nationaliteit"
				},
				{
					"language": "hi_IN",
					"string": "मिफ्फी के निर्माता किस देश से आते है?",
					"keywords": "मिफ्फ, निर्माता, देश"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n\tres:Miffy dbo:creator ?x .\n\t?x dbo:nationality ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Netherlands"
						}
					}]
				}
			}]
		},
		{
			"id": "92",
			"answertype": "string",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is Batman's real name?",
					"keywords": "real name, Batman"
				},
				{
					"language": "fa",
					"string": "نام واقعی بتمن چیست؟",
					"keywords": "نام واقعی، بتمن"
				},
				{
					"language": "de",
					"string": "Was ist Batmans richtiger Name?",
					"keywords": "Batman, richtiger Name"
				},
				{
					"language": "es",
					"string": "¿Cuál es el verdadero nombre de Batman?",
					"keywords": "verdadero nombre Batman"
				},
				{
					"language": "it",
					"string": "Qual è il vero nome di Batman?",
					"keywords": "Batman, vero nome"
				},
				{
					"language": "fr",
					"string": "Quel est le vrai nom de Batman?",
					"keywords": "vrai nom, Batman"
				},
				{
					"language": "nl",
					"string": "Wat is de echte naam van Batman?",
					"keywords": "Batman, echte naam"
				},
				{
					"language": "hi_IN",
					"string": "बैटमैन का असली नाम क्या है?",
					"keywords": "बैटमैन, असली नाम"
				},
				{
					"language": "ro",
					"string": "Care este numele real al lui Batman?",
					"keywords": "nume real, Batman"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?s WHERE { <http://dbpedia.org/resource/Batman> <http://dbpedia.org/property/alterEgo> ?s . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"string"
					]
				},
				"results": {
					"bindings": [{
						"string": {
							"type": "literal",
							"value": "Bruce Wayne"
						}
					}]
				}
			}]
		},
		{
			"id": "93",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What form of government does Russia have?",
					"keywords": "form of government, Russia"
				},
				{
					"language": "fa",
					"string": "روسیه چه نوع حکومتی دارد؟",
					"keywords": "روسیه، نوع حکومت"
				},
				{
					"language": "de",
					"string": "Welche Regierungsform hat Russland?",
					"keywords": "Russland, Regierungsform"
				},
				{
					"language": "es",
					"string": "¿Qué forma de gobierno tiene Rusia?",
					"keywords": "forma de gobierno, Rusia"
				},
				{
					"language": "it",
					"string": "Quale forma di governo ha la Russia?",
					"keywords": "forma di governo, Russia"
				},
				{
					"language": "fr",
					"string": "Quelle est la forme de gouvernement de la Russie?",
					"keywords": "forme de gouvernement, Russie?"
				},
				{
					"language": "nl",
					"string": "Welke regeringsvorm heeft Rusland?",
					"keywords": "regeringsvorm, Rusland"
				},
				{
					"language": "hi_IN",
					"string": "रूस की सरकार किस प्रकार की है?",
					"keywords": "रूस, सरकार, प्रकार"
				},
				{
					"language": "ro",
					"string": "Ce formă de guvern are Rusia?",
					"keywords": "formă de guvern, Rusia"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Russia> <http://dbpedia.org/ontology/governmentType> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Federalism"
						}
					}]
				}
			}]
		},
		{
			"id": "94",
			"answertype": "number",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many companies were founded by the founder of Facebook?",
					"keywords": "companies, founded by, founder, Facebook"
				},
				{
					"language": "fa",
					"string": "چه تعداد شرکت توسط مؤسس فیسبوک تأسیس شدند؟",
					"keywords": "شرکت، مؤسس، فیسبوک، تأسیس"
				},
				{
					"language": "de",
					"string": "Wieviele Firmen hat der Gründer von Facebook gegründet?",
					"keywords": "Firmen, gegründet, Gründer, Facebook"
				},
				{
					"language": "es",
					"string": "¿Cuantas compañías han sido fundadas por el fundador de Facebook?",
					"keywords": "compañías, fundadas, fundador Facebook"
				},
				{
					"language": "it",
					"string": "Quante società sono state fondate dal fondatore di Facebook?",
					"keywords": "società, fondate, fondatore, Facebook"
				},
				{
					"language": "fr",
					"string": "Combien de companies ont été fondées par le fondateur de Facebook?",
					"keywords": "nombre, companies, fondées, fondateur, Facebook"
				},
				{
					"language": "nl",
					"string": "Hoeveel bedrijven werden opgericht door de oprichter van Facebook?",
					"keywords": "bedrijven, opgericht, oprichter, Facebook"
				},
				{
					"language": "hi_IN",
					"string": "फेसबुक के संस्थापक द्वारा कितनी कंपनियों की स्थापना की गई थी?",
					"keywords": "फेसबुक, संस्थापक, कंपनियों की स्थापना"
				},
				{
					"language": "ro",
					"string": "Câte companii au fost înființate de fondatorul Facebook?",
					"keywords": "companii, înființate, fondator, Facebook"
				}
			],
			"query": {
				"sparql": "SELECT (COUNT(DISTINCT ?uri) as ?c) WHERE {  <http://dbpedia.org/resource/Facebook> <http://dbpedia.org/ontology/foundedBy> ?uri .  ?uri <http://dbpedia.org/ontology/foundedBy> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "0"
						}
					}]
				}
			}]
		},
		{
			"id": "95",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all Canadian Grunge record labels.",
					"keywords": "record label, Canadian, Grunge"
				},
				{
					"language": "de",
					"string": "Gib mir alle kanadischen Grunge-Plattenfirmen.",
					"keywords": "kanadisch, Plattenfirma, Grunge"
				},
				{
					"language": "es",
					"string": "Dame todos las empresas canadienses productoras de música Grunge.",
					"keywords": "empresa productora de música, canadiense, Grunge"
				},
				{
					"language": "it",
					"string": "Dammi tutti i produttori canadesi di musica Grunge.",
					"keywords": "produttore di musica, canadese, Grunge"
				},
				{
					"language": "fr",
					"string": "Donnes-moi tous les labels discographiques canadiens de grunge.",
					"keywords": "labels discographiques, canadiens, grunge"
				},
				{
					"language": "nl",
					"string": "Noem alle Canadese grunge-platenlabels.",
					"keywords": "Canadees, platenlabel, Grunge"
				},
				{
					"language": "hi_IN",
					"string": "मुझे सभी कैनेडियन ग्रांज रिकॉर्ड लेबल की सूचि दें।",
					"keywords": "कैनेडियन, ग्रांज, रिकॉर्ड लेबल"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri \nWHERE {\n\t?uri rdf:type dbo:RecordLabel .\n        ?uri dbo:genre res:Grunge .\n        ?uri dbo:country res:Canada .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Murderecords"
						}
					}]
				}
			}]
		},
		{
			"id": "96",
			"answertype": "number",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many children did Benjamin Franklin have?",
					"keywords": "Benjamin Franklin, child"
				},
				{
					"language": "fa",
					"string": "بنجامین فرانکلین چند فرزند دارد؟",
					"keywords": "بنجامین فرانکلین، فرزند"
				},
				{
					"language": "de",
					"string": "Wieviele Kinder hatte Benjamin Franklin?",
					"keywords": "Benjamin Franklin, Kind"
				},
				{
					"language": "es",
					"string": "¿Cuántos hijos tuvo Benjamin Franklin?",
					"keywords": "Benjamin Franklin, hijos"
				},
				{
					"language": "it",
					"string": "Quanti figli ebbe Benjamin Franklin?",
					"keywords": "Benjamin Franklin, figlio"
				},
				{
					"language": "fr",
					"string": "Combien d'enfants Benjamin Franklin avait-il?",
					"keywords": "nombre d'enfants, Benjamin Franklin"
				},
				{
					"language": "nl",
					"string": "Hoeveel kinderen had Benjamin Franklin?",
					"keywords": "Benjamin Franklin, kinderen, hoeveel"
				},
				{
					"language": "hi_IN",
					"string": "बेंजामिन फ्रैंकलिन के कितने बच्चे हैं?",
					"keywords": "बेंजामिन फ्रैंकलिन, बच्चे"
				},
				{
					"language": "ro",
					"string": "Câți copii a avut Benjamin Franklin?",
					"keywords": "Benjamin Franklin, copil"
				}
			],
			"query": {
				"sparql": "SELECT (COUNT(DISTINCT ?uri) as ?c) WHERE {  <http://dbpedia.org/resource/Benjamin_Franklin> <http://dbpedia.org/ontology/child> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "3"
						}
					}]
				}
			}]
		},
		{
			"id": "97",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "List the children of Margaret Thatcher.",
					"keywords": "Margaret Thatcher, child"
				},
				{
					"language": "de",
					"string": "Liste die Kinder von Margaret Thatcher auf.",
					"keywords": "Margaret Thatcher, Kind"
				},
				{
					"language": "es",
					"string": "Dame una lista de los hijos de Margaret Thatcher.",
					"keywords": "Margaret Thatcher, hijos"
				},
				{
					"language": "it",
					"string": "Elenca i figli di Margaret Thatcher.",
					"keywords": "Margaret Thatcher, figlio"
				},
				{
					"language": "fr",
					"string": "Donnes-moi tous les enfants de Margaret Thatcher.",
					"keywords": "enfants, Margaret Thatcher"
				},
				{
					"language": "nl",
					"string": "Noem alle kinderen van Margaret Thatcher.",
					"keywords": "kinderen, Margaret Thatcher"
				},
				{
					"language": "hi_IN",
					"string": "मार्गरेट थैचर के बच्चों की सूची बनाएं।",
					"keywords": "मार्गरेट थैचर, बच्चों"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/>\nSELECT DISTINCT ?uri \nWHERE {\n\tres:Margaret_Thatcher dbo:child ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Carol_Thatcher"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Mark_Thatcher"
							}
						}
					]
				}
			}]
		},
		{
			"id": "98",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "From which region is the Melon de Bourgogne?",
					"keywords": "region, Melon de Bourgogne"
				},
				{
					"language": "de",
					"string": "Aus welcher Region ist der Melon de Bourgogne?",
					"keywords": "Region, Melon de Bourgogne"
				},
				{
					"language": "es",
					"string": "¿De que región es el vino Melon de Bourgogne?",
					"keywords": "región, Melon de Bourgogne"
				},
				{
					"language": "it",
					"string": "Da quale regione proviene il Melon de Bourgogne?",
					"keywords": "regione, Melon de Bourgogne"
				},
				{
					"language": "fr",
					"string": "De quelle région vient le Melon de Bourgogne?",
					"keywords": "région, Melon de Bourgogne"
				},
				{
					"language": "nl",
					"string": "Vanuit welke regio is de Melon de Bourgogne?",
					"keywords": "regio, Melon de Bourgogne"
				},
				{
					"language": "hi_IN",
					"string": "मेलन डी बर्गोगोन किस क्षेत्र से है?",
					"keywords": "मेलन डी बर्गोगोन, क्षेत्र"
				},
				{
					"language": "ro",
					"string": "Din ce regiune provine Melon-ul de Bourgogne?",
					"keywords": "regiune, Melon de Bourgogne"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/> \nSELECT DISTINCT ?uri\nWHERE {\n        res:Melon_de_Bourgogne dbo:wineRegion ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Southern_Ontario"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Loire_Valley_(wine)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Oregon"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Washington_(state)"
							}
						}
					]
				}
			}]
		},
		{
			"id": "99",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the oldest child of Meryl Streep?",
					"keywords": "oldest child, Meryl Streep"
				},
				{
					"language": "de",
					"string": "Wer ist das älteste Kind von Meryl Streep?",
					"keywords": "ältestes Kind, Meryl Streep"
				},
				{
					"language": "es",
					"string": "¿Cuál es el hijo mas mayor de Meryl Streep?",
					"keywords": "hijo mas mayor, Meryl Streep"
				},
				{
					"language": "it",
					"string": "Chi è il figlio maggiore di Meryl Streep?",
					"keywords": "figlio maggiore, Meryl Streep"
				},
				{
					"language": "fr",
					"string": "Qui est l'enfant le plus agé de Merly Streep?",
					"keywords": "enfant le plus agé, Meryl Streep"
				},
				{
					"language": "nl",
					"string": "Wie is het oudste kind van Meryl Streep?",
					"keywords": "oudste kind, Meryl Streep"
				},
				{
					"language": "hi_IN",
					"string": "मेरिल स्ट्रीप का सबसे पहला बच्चा कौन है?",
					"keywords": "मेरिल स्ट्रीप, सबसे पहला बच्चा"
				},
				{
					"language": "ro",
					"string": "Cine este copilul cel mai mare al lui Meryl Streep?",
					"keywords": "copilul cel mai mare, Meryl Streep"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE { \n        res:Meryl_Streep dbo:child ?uri . \n        ?uri dbo:birthDate ?d .\n}\nORDER BY ASC(?d)\nOFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Henry_Wolfe_Gummer"
						}
					}]
				}
			}]
		},
		{
			"id": "100",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Are tree frogs a type of amphibian?",
					"keywords": "tree frog, amphibian"
				},
				{
					"language": "de",
					"string": "Sind Laubfrösche Amphibien?",
					"keywords": "Laubfrosch, Amphibie"
				},
				{
					"language": "es",
					"string": "¿Son las ranas verdes un tipo de anfibio?",
					"keywords": "rana verde, anfibio"
				},
				{
					"language": "it",
					"string": "Le rane verdi sono un tipo di anfibio?",
					"keywords": "rana verde, anfibio"
				},
				{
					"language": "fr",
					"string": "Sont les grenouilles arboricoles un type d'amphibiens?",
					"keywords": "grenouilles arboricoles, amphibien"
				},
				{
					"language": "nl",
					"string": "Zijn boomkikkers een soort amfibie?",
					"keywords": "boomkikker, amfibie"
				},
				{
					"language": "hi_IN",
					"string": "क्या वृक्ष के मेंढक एक प्रकार की उभयचर हैं?",
					"keywords": "वृक्ष के मेंढक, प्रकार, उभयचर"
				},
				{
					"language": "ro",
					"string": "Sunt broaștele de copac un tip de amfibieni?",
					"keywords": "broască de copac, amfibian"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nASK \nWHERE { \n        res:Hylidae dbo:class res:Amphibian . \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "101",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is Christian Bale starring in Velvet Goldmine?",
					"keywords": "Christian Bale, starring, Velvet Goldmine"
				},
				{
					"language": "de",
					"string": "Spielt Christian Bale in Velvet Goldmine mit?",
					"keywords": "Christian Bale, mitspielen, Velvet Goldmine"
				},
				{
					"language": "es",
					"string": "¿Actúa Christian Bale en Velvet Goldmine?",
					"keywords": "Christian Bale, actúa, Velvet Goldmine"
				},
				{
					"language": "it",
					"string": "Christian Bale ha recitato in Velvet Goldmine?",
					"keywords": "Christian Bale, recitare, Velvet Goldmine"
				},
				{
					"language": "fr",
					"string": "Christian Bale joue-t-il dans Velvet Goldmine?",
					"keywords": "Christian Bale, joue, Velvet Goldmine"
				},
				{
					"language": "nl",
					"string": "Speelt Christian Bale in Velvet Goldmine?",
					"keywords": "Christian Bale, speelt in, Velvet Goldmine"
				},
				{
					"language": "hi_IN",
					"string": "क्या वेलवेट गोल्डमाइन में अभिनीता क्रिस्चियन बेल है?",
					"keywords": "वेलवेट गोल्डमाइन, अभिनीता, क्रिस्चियन बेल"
				},
				{
					"language": "ro",
					"string": "Joacă Christian Bale un rol principal în Velvet Goldmine?",
					"keywords": "Christian Bale, rol principal, Velevet Goldmine"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK\nWHERE {\n        res:Velvet_Goldmine dbo:starring res:Christian_Bale .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "102",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "List all games by GMT.",
					"keywords": "game, GMT"
				},
				{
					"language": "de",
					"string": "Liste alle Spiele von GMT auf.",
					"keywords": "Spiel, GMT"
				},
				{
					"language": "es",
					"string": "Dame todos los juegos de GMT.",
					"keywords": "juegos, GMT"
				},
				{
					"language": "it",
					"string": "Elenca tutti i giochi di GMT.",
					"keywords": "gioco, GMT"
				},
				{
					"language": "fr",
					"string": "Donne-moi tous les jeux de GMT.",
					"keywords": "jeux, GMT"
				},
				{
					"language": "nl",
					"string": "Noem alle spelen van GMT.",
					"keywords": "spel, GMT"
				},
				{
					"language": "hi_IN",
					"string": "जीएमटी द्वारा सभी खेलों की सूची बनाएं।",
					"keywords": "जीएमटी, खेल"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\t\n        ?uri dbo:publisher res:GMT_Games .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Washington's_War"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Fields_of_Fire_(game)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Commands_&_Colors:_Ancients"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Twilight_Struggle"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Sword_of_Rome"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Paths_of_Glory_(board_game)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Chandragupta_(board_game)"
							}
						}
					]
				}
			}]
		},
		{
			"id": "103",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Does the Isar flow into a lake?",
					"keywords": "Isar, flow, lake"
				},
				{
					"language": "de",
					"string": "Fließt die Isar in einen See?",
					"keywords": "Isar, fließt, See"
				},
				{
					"language": "es",
					"string": "¿Desemboca el Isar en un lago?",
					"keywords": "Isar, desemboca, lago"
				},
				{
					"language": "it",
					"string": "L'Isar sfocia in un lago?",
					"keywords": "Isar, sfociare, lago"
				},
				{
					"language": "fr",
					"string": "L'Isar se déverse-t-il dans un lac?",
					"keywords": "Isar, deverse, lac"
				},
				{
					"language": "nl",
					"string": "Mondt de Isar uit in een meer?",
					"keywords": "Isar, uitmonden, meer"
				},
				{
					"language": "hi_IN",
					"string": "क्या ईसार एक झील में प्रवाहित होती है?",
					"keywords": "ईसार, झील, प्रवाहित"
				},
				{
					"language": "ro",
					"string": "Isarul se varsă într-un lac?",
					"keywords": "Isar, varsă, lac"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nASK\nWHERE {\n        ?x dbo:inflow res:Isar .\n        ?x rdf:type dbo:Lake . \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "104",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which airports does Yeti Airlines serve?",
					"keywords": "airports, Yeti Airlines"
				},
				{
					"language": "fa",
					"string": "یتی ایرلاینرز در چه فرودگاه هایی فعالیت می کند؟",
					"keywords": "یتی ایرلاینرز، فرودگاه هایی"
				},
				{
					"language": "de",
					"string": "Welche Flughäfen fliegt Yeti Airlines an?",
					"keywords": "Flughäfen, anfliegen, Yeti Airlines"
				},
				{
					"language": "es",
					"string": "¿Qué aeropuertos sirve Yeti Airlines?",
					"keywords": "aeropuertos, Yeti Airlines"
				},
				{
					"language": "it",
					"string": "Quali aeroporti sono serviti da Yeti Airlines?",
					"keywords": "aeroporti, Yeti Airlines"
				},
				{
					"language": "fr",
					"string": "Quels sont les aéroports servis par Yeti Airlines?",
					"keywords": "Yeti Airlines, aéroports"
				},
				{
					"language": "nl",
					"string": "Naar welke luchthavens vliegt Yeti Airlines?",
					"keywords": "luchthavens, Yeti Airlines"
				},
				{
					"language": "hi_IN",
					"string": "यति एयरलाइंस किस हवाई अड्डे की सेवा करती है?",
					"keywords": "यति एयरलाइंस, हवाई अड्ड, सेवा"
				},
				{
					"language": "ro",
					"string": "Ce aeroporturi deservește Yeti Airlines?",
					"keywords": "aeroporturi, Yeti Airlines"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/Yeti_Airlines> <http://dbpedia.org/ontology/targetAirport> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Pokhara"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Siddharthanagar"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Biratnagar"
							}
						}
					]
				}
			}]
		},
		{
			"id": "105",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which Indian company has the most employees?",
					"keywords": "Indian company, the most employees"
				},
				{
					"language": "fa",
					"string": "کدام شرکت هندی بیشترین تعداد کارمند را دارد؟",
					"keywords": "شرکت هندی، بیشترین تعداد کارمند"
				},
				{
					"language": "de",
					"string": "Welches indische Unternehmen hat die meisten Angestellten?",
					"keywords": "Unternehmen, Indien, die meisten Angestellten"
				},
				{
					"language": "es",
					"string": "¿Qué empresa de la India tiene el mayor número de empleados?",
					"keywords": "empresa India, mayor número empleados"
				},
				{
					"language": "it",
					"string": "Quale società indiana ha il maggior numero di dipendenti?",
					"keywords": "società indiana, maggior numero di dipendenti"
				},
				{
					"language": "fr",
					"string": "Quelle companie indienne a le plus d'employés?",
					"keywords": "companie indienne, maximum d'employés"
				},
				{
					"language": "nl",
					"string": "Welke Indiase bedrijf heeft de meeste werknemers?",
					"keywords": "Indiase bedrijf, de meeste werknemers"
				},
				{
					"language": "hi_IN",
					"string": "किस भारतीय कंपनी में सबसे अधिक कर्मचारी हैं?",
					"keywords": "भारतीय, कंपनी, सबसे अधिक कर्मचारी"
				},
				{
					"language": "ro",
					"string": "Ce companie indiană are cei mai mulți angajați?",
					"keywords": "companie indiană, cei mai mulți angajați"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri a <http://dbpedia.org/ontology/Company> . ?uri <http://dbpedia.org/ontology/location> <http://dbpedia.org/resource/India> . ?uri <http://dbpedia.org/ontology/numberOfEmployees> ?n . } ORDER BY DESC(?n) OFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Indian_Railways"
						}
					}]
				}
			}]
		},
		{
			"id": "106",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What color expresses loyalty?",
					"keywords": "color, express, loyalty"
				},
				{
					"language": "fa",
					"string": "چه رنگی وفاداری را بیان می کند؟",
					"keywords": "رنگی، وفاداری، بیان"
				},
				{
					"language": "de",
					"string": "Welche Farbe steht für Loyalität?",
					"keywords": "Farbe, stehen für, Loyalität"
				},
				{
					"language": "es",
					"string": "¿Qué color expresa lealtad?",
					"keywords": "color, expresa, lealtad"
				},
				{
					"language": "it",
					"string": "Quale colore esprime lealtà?",
					"keywords": "colore, esprimere, lealtà"
				},
				{
					"language": "fr",
					"string": "Quelle couleur exprime la loyalité?",
					"keywords": "couleur, loyalité"
				},
				{
					"language": "nl",
					"string": "Welke kleur staat voor loyaliteit?",
					"keywords": "kleur, loyaliteit"
				},
				{
					"language": "hi_IN",
					"string": "कोनसा रंग वफादारी व्यक्त करता है?",
					"keywords": "रंग, वफादारी"
				},
				{
					"language": "ro",
					"string": "Ce culoare exprimă loialitate?",
					"keywords": "culoare, exprimă, loialitate"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/connotation> <http://dbpedia.org/resource/Loyalty> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Indigo"
						}
					}]
				}
			}]
		},
		{
			"id": "107",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which city has the most inhabitants?",
					"keywords": "city, the most inhabitants"
				},
				{
					"language": "de",
					"string": "Welche Stadt hat die meisten Einwohner?",
					"keywords": "Stadt, meisten Einwohner"
				},
				{
					"language": "es",
					"string": "¿Que ciudad tiene la mayor población?",
					"keywords": "ciudad, mayor población"
				},
				{
					"language": "it",
					"string": "Quale città ha il maggior numero di abitanti?",
					"keywords": "città, maggior numero di abitanti"
				},
				{
					"language": "fr",
					"string": "Quel ville a le plus grand nombre d'habitants?",
					"keywords": "ville, plus grand nombre d'habitants"
				},
				{
					"language": "nl",
					"string": "Welke stad heeft de meeste inwoners?",
					"keywords": "stad, meeste inwoners"
				},
				{
					"language": "hi_IN",
					"string": "कौन से शहर में सबसे अधिक निवासी है?",
					"keywords": "शहर, सबसे अधिक निवासी"
				},
				{
					"language": "ro",
					"string": "Care oraș are cei mai mulți locuitori?",
					"keywords": "oraș, cei mai mulți locuitori"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \nSELECT DISTINCT ?uri\nWHERE { \n         ?uri rdf:type dbo:City . \n         ?uri dbo:populationTotal ?pop . \n}\nORDER BY DESC(?pop)\nOFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Karachi"
						}
					}]
				}
			}]
		},
		{
			"id": "108",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who created Wikipedia?",
					"keywords": "Wikipedia, created"
				},
				{
					"language": "de",
					"string": "Wer hat Wikipedia gegründet?",
					"keywords": "Wikipedia, gründen"
				},
				{
					"language": "es",
					"string": "¿Quién creó Wikipedia?",
					"keywords": "Wikipedia, creador"
				},
				{
					"language": "it",
					"string": "Chi ha creato Wikipedia?",
					"keywords": "Wikipedia, creatore"
				},
				{
					"language": "fr",
					"string": "Qui est le créateur de Wikipedia?",
					"keywords": "créateur, Wikipedia"
				},
				{
					"language": "nl",
					"string": "Wie heeft Wikipedia opgericht?",
					"keywords": "Wikipedia, oprichter"
				},
				{
					"language": "hi_IN",
					"string": "विकिपीडिया किसने बनाया?",
					"keywords": "विकिपीडिया, निर्माता"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {\n\tres:Wikipedia dbo:author ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Jimmy_Wales"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Larry_Sanger"
							}
						}
					]
				}
			}]
		},
		{
			"id": "109",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is Rita Wilson the wife of Tom Hanks?",
					"keywords": "Rita Wilson, wife, Tom Hanks"
				},
				{
					"language": "de",
					"string": "Ist Rita Wilson die Frau von Tom Hanks?",
					"keywords": "Rita Wilson, Frau, Tom Hanks"
				},
				{
					"language": "es",
					"string": "¿Es Rita Wilson la esposa de Tom Hanks?",
					"keywords": "Rita Wilson, esposa, Tom Hanks"
				},
				{
					"language": "it",
					"string": "Rita Wilson è la moglie di Tom Hanks?",
					"keywords": "Rita Wilson, moglie, Tom Hanks"
				},
				{
					"language": "fr",
					"string": "Rita Wilson est-elle l'épouse de Tom Hanks?",
					"keywords": "Rita Wilson, épouse, Tom Hanks"
				},
				{
					"language": "nl",
					"string": "Is Rita Wilson de vrouw van Tom Hanks?",
					"keywords": "Rita Wilson, vrouw, Tom Hanks"
				},
				{
					"language": "hi_IN",
					"string": "क्या रीटा विल्सन टॉम हैंक्स की पत्नी है?",
					"keywords": "रीटा विल्सन, टॉम हैंक्स, पत्नी"
				},
				{
					"language": "ro",
					"string": "Este Rita Wilson soția lui Tom Hanks?",
					"keywords": "Rita Wilson, soție, Tom Hanks"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nASK \nWHERE { \n        res:Tom_Hanks dbo:spouse res:Rita_Wilson . \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "110",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is the wife of president Obama called Michelle?",
					"keywords": "Obama, president, wife, called, Michelle"
				},
				{
					"language": "de",
					"string": "Heißt die Frau von Präsident Obama Michelle?",
					"keywords": "Obama, Präsident, Frau, heißen, Michelle"
				},
				{
					"language": "es",
					"string": "¿La mujer del presidente Obama se llama Michelle?",
					"keywords": "mujer, presidente, Obama, se lamma, Michelle"
				},
				{
					"language": "it",
					"string": "La moglie del presidente Obama si chiama Michelle?",
					"keywords": "moglie, presidente, Obama, si chiama, Michelle"
				},
				{
					"language": "fr",
					"string": "L'épouse du président Obama s'appelle-t-elle Michelle?",
					"keywords": "épouse, Obama, Michelle, appelle"
				},
				{
					"language": "nl",
					"string": "Heet de echtgenote van president Barack Obama Michelle?",
					"keywords": "echtgenote, Barack Obama, Michelle"
				},
				{
					"language": "hi_IN",
					"string": "क्या राष्ट्रपति ओबामा की पत्नी का नाम मिशेल है?",
					"keywords": "राष्ट्रपति ओबामा, पत्नी, मिशेल"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nASK \nWHERE {\n        res:Barack_Obama dbo:spouse ?spouse .\n        ?spouse rdfs:label ?name .\n        FILTER(regex(?name,'Michelle')) \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "111",
			"answertype": "number",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many ethnic groups live in Slovenia?",
					"keywords": "how many, ethnic groups, Slovenia"
				},
				{
					"language": "fa",
					"string": "چند گروه نژادی در اسلوونی زندگی می کنند؟",
					"keywords": "گروه نژادی، اسلوونی"
				},
				{
					"language": "de",
					"string": "Wieviele ethnische Gruppen leben in Slovenien?",
					"keywords": "Anzahl, ethnische Gruppen, Slovenien"
				},
				{
					"language": "es",
					"string": "¿Cuántos grupos étnicos viven en Eslovenia?",
					"keywords": "grupos étnicos Eslovenia"
				},
				{
					"language": "it",
					"string": "Quanti gruppi etnici vivono in Slovenia?",
					"keywords": "numero, gruppi etnici, Slovenia"
				},
				{
					"language": "fr",
					"string": "Combien de groupes ethniques vivent en Slovénie?",
					"keywords": "nombre, groupes ethniques, Slovénie"
				},
				{
					"language": "nl",
					"string": "Hoeveel etnische groepen leven in Slovenië?",
					"keywords": "hoeveel, etnische groepen, Slovenië"
				},
				{
					"language": "hi_IN",
					"string": "कितने जातीय समूह स्लोवेनिया में रहते हैं?",
					"keywords": "जातीय समूह, स्लोवेनिया"
				},
				{
					"language": "ro",
					"string": "Câte grupuri etnice trăiesc în Slovenia?",
					"keywords": "câte, grupuri etnice, Slovenia"
				}
			],
			"query": {
				"sparql": "SELECT (COUNT(DISTINCT ?uri) as ?c) WHERE {  <http://dbpedia.org/resource/Slovenia> <http://dbpedia.org/ontology/ethnicGroup> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "4"
						}
					}]
				}
			}]
		},
		{
			"id": "112",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the president of Eritrea?",
					"keywords": "president, Eritrea"
				},
				{
					"language": "fa",
					"string": "رئیس جمهور اریتره کیست؟",
					"keywords": "رئیس جمهور، اریتره"
				},
				{
					"language": "de",
					"string": "Wer ist der Präsident von Eritrea?",
					"keywords": "Präsident, Eritrea"
				},
				{
					"language": "es",
					"string": "¿Quién es el presidente de Eritrea?",
					"keywords": "presidente Eritrea"
				},
				{
					"language": "it",
					"string": "Chi è il presidente dell'Eritrea?",
					"keywords": "presidente, Eritrea"
				},
				{
					"language": "fr",
					"string": "Qui est le président de l'Érytrée?",
					"keywords": "président, Erythrée"
				},
				{
					"language": "nl",
					"string": "Wie is de president van Eritrea?",
					"keywords": "president, Eritrea"
				},
				{
					"language": "hi_IN",
					"string": "इरीट्रिया के राष्ट्रपति कौन है?",
					"keywords": "इरीट्रिया, राष्ट्रपति"
				},
				{
					"language": "ro",
					"string": "Cine este președintele Eritreei?",
					"keywords": "președinte, Eritreea"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Eritrea> <http://dbpedia.org/ontology/leader> ?uri . <http://dbpedia.org/resource/Eritrea> <http://dbpedia.org/ontology/leaderTitle> 'President'@en . }  "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Isaias_Afwerki"
						}
					}]
				}
			}]
		},
		{
			"id": "113",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which films did Stanley Kubrick direct?",
					"keywords": "film, Stanley Kubrick, direct"
				},
				{
					"language": "fa",
					"string": "چه فیلم هایی را استنلی کوبریک کارگردانی کرده است؟",
					"keywords": "فیلم هایی، استنلی کوبریک، کارگردانی"
				},
				{
					"language": "de",
					"string": "Bei wievielen Filmen hat Stanley Kubrick Regie geführt?",
					"keywords": "wieviele, Filme, Stanley Kubrick, Regie"
				},
				{
					"language": "es",
					"string": "¿Qué películas dirigio Stanley Kubrick?",
					"keywords": "películas, director, Stanley Kubrick"
				},
				{
					"language": "it",
					"string": "Quanti film ha diretto Stanley Kubrick?",
					"keywords": "film, Stanley Kubrick, dirigere"
				},
				{
					"language": "fr",
					"string": "Quels films ont été dirigés par Stanley Kubrick?",
					"keywords": "films, directeur, Stanley Kubrick"
				},
				{
					"language": "nl",
					"string": "Hoveel films heeft Stanley Kubrick geregisseerd?",
					"keywords": "films, Stanley Kubrick, regisseur"
				},
				{
					"language": "hi_IN",
					"string": "स्टैनले कुब्री ने कौन सी फिल्मे निर्देशित की हैं ?",
					"keywords": "स्टैनले कुब्री, फिल्म, निर्देशित"
				},
				{
					"language": "ro",
					"string": "Ce filme a regizat Stanley Kubrick?",
					"keywords": "film, Stanley Kubrick, regiza"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/director> <http://dbpedia.org/resource/Stanley_Kubrick> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Day_of_the_Fight"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Barry_Lyndon"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/A_Clockwork_Orange_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/2001:_A_Space_Odyssey_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Shining_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Fear_and_Desire"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Killing_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Paths_of_Glory"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Flying_Padre"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Eyes_Wide_Shut"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Full_Metal_Jacket"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Killer's_Kiss"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Seafarers"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Dr._Strangelove"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Spartacus_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Lolita_(1962_film)"
							}
						}
					]
				}
			}]
		},
		{
			"id": "114",
			"answertype": "date",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "When was the Titanic completed?",
					"keywords": "Titanic, completion date"
				},
				{
					"language": "de",
					"string": "Wann wurde die Titanic fertiggestellt?",
					"keywords": "Titanic, fertiggestellt, Datum"
				},
				{
					"language": "es",
					"string": "¿Cuando se completo el Titanic?",
					"keywords": "fecha de acabado, Titanic"
				},
				{
					"language": "it",
					"string": "Quando è stato completato il Titanic?",
					"keywords": "Titanic, data, completamento"
				},
				{
					"language": "fr",
					"string": "Quand a été terminé le Titanic?",
					"keywords": "data de terminaison, Titanic"
				},
				{
					"language": "nl",
					"string": "Wanneer was de Titanic afgewerkt?",
					"keywords": "Titanic, wanneer, afgewerkt"
				},
				{
					"language": "hi_IN",
					"string": "टाइटैनिक कब पूरा हुआ?",
					"keywords": "टाइटैनिक, पूरा"
				},
				{
					"language": "ro",
					"string": "Când a fost terminat Titanicul?",
					"keywords": "Titanic, data terminării"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?date\nWHERE { \n        res:RMS_Titanic dbo:completionDate ?date . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"date"
					]
				},
				"results": {
					"bindings": [{
						"date": {
							"type": "literal",
							"value": "1912-04-02"
						}
					}]
				}
			}]
		},
		{
			"id": "115",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many pages does War and Peace have?",
					"keywords": "how many, pages, War and Peace"
				},
				{
					"language": "de",
					"string": "Wieviele Seiten hat Krieg und Frieden?",
					"keywords": "wieviele, Seiten, Krieg und Frieden"
				},
				{
					"language": "es",
					"string": "¿Cuántas páginas tiene Guerra y Paz?",
					"keywords": "número paginas, Guerra y Paz"
				},
				{
					"language": "it",
					"string": "Quante pagine ha Guerra e Pace?",
					"keywords": "pagine, Guerra e Pace"
				},
				{
					"language": "fr",
					"string": "Combien de pages a Guerre et Paix?",
					"keywords": "nomber de pages, Guerre et Paix"
				},
				{
					"language": "nl",
					"string": "Hoeveel pagina's heeft Oorlog en vrede?",
					"keywords": "hoeveel pagina's, Oorlog en vrede"
				},
				{
					"language": "hi_IN",
					"string": "वॉर एंड पीस में कितने पृष्ठ हैं?",
					"keywords": "वॉर एंड पीस, कितने पृष्ठ"
				},
				{
					"language": "ro",
					"string": "Câte pagini are Război și Pace?",
					"keywords": "câte pagini, Război și Pace"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?n\nWHERE {\n        res:War_and_Peace dbo:numberOfPages ?n .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "1225"
						}
					}]
				}
			}]
		},
		{
			"id": "116",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the youngest player in the Premier League?",
					"keywords": "player, Premier League, youngest"
				},
				{
					"language": "de",
					"string": "Wer ist der jüngste Spieler in der Premier League?",
					"keywords": "Spieler, Premier League, jüngste"
				},
				{
					"language": "es",
					"string": "¿Quién es el jugador más jóven de la Premier League?",
					"keywords": "jugador, más jóven, Premier League"
				},
				{
					"language": "it",
					"string": "Chi è il giocatore più giovane della Premier League?",
					"keywords": "giocatore, Premier League, più giovane"
				},
				{
					"language": "fr",
					"string": "Quel est le joueur le plus jeune de la Premier League?",
					"keywords": "joueur, Premier League, plus jeune"
				},
				{
					"language": "nl",
					"string": "Wie is de jongste speler in de Premier League?",
					"keywords": "speler, jongste, Premier League"
				},
				{
					"language": "hi_IN",
					"string": "प्रीमियर लीग में सबसे कम उम्र के खिलाड़ी कौन हैं?",
					"keywords": "प्रीमियर लीग, सबसे कम उम्र, खिलाड़ी"
				},
				{
					"language": "ro",
					"string": "Cine este cel mai tânăr jucător din Premier League?",
					"keywords": "juător, Premier League, cel mai tânăr"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nSELECT DISTINCT ?uri \nWHERE { \n        ?uri dbo:team ?x . \n        ?x dbo:league res:Premier_League . \n        ?uri dbo:birthDate ?y . \n} \nORDER BY DESC(?y) \nOFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Ernie_Pinkney"
						}
					}]
				}
			}]
		},
		{
			"id": "117",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the highest mountain in Italy?",
					"keywords": "highest, mountain, Italy"
				},
				{
					"language": "de",
					"string": "Was ist der höchste Berg in Italien?",
					"keywords": "höchste, Berg, Italien"
				},
				{
					"language": "es",
					"string": "¿Cuál es la montaña mas alta en Italia?",
					"keywords": "la montaña mas alta Italia"
				},
				{
					"language": "it",
					"string": "Qual è la montagna più alta in Italia?",
					"keywords": "montagna, più alta, Italia"
				},
				{
					"language": "fr",
					"string": "Quelle est la plus haute montagne d'Italie?",
					"keywords": "plus haute, plus haute, Italie"
				},
				{
					"language": "nl",
					"string": "Wat is de hoogste berg in Italië?",
					"keywords": "hoogste, berg, Italië"
				},
				{
					"language": "hi_IN",
					"string": "इटली में सर्वोच्च पर्वत कोनसा है?",
					"keywords": "इटली, सर्वोच्च पर्वत"
				},
				{
					"language": "ro",
					"string": "Care este cel mai înalt munte din Italia?",
					"keywords": "cel mai înalt, munte, Italia"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri\nWHERE {\n        ?uri rdf:type dbo:Mountain .\n        ?uri dbo:locatedInArea res:Italy .\n        ?uri dbo:elevation ?num .\n}\nORDER BY DESC(?num)\nOFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Mont_Blanc"
						}
					}]
				}
			}]
		},
		{
			"id": "118",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How tall is Claudia Schiffer?",
					"keywords": "Claudia Schiffer, tall"
				},
				{
					"language": "de",
					"string": "Wie groß ist Claudia Schiffer?",
					"keywords": "Claudia Schiffer, groß"
				},
				{
					"language": "es",
					"string": "¿Cómo de alta es Claudia Schiffer?",
					"keywords": "Claudia Schiffer, altura"
				},
				{
					"language": "it",
					"string": "Quanto è alta Claudia Schiffer?",
					"keywords": "Claudia Schiffer, altezza"
				},
				{
					"language": "fr",
					"string": "Quelle est la taille de Claudia Schiffer?",
					"keywords": "taille, Claudia Schiffer"
				},
				{
					"language": "nl",
					"string": "Hoe lang is Claudia Schiffer?",
					"keywords": "lengte, Claudia Schiffer"
				},
				{
					"language": "hi_IN",
					"string": "क्लाउडिया शिफ़ेर कितनी लंबी है?",
					"keywords": "क्लाउडिया शिफ़ेर, कितनी लंबी"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/>\nSELECT DISTINCT ?height \nWHERE {       \n        res:Claudia_Schiffer dbo:height ?height .      \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "1.81"
						}
					}]
				}
			}]
		},
		{
			"id": "119",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was John F. Kennedy's vice president?",
					"keywords": "John F. Kennedy, vice president"
				},
				{
					"language": "de",
					"string": "Wer war der Vizepräsident unter John F. Kennedy?",
					"keywords": "John F. Kennedy, Vizepräsident"
				},
				{
					"language": "es",
					"string": "¿Quién fué el vicepresidente de John F. Kennedy?",
					"keywords": "John F. Kennedy, vicepresidente"
				},
				{
					"language": "it",
					"string": "Chi fu il vicepresidente di John F. Kennedy?",
					"keywords": "John F. Kennedy, vicepresidente"
				},
				{
					"language": "fr",
					"string": "Qui était le vice-président de John F. Kennedy?",
					"keywords": "John F. Kennedy, vice-président"
				},
				{
					"language": "nl",
					"string": "Wie was de vicepresident onder John F. Kennedy?",
					"keywords": "John F. Kennedy, vicepresident"
				},
				{
					"language": "hi_IN",
					"string": "जॉन एफ कैनेडी के उपाध्यक्ष कौन थे?",
					"keywords": "जॉन एफ कैनेडी, उपाध्यक्ष"
				},
				{
					"language": "ro",
					"string": "Cine a fost vicepreședintele lui John F. Kennedy?",
					"keywords": "John F. Kennedy, vicepreședinte"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nSELECT DISTINCT ?uri \nWHERE { res:John_F._Kennedy dbo:vicePresident ?uri . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Lyndon_B._Johnson"
						}
					}]
				}
			}]
		},
		{
			"id": "120",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which subsidiary of Lufthansa serves both Dortmund and Berlin Tegel?",
					"keywords": "subsidiary, Lufthansa, serve, Dortmund, Berlin Tegel"
				},
				{
					"language": "de",
					"string": "Welche Tochtergesellschaft von Lufthansa fliegt sowohl Dortmund als auch Berlin Tegel an?",
					"keywords": "Tochtergesellschaft, Lufthansa, anfliegen, Dortmund, Berlin Tegel"
				},
				{
					"language": "es",
					"string": "¿Qué subsidiario de Lufthansa vuela en Dortmund y en Berlin?",
					"keywords": "subsidiario, Lufthansa, vuela, Dortmund y Berlin"
				},
				{
					"language": "it",
					"string": "Quale società sussidiaria di Lufthansa serve sia Dortmund che Berlin Tegel?",
					"keywords": "società sussidiaria di Lufthansa, servire, Dortmund, Berlin Tegel"
				},
				{
					"language": "fr",
					"string": "Quelle subsidiaire de Lufhansa vole sur Dortmund et Berlin Tegel?",
					"keywords": "subsidiaire, Lufhansa, vole sur, Dortmund, Berlin Tegel"
				},
				{
					"language": "nl",
					"string": "Welke dochteronderneming van Lufthansa bedient zowel Dortmund en Berlin Tegel?",
					"keywords": "dochteronderneming, Lufthansa, bedient, Dortmund, Berlin Tegel"
				},
				{
					"language": "hi_IN",
					"string": "लुफ्तहांसा की कौन सी सहायक कंपनी डॉर्टमुंड और बर्लिन टेगल दोनों की सेवा करती है?",
					"keywords": "लुफ्तहांसा, सहायक कंपनी, डॉर्टमुंड, बर्लिन टेगल, सेवा"
				},
				{
					"language": "ro",
					"string": "Care filială a Lufthansa deservește atât Dortmund cât și Berlin Tegel?",
					"keywords": "filială, Lufthansa, deservește, Dortmund, Berlin Tegel"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/> \nSELECT DISTINCT ?uri \nWHERE {\n        res:Lufthansa dbo:subsidiary ?uri .\n        ?uri dbo:targetAirport res:Dortmund_Airport .\n        ?uri dbo:targetAirport res:Berlin_Tegel_Airport .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Germanwings"
						}
					}]
				}
			}]
		},
		{
			"id": "121",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was the successor of John F. Kennedy?",
					"keywords": "John F. Kennedy, successor"
				},
				{
					"language": "de",
					"string": "Wer war der Nachfolger von John F. Kennedy?",
					"keywords": "John F. Kennedy, Nachfolger"
				},
				{
					"language": "es",
					"string": "¿Quién fué el sucesor de John F. Kennedy?",
					"keywords": "sucesor, John F. Kennedy"
				},
				{
					"language": "it",
					"string": "Chi fu il successore di John F. Kennedy?",
					"keywords": "John F. Kennedy, successore"
				},
				{
					"language": "fr",
					"string": "Qui était le successeur de John F. Kennedy?",
					"keywords": "John F. Kennedy, successeur"
				},
				{
					"language": "nl",
					"string": "Wie was de opvolger van John F. Kennedy?",
					"keywords": "John F. Kennedy, opvolger"
				},
				{
					"language": "hi_IN",
					"string": "जॉन एफ कैनेडी के उत्तराधिकारी कौन थे?",
					"keywords": "जॉन एफ कैनेडी, उत्तराधिकारी"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n\tres:John_F._Kennedy dbo:successor ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Benjamin_A._Smith_II"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Lyndon_B._Johnson"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Tip_O'Neill"
							}
						}
					]
				}
			}]
		},
		{
			"id": "122",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who composed the soundtrack for Cameron's Titanic?",
					"keywords": "compose, soundtrack, Cameron's Titanic"
				},
				{
					"language": "fa",
					"string": "چه کسی موسیقی متن تایتانیک کامرون را نوشته است؟",
					"keywords": "موسیقی متن، تایتانیک کامرون، نوشته"
				},
				{
					"language": "de",
					"string": "Wer hat den Soundtrack für Camerons Titanic geschrieben?",
					"keywords": "Cameron, Titanic, Soundtrack, geschrieben"
				},
				{
					"language": "es",
					"string": "¿Quién compuso la banda sonora del Titanic de Cameron?",
					"keywords": "compositor, banda sonora, Titanic de Cameron"
				},
				{
					"language": "it",
					"string": "Chi ha composto la colonna sonora di Titanic di Cameron?",
					"keywords": "comporre, colonna sonora, Titanic, Cameron"
				},
				{
					"language": "fr",
					"string": "Qui a composé le soundtrack du Titanic de Cameron?",
					"keywords": "compositeur, sountrack, Titanic, Cameron"
				},
				{
					"language": "nl",
					"string": "Door wie is de filmmuziek van Camerons Titanic geschreven?",
					"keywords": "filmmuziek, Camerons Titanic, componist"
				},
				{
					"language": "hi_IN",
					"string": "कैमरन टाइटैनिक के लिए साउंडट्रैक किसने बनाया है?",
					"keywords": "कैमरन टाइटैनिक, साउंडट्रैक, बनाया"
				},
				{
					"language": "ro",
					"string": "Cine a compus coloana sonoră pentru Titanicul lui Cameron?",
					"keywords": "compus, coloana sonoră, Titanicul lui Cameron"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Titanic_(1997_film)> <http://dbpedia.org/ontology/musicComposer> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/James_Horner"
						}
					}]
				}
			}]
		},
		{
			"id": "123",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which movies did Kurosawa direct?",
					"keywords": "film, direct, Kurosawa"
				},
				{
					"language": "de",
					"string": "Welche Filme hat Kurosawa gedreht?",
					"keywords": "Film, drehen, Kurosawa"
				},
				{
					"language": "es",
					"string": "¿Qué películas ha rodado Kurosawa?",
					"keywords": "película, rodada, Kurosawa?"
				},
				{
					"language": "it",
					"string": "Che film ha diretto Kurosawa?",
					"keywords": "film, dirigere, Kurosawa"
				},
				{
					"language": "fr",
					"string": "Quels films ont été realisés par Kurosawa?",
					"keywords": "films, Kurosawa"
				},
				{
					"language": "nl",
					"string": "Welke films heeft Kurosawa geregisseerd?",
					"keywords": "film, Kurosawa, regisseur"
				},
				{
					"language": "hi_IN",
					"string": "कुरोसावा ने कौन सी फिल्मों का निर्देशन किया है ?",
					"keywords": "कुरोसावा, फिल्मो, निर्देशन"
				},
				{
					"language": "ro",
					"string": "Ce filme a regizat Kurosawa?",
					"keywords": "film, regiza, Kurosawa"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri\nWHERE {\n        ?uri rdf:type dbo:Film .\n        ?uri dbo:director res:Akira_Kurosawa .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Idiot_(1951_film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Dreams_(1990_film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Bad_Sleep_Well"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Hidden_Fortress"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Throne_of_Blood"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Drunken_Angel"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Kagemusha"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Rhapsody_in_August"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Dersu_Uzala_(1975_film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Sanshiro_Sugata"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Seven_Samurai"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Sanjuro"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Scandal_(1950_film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Sanshiro_Sugata_Part_II"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/One_Wonderful_Sunday"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Most_Beautiful"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Quiet_Duel"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Madadayo"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/High_and_Low_(1963_film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Ikiru"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Red_Beard"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Dodes'ka-den"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Those_Who_Make_Tomorrow"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Yojimbo_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Rashomon"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Stray_Dog_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Horse_(1941_film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/No_Regrets_for_Our_Youth"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Ran_(film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Lower_Depths_(1957_film)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/I_Live_in_Fear"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Men_Who_Tread_on_the_Tiger's_Tail"
							}
						}
					]
				}
			}]
		},
		{
			"id": "124",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "For which label did Elvis record his first album?",
					"keywords": "Elvis, first, album, label"
				},
				{
					"language": "de",
					"string": "Welche Plattenfirma hat Elvis' erstes Album aufgenommen?",
					"keywords": "Elvis, erstes, Album, Plattenfirma"
				},
				{
					"language": "es",
					"string": "¿Qué discográfica grabó el primer album de Elvis?",
					"keywords": "discográfica, primer album de Elvis"
				},
				{
					"language": "it",
					"string": "Quale casa discografica ha inciso il primo album di Elvis?",
					"keywords": "Elvis, primo, album, casa discografica"
				},
				{
					"language": "fr",
					"string": "Quel est le label discographe qui a publié le premier disque d'Elvis?",
					"keywords": "label discographe, publié, premier disque, Elvis"
				},
				{
					"language": "nl",
					"string": "Bij welk platenlabel verscheen het eerste album van Elvis Presley?",
					"keywords": "platenlabel, eerste album, Elvis"
				},
				{
					"language": "hi_IN",
					"string": "किस लेबल के लिए एल्विस ने अपना पहला एल्बम रिकॉर्ड किया था?",
					"keywords": "लेबल, एल्विस, पहला एल्बम, रिकॉर्ड"
				},
				{
					"language": "ro",
					"string": "Ce casă discografică a înregistrat primul album al lui Elvis?",
					"keywords": "Elvis, prim, album, casă discografică"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri \nWHERE {\n        ?x rdf:type dbo:Album .\n        ?x dbo:artist res:Elvis_Presley .\n        ?x dbo:releaseDate ?y .\n        ?x dbo:recordLabel ?uri .\n}\nORDER BY ASC(?y) \nOFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Pickwick_Records"
						}
					}]
				}
			}]
		},
		{
			"id": "125",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which time zone is Rome?",
					"keywords": "time zone, Rome"
				},
				{
					"language": "fa",
					"string": "رم در چه ناحیه زمانی قرار دارد؟",
					"keywords": "رم، ناحیه زمانی"
				},
				{
					"language": "de",
					"string": "In welcher Zeitzone liegt Rom?",
					"keywords": "Rom, Zeitzone"
				},
				{
					"language": "es",
					"string": "¿En qué zona horaria esta Roma?",
					"keywords": "zona horaria, Roma"
				},
				{
					"language": "it",
					"string": "Qual è il fuso orario di Roma?",
					"keywords": "fuso orario, Roma"
				},
				{
					"language": "fr",
					"string": "Quelle est la zone horaire de Rome?",
					"keywords": "zone horaire, Rome"
				},
				{
					"language": "nl",
					"string": "In welke tijdzone zit Rome?",
					"keywords": "Rome, tijdzone"
				},
				{
					"language": "hi_IN",
					"string": "रोम किस समय क्षेत्र में है?",
					"keywords": "रोम, समय क्षेत्र"
				},
				{
					"language": "ro",
					"string": "Pe ce fus orar este Roma?",
					"keywords": "fus orar, Roma"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Rome> <http://dbpedia.org/ontology/timeZone> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Central_European_Time"
						}
					}]
				}
			}]
		},
		{
			"id": "126",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me the currency of China.",
					"keywords": "currency, China"
				},
				{
					"language": "de",
					"string": "Welche Währung benutzt China?",
					"keywords": "Währung, China"
				},
				{
					"language": "es",
					"string": "¿Cual es la moneda de China?",
					"keywords": "moneda, China"
				},
				{
					"language": "it",
					"string": "Dammi la valuta della Cina.",
					"keywords": "valuta, Cina"
				},
				{
					"language": "fr",
					"string": "Doone-moi la monnaie chinoise.",
					"keywords": "monnaie, chinoise"
				},
				{
					"language": "nl",
					"string": "Wat is de munteenheid van China?",
					"keywords": "munteenheid, China"
				},
				{
					"language": "hi_IN",
					"string": "मुझे चीन की मुद्रा बतायें ।",
					"keywords": "चीन, मुद्रा"
				},
				{
					"language": "ro",
					"string": "Care este moneda din China?",
					"keywords": "moneda, China"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/> \nSELECT DISTINCT ?uri\nWHERE {  \n   res:China dbo:currency ?uri . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Renminbi"
						}
					}]
				}
			}]
		},
		{
			"id": "127",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who are the developers of DBpedia?",
					"keywords": "developers, DBpedia"
				},
				{
					"language": "fa",
					"string": "چه کسانی توسعه دهندگان دی.بی.پدیا هستند؟",
					"keywords": "توسعه دهندگان، دی.بی.پدیا"
				},
				{
					"language": "de",
					"string": "Wer sind die Entwickler von DBpedia?",
					"keywords": "Entwickler, DBpedia"
				},
				{
					"language": "es",
					"string": "¿Quiénes son los desarrolladores de DBpedia?",
					"keywords": "desarrolladores, DBpedia"
				},
				{
					"language": "it",
					"string": "Chi ha sviluppato DBpedia?",
					"keywords": "sviluppatori, DBpedia"
				},
				{
					"language": "fr",
					"string": "Qui sont les développeurs de DBpedia?",
					"keywords": "développeurs, DBpedia"
				},
				{
					"language": "nl",
					"string": "Wie heeft DBpedia ontwikkeld?",
					"keywords": "DBpedia, ontwikkelaar"
				},
				{
					"language": "hi_IN",
					"string": "डीबीपीडिया के डेवलपर कौन हैं?",
					"keywords": "डीबीपीडिया, डेवलपर, विकासक"
				},
				{
					"language": "ro",
					"string": "Cine sunt dezvoltatorii DBpedia?",
					"keywords": "dezvoltatori, DBpedia"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/DBpedia> <http://dbpedia.org/ontology/developer> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/University_of_Mannheim"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Leipzig_University"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/OpenLink_Software"
							}
						}
					]
				}
			}]
		},
		{
			"id": "128",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Does Abraham Lincoln's death place have a website?",
					"keywords": "Abraham Lincoln, death place, website"
				},
				{
					"language": "de",
					"string": "Hat Abraham Lincolns Sterbeort eine Webseite?",
					"keywords": "Abraham Lincoln, Sterbeort, Webseite"
				},
				{
					"language": "es",
					"string": "¿Tiene el lugar de nacimiento de Abraham Lincol una página web?",
					"keywords": "Abraham Lincoln, lugar de nacimiento, página web"
				},
				{
					"language": "it",
					"string": "Il luogo di morte di Abraham Lincoln ha un sito web?",
					"keywords": "Abraham Lincoln, luogo di morte, website"
				},
				{
					"language": "fr",
					"string": "A le lieu de décès d'Abraham Lincoln une page Web?",
					"keywords": "Abraham Lincoln, lieu de décès, page Web"
				},
				{
					"language": "nl",
					"string": "Heeft de stad waarin Abraham Lincoln is overleden een website?",
					"keywords": "Abraham Lincoln, stad, gestorven, website"
				},
				{
					"language": "hi_IN",
					"string": "अब्राहम लिंकन की मौत की जगह की बसाइट है?",
					"keywords": "अब्राहम लिंकन, मौत, जगह, बसाइट"
				},
				{
					"language": "ro",
					"string": "Locul morții lui Abraham Lincoln are un website?",
					"keywords": "locul morții, Abraham Lincoln, website"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE {\n        res:Abraham_Lincoln dbo:deathPlace ?p .\n        ?p dbo:website ?w . \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": false
			}]
		},
		{
			"id": "129",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the king of the Netherlands?",
					"keywords": "king, the Netherlands"
				},
				{
					"language": "fa",
					"string": "پادشاه هلند کیست؟",
					"keywords": "پادشاه، هلند"
				},
				{
					"language": "de",
					"string": "Wer ist der König der Niederlande?",
					"keywords": "König, Niederlande"
				},
				{
					"language": "es",
					"string": "¿Quién es el rey de los Países Bajos?",
					"keywords": "rey, Países Bajos"
				},
				{
					"language": "it",
					"string": "Chi è il re dei Paesi Bassi?",
					"keywords": "re, Paesi Bassi"
				},
				{
					"language": "fr",
					"string": "Qui est le roi des Pays-Bas?",
					"keywords": "roi, pays-bas"
				},
				{
					"language": "nl",
					"string": "Wie is de koning van Nederland?",
					"keywords": "koning, Nederland"
				},
				{
					"language": "hi_IN",
					"string": "नीदरलैंड का राजा कौन है?",
					"keywords": "नीदरलैंड, राजा"
				},
				{
					"language": "ro",
					"string": "Cine este regele Țărilor de Jos?",
					"keywords": "rege, Țările de Jos"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Netherlands> <http://dbpedia.org/ontology/leader> ?uri . ?uri a <http://dbpedia.org/ontology/Royalty> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Willem-Alexander_of_the_Netherlands"
						}
					}]
				}
			}]
		},
		{
			"id": "130",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which city did Nikos Kazantzakis die?",
					"keywords": "city, Nikos Kazantzakis, die"
				},
				{
					"language": "fa",
					"string": "نیکوس کازانتزاکیس در کدام کشور مرد؟",
					"keywords": "نیکوس کازانتزاکیس، کشور، مرد"
				},
				{
					"language": "de",
					"string": "In welcher Stadt ist Nikos Kazantzakis gestorben?",
					"keywords": "Nikos Kazantzakis, Stadt, gestorben"
				},
				{
					"language": "es",
					"string": "¿En que ciudad murió Nikos Kazantzakis?",
					"keywords": "ciudad, murió, Nikos Kazantzakis?"
				},
				{
					"language": "it",
					"string": "In quale città è morto Nikos Kazantzakis",
					"keywords": "città, Nikos Kazantzakis, morto"
				},
				{
					"language": "fr",
					"string": "Dans quelle ville est mort Kazantsakis?",
					"keywords": "ville de décès, Kazantsakis"
				},
				{
					"language": "nl",
					"string": "In welke stad is Nikos Kazantzakis overleden?",
					"keywords": "Nikos Kazantzakis, overleden, stad"
				},
				{
					"language": "hi_IN",
					"string": "निकोस काजांटाजाकिस का किस शहर में निधन हुआ ?",
					"keywords": "निकोस काजांटाजाकिस, शहर, निधन"
				},
				{
					"language": "ro",
					"string": "În ce oraș a murit Nikos Kazantsakis?",
					"keywords": "oraș, Nikos Kazantsakis, murit"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Nikos_Kazantzakis> <http://dbpedia.org/ontology/deathPlace> ?uri . ?uri a <http://dbpedia.org/ontology/Town> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Freiburg_im_Breisgau"
						}
					}]
				}
			}]
		},
		{
			"id": "131",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": false,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was the father of Queen Elizabeth II?",
					"keywords": "father, Queen Elizabeth II"
				},
				{
					"language": "de",
					"string": "Wer war der Vater von Königin Elizabeth II?",
					"keywords": "Vater, Königin Elizabeth II"
				},
				{
					"language": "es",
					"string": "¿Quién fue el padre de la reina Isabel II?",
					"keywords": "padre, reina Isabel II"
				},
				{
					"language": "it",
					"string": "Chi fu il padre della regina Elisabetta II?",
					"keywords": "padre, regina Elisabetta II"
				},
				{
					"language": "fr",
					"string": "Qui est le père de la reine Élisabeth II?",
					"keywords": "père, Élisabeth II"
				},
				{
					"language": "nl",
					"string": "Wie was de vader van koningin Elizabeth II?",
					"keywords": "koningin Elizabeth II, vader"
				},
				{
					"language": "hi_IN",
					"string": "महारानी एलिजाबेथ द्वितीय के पिता कौन थे?",
					"keywords": "महारानी एलिजाबेथ द्वितीय, पिता"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbp: <http://dbpedia.org/property/>\nSELECT DISTINCT ?uri\nWHERE { \n        res:Elizabeth_II dbp:father ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/George_VI"
						}
					}]
				}
			}]
		},
		{
			"id": "132",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me a list of all critically endangered birds.",
					"keywords": "list, critically endangered birds"
				},
				{
					"language": "fa",
					"string": "لیستی از پرندگان روبه انقراض را بده.",
					"keywords": "پرندگان، روبه انقراض"
				},
				{
					"language": "de",
					"string": "Gib mir eine Liste aller stark bedrohten Vogelarten.",
					"keywords": "Vogel, stark gefährdet"
				},
				{
					"language": "es",
					"string": "Dame una lista de todas las aves en peligro de extinción.",
					"keywords": "aves, peligro de extinción"
				},
				{
					"language": "it",
					"string": "Dammi la lista di tutti gli uccelli in via di estinzione.",
					"keywords": "lista, uccelli in via di estinzione"
				},
				{
					"language": "fr",
					"string": "Donnes-moi la liste des oiseaux en voie de disparition.",
					"keywords": "oiseaux, voie de disparition"
				},
				{
					"language": "nl",
					"string": "Geef een lijst met alle ernstig bedreigde vogelsoorten.",
					"keywords": "vogels, ernstig bedreigd"
				},
				{
					"language": "hi_IN",
					"string": "मुझे समीक्षकों से लुप्तप्राय पक्षियों की सूची बतायें ।",
					"keywords": "समीक्षकों, लुप्तप्राय पक्षियों"
				},
				{
					"language": "ro",
					"string": "Dă-mi o listă cu toate păsările în pericol ridicat de dispariție.",
					"keywords": "listă, păsări în pericol ridicat de dispariție"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri ?p WHERE { ?uri a <http://dbpedia.org/ontology/Bird> . { ?uri <http://dbpedia.org/ontology/conservationStatus> 'CR'^^<http://www.w3.org/2001/XMLSchema#string> . } UNION { ?uri <http://purl.org/dc/terms/subject> <http://dbpedia.org/resource/Category:Critically_endangered_animals> . } }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Chatham_pigeon"
						}
					}]
				}
			}]
		},
		{
			"id": "133",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many inhabitants does the largest city in Canada have?",
					"keywords": "inhabitants, largest city, Canada"
				},
				{
					"language": "de",
					"string": "Wieviele Einwohner hat die größte Stadt in Kanada?",
					"keywords": "Einwohner, größte Stadt, Kanada"
				},
				{
					"language": "es",
					"string": "¿Cuántos habitantes tiene la ciudad más grande de Canadá?",
					"keywords": "número de habitantes, ciudad más grande de Canadá"
				},
				{
					"language": "it",
					"string": "Quanti abitanti ha la città più grande del Canada?",
					"keywords": "abitanti, città più grande, Canada"
				},
				{
					"language": "fr",
					"string": "Combien d'habitants a large ville la plus grande du Canada?",
					"keywords": "nombre dhabitants, ville la plus large, Canada"
				},
				{
					"language": "nl",
					"string": "Hoeveel inwoners heeft de grootste stadt in Canada?",
					"keywords": "inwoners, grootste, stad, Canada"
				},
				{
					"language": "hi_IN",
					"string": "कनाडा के सबसे बड़े शहर में कितने निवासी हैं?",
					"keywords": "कनाडा, सबसे बड़े शहर, निवासी"
				},
				{
					"language": "ro",
					"string": "Câți locuitori are cel mai are oraș din Canada?",
					"keywords": "locuitori, cel mai mare oraș, Canada"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?num\nWHERE {\n        res:Canada dbo:largestCity ?city . \n        ?city dbo:populationTotal ?num .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "2615060"
						}
					}]
				}
			}]
		},
		{
			"id": "134",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which military conflicts did Lawrence of Arabia participate?",
					"keywords": "Lawrence of Arabia, military conflict"
				},
				{
					"language": "de",
					"string": "An welchen militärischen Auseinandersetzungen war Lawrence von Arabien beteiligt?",
					"keywords": "Lawrence von Arabien, militärische Auseinandersetzung"
				},
				{
					"language": "es",
					"string": "¿En qué conflictos militares participó Lawrence de Arabia?",
					"keywords": "Lawrence de Arabia, conflicto militar"
				},
				{
					"language": "it",
					"string": "A quali conflitti militari ha partecipato Lawrence d'Arabia?",
					"keywords": "Lawrence d'Arabia, conflitto militare"
				},
				{
					"language": "fr",
					"string": "Dans quels conflits militaires a participé Lawrence d'Arabie?",
					"keywords": "Lawrence d'Arabie, conflits militaires"
				},
				{
					"language": "nl",
					"string": "Bij welke militaire conflicten was Lawrence of Arabia betrokken?",
					"keywords": "militair conflict, Lawrence of Arabia"
				},
				{
					"language": "hi_IN",
					"string": "अरब के लॉरेंस ने किस सैन्य युद्ध में भाग लिया?",
					"keywords": "अरब के लॉरेंस, सैन्य युद्ध, भाग लिया"
				},
				{
					"language": "ro",
					"string": "În care conflicte militare a participat Lawrence al Arabiei?",
					"keywords": "Lawrence al Arabiei, conflict militar"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nSELECT DISTINCT ?uri \nWHERE { \n        res:T._E._Lawrence dbo:battle ?uri . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Battle_of_Aqaba"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/World_War_I"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Battle_of_Fwelia"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Siege_of_Medina"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Battle_of_Deraa"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Arab_Revolt"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Battle_of_Megiddo_(1918)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Battle_of_Talifeh"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Capture_of_Damascus_(1918)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Battle_of_Aba_el_Lissan"
							}
						}
					]
				}
			}]
		},
		{
			"id": "135",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which book has the most pages?",
					"keywords": "book, the most pages"
				},
				{
					"language": "de",
					"string": "Welches Buch hat die meisten Seiten?",
					"keywords": "Buch, meisten Seiten"
				},
				{
					"language": "es",
					"string": "¿Que libro tiene el mayor numero de paginas?",
					"keywords": "libro, mayor numero paginas"
				},
				{
					"language": "it",
					"string": "Quale libro ha il maggior numero di pagine?",
					"keywords": "libro, maggior numero di pagine"
				},
				{
					"language": "fr",
					"string": "Quel livre a le plus de pages?",
					"keywords": "livre, le plus de pages"
				},
				{
					"language": "nl",
					"string": "Welk boek heeft de meeste pagina's?",
					"keywords": "boek, meeste pagina's"
				},
				{
					"language": "hi_IN",
					"string": "कौन से पुस्तक में सबसे अधिक पृष्ठ हैं?",
					"keywords": "पुस्तक, सबसे अधिक पृष्ठ"
				},
				{
					"language": "ro",
					"string": "Ce carte are cele mai multe pagini?",
					"keywords": "carte, cele mai multe pagini"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \nSELECT DISTINCT ?uri\nWHERE { \n        ?uri rdf:type dbo:Book . \n        ?uri dbo:numberOfPages ?n .\n}\nORDER BY DESC(?n)\nOFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/The_Tolkien_Reader"
						}
					}]
				}
			}]
		},
		{
			"id": "136",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which country does the Nile start?",
					"keywords": "Nile, start, country"
				},
				{
					"language": "de",
					"string": "In welchem Land entspringt der Nil?",
					"keywords": "Nil, entspringen, Land"
				},
				{
					"language": "es",
					"string": "¿En qué país nace el Nilo?",
					"keywords": "Nilo, país, orígen"
				},
				{
					"language": "it",
					"string": "In quale stato nasce il Nilo?",
					"keywords": "Nilo, stato, origine"
				},
				{
					"language": "fr",
					"string": "Dans quel pays commence le Nil?",
					"keywords": "pays, commence, Nil"
				},
				{
					"language": "nl",
					"string": "In welk land ontspringt de Nijl?",
					"keywords": "ontspringt, Nijl"
				},
				{
					"language": "hi_IN",
					"string": "नाइल नदी किस देश में शुरू होती है?",
					"keywords": "नाइल नदी, देश, शुरू"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {       \n        res:Nile dbo:sourceCountry ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Rwanda"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Ethiopia"
							}
						}
					]
				}
			}]
		},
		{
			"id": "137",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the Formula 1 race driver with the most races?",
					"keywords": "Formula 1, race driver, races, most"
				},
				{
					"language": "fa",
					"string": "چه کسی راننده فرمول 1 با بیشترین مسابقه است؟",
					"keywords": "راننده، فرمول 1، بیشترین، مسابقه"
				},
				{
					"language": "de",
					"string": "Wer ist der Formel-1-Fahrer mit den meisten Rennen?",
					"keywords": "Formel 1, Rennfahrer, Rennen, die meisten"
				},
				{
					"language": "es",
					"string": "¿Quién es el conductor de Formula 1 con más carreras?",
					"keywords": "Fconductor, órmula 1, carreras, más"
				},
				{
					"language": "it",
					"string": "Qual è il pilota di Formula 1 con più gare?",
					"keywords": "Formula 1, pilota, maggior numero di gare"
				},
				{
					"language": "fr",
					"string": "Quel est le pilote de Formule 1 qui a gagné le plus de courses?",
					"keywords": "Formule 1, pilote, plus de courses"
				},
				{
					"language": "nl",
					"string": "Wie is de Formule 1-coureur met de meeste races op zijn naam?",
					"keywords": "Formule 1, coureur, races, de meeste"
				},
				{
					"language": "hi_IN",
					"string": "सबसे अधिक दौड़ वाले फॉर्मूला 1 रेस ड्रायवर कौन है?",
					"keywords": "सबसे अधिक दौड़, फॉर्मूला 1, रेस ड्रायवर"
				},
				{
					"language": "ro",
					"string": "Cine este pilotul de curse Formula 1 cu cele mai multe curse?",
					"keywords": "Formula 1, pilot de curse, cele mai multe"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/FormulaOneRacer> .  ?uri <http://dbpedia.org/ontology/races> ?x . } ORDER BY DESC(?x) OFFSET 0 LIMIT 1 "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Michael_Schumacher"
						}
					}]
				}
			}]
		},
		{
			"id": "138",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which companies produce hovercrafts?",
					"keywords": "companies, produce, hovercrafts"
				},
				{
					"language": "fa",
					"string": "چه شرکت هایی هواناو تولید می کنند؟",
					"keywords": "شرکت هایی، هواناو، تولید"
				},
				{
					"language": "de",
					"string": "Welche Firmen stellen Hovercrafts her?",
					"keywords": "Firma, herstellen, Hovercraft"
				},
				{
					"language": "es",
					"string": "¿Qué compañías producen aerodeslizadores?",
					"keywords": "compañías, producen, aerodeslizadores"
				},
				{
					"language": "it",
					"string": "Quali società producono aeroscafi?",
					"keywords": "società produrre, aeroscafi"
				},
				{
					"language": "fr",
					"string": "Quelles companies produisent des aéroglisseurs?",
					"keywords": "companies, aéroglisseurs"
				},
				{
					"language": "nl",
					"string": "Welke bedrijven produceren hovercrafts?",
					"keywords": "bedrijven, produceren, hovercrafts"
				},
				{
					"language": "hi_IN",
					"string": "कौन सी कंपनियां हॉवरक्राफ्ट बनाती हैं?",
					"keywords": "कंपनियां, हॉवरक्राफ्ट बनाती"
				},
				{
					"language": "ro",
					"string": "Care companii produc aeroglisoare?",
					"keywords": "companii, produc, aeroglisoare"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri a <http://dbpedia.org/ontology/Company> . ?uri <http://dbpedia.org/ontology/product> <http://dbpedia.org/resource/Hovercraft> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Saunders-Roe"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Hanjin_Heavy_Industries"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/British_Hovercraft_Corporation"
							}
						}
					]
				}
			}]
		},
		{
			"id": "139",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Did Elvis Presley have children?",
					"keywords": "Elvis Presley, children"
				},
				{
					"language": "fa",
					"string": "آیا الویس پرسلی فرزند دارد؟",
					"keywords": "الویس پرسلی، فرزند"
				},
				{
					"language": "de",
					"string": "Hatte Elvis Presley Kinder?",
					"keywords": "Elvis Presley, Kinder"
				},
				{
					"language": "es",
					"string": "Tuvo hijos Elvis Presley?",
					"keywords": "hijos, Elvis Presley"
				},
				{
					"language": "it",
					"string": "Elvis Presley ha avuto dei figli?",
					"keywords": "Elvis Presley, figli"
				},
				{
					"language": "fr",
					"string": "Elvis Presley a-t-il eu des enfants?",
					"keywords": "enfants, Elvis Presley"
				},
				{
					"language": "nl",
					"string": "Had Elvis Presley kinderen?",
					"keywords": "Elvis Presley, kinderen"
				},
				{
					"language": "hi_IN",
					"string": "क्या एल्विस प्रेस्ली के बच्चे थे ?",
					"keywords": "एल्विस प्रेस्ली, बच्चे"
				},
				{
					"language": "ro",
					"string": "A avut Elvis Presley copii?",
					"keywords": "Elvis Presly, copii"
				}
			],
			"query": {
				"sparql": "ASK WHERE { <http://dbpedia.org/resource/Elvis_Presley> <http://dbpedia.org/ontology/child> ?uri . } "
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "140",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which city was the president of Montenegro born?",
					"keywords": "city, born, president of Montenegro"
				},
				{
					"language": "fa",
					"string": "رئیس جمهور مونتنگرو در کدام شهر متولد شد؟",
					"keywords": "رئیس جمهور، مونتنگرو، کشور، متولد"
				},
				{
					"language": "de",
					"string": "In welcher Stadt ist der Präsident von Montenegro geboren?",
					"keywords": "Präsident, Montenegro, Geburtsstadt"
				},
				{
					"language": "es",
					"string": "¿En que ciudad nació el presidente de Montenegro?",
					"keywords": "ciudad, nació, presidente de Montenegro"
				},
				{
					"language": "it",
					"string": "In quale città è nato il presidente del Montenegro?",
					"keywords": "città, nato, presidente del Montenegro"
				},
				{
					"language": "fr",
					"string": "Quelle est la ville de naissance du président du Monténégro?",
					"keywords": "ville, naissance, président, Monténégro"
				},
				{
					"language": "nl",
					"string": "In welke stad is de president van Montenegro geboren?",
					"keywords": "president, Montenegro, geboortestad"
				},
				{
					"language": "hi_IN",
					"string": "मोंटेनेग्रो के राष्ट्रपति किस शहर में पैदा हुए थे?",
					"keywords": "मोंटेनेग्रो, राष्ट्रपति, शहर, पैदा"
				},
				{
					"language": "ro",
					"string": "În ce oraș s-a născut președintele Muntenegrului?",
					"keywords": "oraș, născut, președintele Muntenegrului"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?x <http://dbpedia.org/property/office> <http://dbpedia.org/resource/President_of_Montenegro> . ?x <http://dbpedia.org/ontology/birthPlace> ?uri . ?uri a <http://dbpedia.org/ontology/City> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Belgrade"
						}
					}]
				}
			}]
		},
		{
			"id": "141",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which country was Bill Gates born in?",
					"keywords": "country, born, Bill Gates"
				},
				{
					"language": "fa",
					"string": "بیل گیت در کدام کشور متولد آمد؟",
					"keywords": "بیل گیت، کشور، متولد"
				},
				{
					"language": "de",
					"string": "In welchem Land ist Bill Gates geboren?",
					"keywords": "Bill Gates, Land, geboren"
				},
				{
					"language": "es",
					"string": "¿En qué país nació Bill Gates?",
					"keywords": "país nacimiento, Bill Gates"
				},
				{
					"language": "it",
					"string": "In quale stato è nato Bill Gates?",
					"keywords": "stato, nato, Bill Gates"
				},
				{
					"language": "fr",
					"string": "Quel est l'état de naissance de Bill Gates?",
					"keywords": "état, naissance, Bill Gates"
				},
				{
					"language": "nl",
					"string": "In welke land is Bill Gates geboren?",
					"keywords": "Bill Gates, geboorteland"
				},
				{
					"language": "hi_IN",
					"string": "बिल गेट्स का जन्म किस देश में हुआ था?",
					"keywords": "बिल गेट्स, जन्म, देश"
				},
				{
					"language": "ro",
					"string": "În ce țară s-a născut Bill Gates?",
					"keywords": "țară, născut, Bill Gates"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Bill_Gates> <http://dbpedia.org/ontology/birthPlace> ?x . ?x <http://dbpedia.org/ontology/country> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/United_States"
						}
					}]
				}
			}]
		},
		{
			"id": "142",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which countries do people speak Japanese?",
					"keywords": "which countries, speak, Japanese"
				},
				{
					"language": "fa",
					"string": "در چه کشورهایی مردم ژاپنی صحبت می کنند؟",
					"keywords": "کشورهایی، ژاپنی، صحبت"
				},
				{
					"language": "de",
					"string": "In welcher Ländern wird Japanisch gesprochen?",
					"keywords": "Länder, Sprache, Japanisch"
				},
				{
					"language": "es",
					"string": "¿En qué países se habla japonés?",
					"keywords": "países, habla, japonés"
				},
				{
					"language": "it",
					"string": "In quali stati si parla giapponese?",
					"keywords": "stati, parlare, giapponese"
				},
				{
					"language": "fr",
					"string": "Dans quels pays parle-t-on japonais?",
					"keywords": "pays, language, japonais"
				},
				{
					"language": "nl",
					"string": "In welke landen wordt Japans gesproken?",
					"keywords": "landen, taal, Japans"
				},
				{
					"language": "hi_IN",
					"string": "किन देशों में लोग जापानी बोलते हैं?",
					"keywords": "देशों, लोग, जापानी"
				},
				{
					"language": "ro",
					"string": "În ce țari se vorbește japoneza?",
					"keywords": "ce țări, vorbește, japoneza"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri a <http://dbpedia.org/ontology/Country> . ?uri <http://dbpedia.org/ontology/language> <http://dbpedia.org/resource/Japanese_language> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Japan"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Palau"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Allied_Military_Government_for_Occupied_Territories"
							}
						}
					]
				}
			}]
		},
		{
			"id": "143",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Show me the book that Muhammad Ali wrote.",
					"keywords": "book, wrote, Muhammad Ali"
				},
				{
					"language": "de",
					"string": "Zeig mir das Buch, das Muhammad Ali geschrieben hat.",
					"keywords": "Buch, geschrieben, Muhammad Ali"
				},
				{
					"language": "es",
					"string": "Muéstrame el libro escrito por Muhammad Ali.",
					"keywords": "libro, autor, Muhammad Ali"
				},
				{
					"language": "it",
					"string": "Mostrami il libro scritto da Muhammad Ali.",
					"keywords": "libro, autore, Muhammad Ali"
				},
				{
					"language": "fr",
					"string": "Donne-moi le livre écrit par Muhammad Ali.",
					"keywords": "livre, par Muhammad Ali"
				},
				{
					"language": "nl",
					"string": "Toen het boek dat Muhammad Ali heeft geschreven.",
					"keywords": "boek, geschreven, Muhammad Ali"
				},
				{
					"language": "hi_IN",
					"string": "मुझे किताब बताओ जो मुहम्मद अली ने लिखी थी।",
					"keywords": "किताब, मुहम्मद अली, लिखी"
				},
				{
					"language": "ro",
					"string": "Arată-mi cartea pe care a scris-o Muhammad Ali.",
					"keywords": "carte, scris, Muhammad Ali"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \nSELECT DISTINCT ?uri \nWHERE { \n         ?uri rdf:type dbo:Book . \n         ?uri dbo:author res:Muhammad_Ali . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/The_Soul_of_a_Butterfly"
						}
					}]
				}
			}]
		},
		{
			"id": "144",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is Michelle Obama the wife of Barack Obama?",
					"keywords": "Michelle Obama, wife, Barack Obama"
				},
				{
					"language": "de",
					"string": "Ist Michelle Obama die Frau von Barack Obama?",
					"keywords": "Michelle Obama, Frau, Barack Obama"
				},
				{
					"language": "es",
					"string": "¿Es Michele Obama la esposa de Barack Obama?",
					"keywords": "Michelle Obama, esposa, Barack Obama"
				},
				{
					"language": "it",
					"string": "Michelle Obama è la moglie di Barack Obama?",
					"keywords": "Michelle Obama, moglie, Barack Obama"
				},
				{
					"language": "fr",
					"string": "Michelle Obama est-elle l'épouse de Barack Obama?",
					"keywords": "Michelle Obama, épouse, Barack Obama"
				},
				{
					"language": "nl",
					"string": "Is Michelle Obama de vrouw van Barack Obama?",
					"keywords": "Michelle Obama, vrouw van, Barack Obama"
				},
				{
					"language": "hi_IN",
					"string": "क्या बराक ओबामा की पत्नी मिशेल ओबामा हैं?",
					"keywords": "बराक ओबामा, पत्नी, मिशेल ओबामा"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE {\n\tres:Barack_Obama dbo:spouse res:Michelle_Obama .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "145",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the area code of Berlin?",
					"keywords": "Berlin, area code"
				},
				{
					"language": "de",
					"string": "Was ist die Vorwahl von Berlin?",
					"keywords": "Berlin, Vorwahl"
				},
				{
					"language": "es",
					"string": "¿Cuál es el prefijo de Berlin?",
					"keywords": "prefijo, Berlin"
				},
				{
					"language": "it",
					"string": "Qual è il prefisso di Berlino?",
					"keywords": "prefisso, Berlino"
				},
				{
					"language": "fr",
					"string": "Quel est l'indicatif téléphonique de Berlin?",
					"keywords": "indicatif téléphonique, Berlin"
				},
				{
					"language": "nl",
					"string": "Wat is het kengetal van Berlijn?",
					"keywords": "kengetal, Berlijn"
				},
				{
					"language": "hi_IN",
					"string": "बर्लिन का क्षेत्र कोड क्या है?",
					"keywords": "बर्लिन, क्षेत्र कोड"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?string \nWHERE {\n\tres:Berlin dbo:areaCode ?string .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "030"
						}
					}]
				}
			}]
		},
		{
			"id": "146",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all actors starring in Last Action Hero.",
					"keywords": "actor, starring, Last Action Hero"
				},
				{
					"language": "de",
					"string": "Gib mir alle Schauspieler, die in Last Action Hero mitgespielt haben.",
					"keywords": "Schauspieler, mitspielen, Last Action Hero"
				},
				{
					"language": "es",
					"string": "Dame todos los actores que hayan actuado en Last Action Hero.",
					"keywords": "actores, Last Action Hero"
				},
				{
					"language": "it",
					"string": "Dammi tutti gli attori che hanno recitato in Last Action Hero.",
					"keywords": "attori, Last Action Hero"
				},
				{
					"language": "fr",
					"string": "Noem alle acteurs uit de film Last Action Hero.",
					"keywords": "acteurs, Last Action Hero"
				},
				{
					"language": "nl",
					"string": "Noem alle acteurs uit de film Last Action Hero.",
					"keywords": "acteur, Last Action Hero"
				},
				{
					"language": "hi_IN",
					"string": "मुझे लास्ट एक्शन हीरो में अभिनीत सभी कलाकारों के नाम बतायें दो।",
					"keywords": "लास्ट एक्शन हीरो, सभी कलाकार, नाम"
				},
				{
					"language": "ro",
					"string": "Dă-mi toți actorii cu roluri principale în Last Action Hero.",
					"keywords": "actor, rol principal, Last Action Hero"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {\n        res:Last_Action_Hero dbo:starring ?uri . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Tom_Noonan"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/F._Murray_Abraham"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Arnold_Schwarzenegger"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Bridgette_Wilson"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Charles_Dance"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Art_Carney"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Austin_O'Brien"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Robert_Prosky"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Anthony_Quinn"
							}
						}
					]
				}
			}]
		},
		{
			"id": "147",
			"answertype": "string",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What are the nicknames of San Francisco?",
					"keywords": "San Francisco, nickname"
				},
				{
					"language": "fa",
					"string": "اسم های مستعار سانفرانسیسکو چیست؟",
					"keywords": "اسم های مستعار، سانفرانسیسکو"
				},
				{
					"language": "de",
					"string": "Was sind die Spitznamen von San Francisco?",
					"keywords": "San Francisco, Spitzname"
				},
				{
					"language": "es",
					"string": "¿Cuál es el apodo de San Francisco?",
					"keywords": "San Francisco, apodo"
				},
				{
					"language": "it",
					"string": "Quali sono i soprannomi di San Francisco?",
					"keywords": "San Francisco, soprannome"
				},
				{
					"language": "fr",
					"string": "Quels sont les surnoms de San Francisco?",
					"keywords": "surnoms, San Francisco"
				},
				{
					"language": "nl",
					"string": "Wat zijn bijnamen van San Francisco?",
					"keywords": "bijnaam, San Francisco"
				},
				{
					"language": "hi_IN",
					"string": "सैन फ्रांसिस्को के उपनाम क्या हैं?",
					"keywords": "सैन फ्रांसिस्को, उपनाम"
				},
				{
					"language": "ro",
					"string": "Care sunt poreclele pentru San Francisco?",
					"keywords": "San Francisco, poreclă"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?string WHERE {  <http://dbpedia.org/resource/San_Francisco> <http://dbpedia.org/property/nickname> ?string . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"string"
					]
				},
				"results": {
					"bindings": [{
						"string": {
							"type": "literal",
							"value": "The City by the Bay; Fog City; San Fran; Frisco ; The City that Knows How ; Baghdad by the Bay ; The Paris of the West"
						}
					}]
				}
			}]
		},
		{
			"id": "148",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What was the first Queen album?",
					"keywords": "first album, Queen"
				},
				{
					"language": "fa",
					"string": "اولین آلبوم کوئین چه بود؟",
					"keywords": "اولین، آلبوم، کوئین"
				},
				{
					"language": "de",
					"string": "Was war das erste Queen-Album?",
					"keywords": "erstes Queen-Album"
				},
				{
					"language": "es",
					"string": "¿Cuál fue el primer álbum de Queen?",
					"keywords": "primer álbum, Queen"
				},
				{
					"language": "it",
					"string": "Qual è stato il primo album dei Queen?",
					"keywords": "primo album, Queen"
				},
				{
					"language": "fr",
					"string": "Quel est le premier album de Queen?",
					"keywords": "premier album, Queen"
				},
				{
					"language": "nl",
					"string": "Wat was het eerste Queen-album?",
					"keywords": "eerste Queen-album"
				},
				{
					"language": "hi_IN",
					"string": "सबसे पहला क्वीन एल्बम क्या था?",
					"keywords": "सबसे पहला, क्वीन एल्बम"
				},
				{
					"language": "ro",
					"string": "Care a fost primul album Queen?",
					"keywords": "primul album, Queen"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri a <http://dbpedia.org/ontology/Album> . ?uri <http://dbpedia.org/ontology/artist> <http://dbpedia.org/resource/Queen_(band)> . ?uri <http://dbpedia.org/ontology/releaseDate> ?d . } ORDER BY ASC(?d) OFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Queen_(Queen_album)"
						}
					}]
				}
			}]
		},
		{
			"id": "149",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": false,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Through which countries does the Yenisei river flow?",
					"keywords": "Yenisei river, flow through, country"
				},
				{
					"language": "de",
					"string": "Durch welche Länder fließt der Yenisei?",
					"keywords": "Yenisei, fließen, Land"
				},
				{
					"language": "es",
					"string": "¿Por qué países fluye el río Yenisei?",
					"keywords": "países, fluye, río Yenisei"
				},
				{
					"language": "it",
					"string": "Attraverso quali stati scorre il fiume Yenisei?",
					"keywords": "fiume Yenisei, scorrere attraverso, stato"
				},
				{
					"language": "fr",
					"string": "Quels sont les pays traversés par l'Ienisseï?",
					"keywords": "Ienisseï, pays traversés"
				},
				{
					"language": "nl",
					"string": "Door welke landen stroomt de Jenisej?",
					"keywords": "Jenisej, land, stroomt door"
				},
				{
					"language": "hi_IN",
					"string": "किस देश के माध्यम से यनेसी नदी का प्रवाह होता है?",
					"keywords": "देश, यनेसी नदी, प्रवाह"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbp: <http://dbpedia.org/property/>\nSELECT DISTINCT ?uri \nWHERE {\n        res:Yenisei_River dbp:country ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Russia"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Mongolia"
							}
						}
					]
				}
			}]
		},
		{
			"id": "150",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which television shows were created by Walt Disney?",
					"keywords": "television show, create, Walt Disney"
				},
				{
					"language": "de",
					"string": "Welche Fernsehserien hat Walt Disney entworfen?",
					"keywords": "Fernsehserie, entwerfen, Walt Disney"
				},
				{
					"language": "es",
					"string": "¿Qué series televisivas ideó Walt Disney?",
					"keywords": "serie televisica, ideó, Walt Disney"
				},
				{
					"language": "it",
					"string": "Quali serie televisive sono state create dalla Walt Disney?",
					"keywords": "serie televisiva, ideata, Walt Disney?"
				},
				{
					"language": "fr",
					"string": "Quelles séries télevisées ont été créées par Walt Disney?",
					"keywords": "séries télevisées, créées, Walt Disney"
				},
				{
					"language": "nl",
					"string": "Welke televisieseries werden bedacht door Walt Disney?",
					"keywords": "televisieserie, bedacht, Walt Disney"
				},
				{
					"language": "hi_IN",
					"string": "वॉल्ट डिज़नी द्वारा किस टेलीविज़न शो का निर्माण किया गया था?",
					"keywords": "वॉल्ट डिज़नी, टेलीविज़न शो, निर्माण"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri\nWHERE {\n\t?uri rdf:type dbo:TelevisionShow .\n        ?uri dbo:creator res:Walt_Disney .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/List_of_Jiminy_Cricket_educational_serials"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Walt_Disney_anthology_television_series"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Mickey_Mouse_Club"
							}
						}
					]
				}
			}]
		},
		{
			"id": "151",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the bridge with the longest span?",
					"keywords": "bridge, longest span"
				},
				{
					"language": "de",
					"string": "Welche Brücke hat die längste Spannweite?",
					"keywords": "Brücke, längste Spannweite"
				},
				{
					"language": "es",
					"string": "¿Qué puente tiene el mayor largo del vano?",
					"keywords": "puente, mayor largo del vano"
				},
				{
					"language": "it",
					"string": "Qual è il ponte con la campata più lunga?",
					"keywords": "ponte, campata più lunga"
				},
				{
					"language": "fr",
					"string": "Quel est le pont le plus large?",
					"keywords": "pont, le plus large"
				},
				{
					"language": "nl",
					"string": "Wat is de brug met de grootste spanwijdte?",
					"keywords": "brug, langste spanwijdte"
				},
				{
					"language": "hi_IN",
					"string": "सबसे लंबा पुल कौन सा है?",
					"keywords": "सबसे लंबा, पुल"
				},
				{
					"language": "ro",
					"string": "Care este podul cu cea mai mare deschidere?",
					"keywords": "pod, cea mai mare deschidere"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri \nWHERE {\n        ?uri rdf:type dbo:Bridge .\n        ?uri dbo:mainspan ?s . \n} \nORDER BY DESC(?s) \nOFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Overseas_Highway"
						}
					}]
				}
			}]
		},
		{
			"id": "152",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What country is Sitecore from?",
					"keywords": "country, Sitecore"
				},
				{
					"language": "fa",
					"string": "سایتکور در کدام کشور تأسیس شد؟",
					"keywords": "سایتکور، کشور، تأسیس"
				},
				{
					"language": "de",
					"string": "Aus welchem Land kommt Sitecore?",
					"keywords": "Sitecore, Land"
				},
				{
					"language": "es",
					"string": "¿De qué país es Sitecore?",
					"keywords": "país origen, Sitecore"
				},
				{
					"language": "it",
					"string": "Di che nazione è Sitecore?",
					"keywords": "nazione, Sitecore"
				},
				{
					"language": "fr",
					"string": "Quel est le pays d'origine de Sitecore?",
					"keywords": "pays, Sitecore"
				},
				{
					"language": "nl",
					"string": "Uit welke land komt Sitecore?",
					"keywords": "land, Sitecore"
				},
				{
					"language": "hi_IN",
					"string": "साइटकोर कौन से देश से है?",
					"keywords": "साइटकोर, देश"
				},
				{
					"language": "ro",
					"string": "Din ce țară este Sitecore?",
					"keywords": "țară, Sitecore"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Sitecore> <http://dbpedia.org/ontology/foundationPlace> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Denmark"
						}
					}]
				}
			}]
		},
		{
			"id": "153",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Whom did Lance Bass marry?",
					"keywords": "wife, Lance Bass"
				},
				{
					"language": "fa",
					"string": "لنس بس با چه کسی ازدواج کرده است؟",
					"keywords": "لنس بس، ازدواج"
				},
				{
					"language": "de",
					"string": "Wen hat Lance Bass geheiratet?",
					"keywords": "Lance Bass, Ehemann"
				},
				{
					"language": "es",
					"string": "¿Con quien se casó Lance Bass?",
					"keywords": "esposa, Lance Bass"
				},
				{
					"language": "it",
					"string": "Chi ha sposato Lance Bass?",
					"keywords": "moglie, Lance Bass"
				},
				{
					"language": "fr",
					"string": "Qui est l'épouse de Lance Bass?",
					"keywords": "épouse, Lance Bass"
				},
				{
					"language": "nl",
					"string": "Wie heeft Lance Baas getrouwd?",
					"keywords": "Lance Baas, getrouwd"
				},
				{
					"language": "hi_IN",
					"string": "लांस बास ने किससे शादी की?",
					"keywords": "लांस बास, शादी"
				},
				{
					"language": "ro",
					"string": "Cu cine s-a căsătorit Lance Bass?",
					"keywords": "soție, Lance Bass"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/spouse> <http://dbpedia.org/resource/Lance_Bass> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Michael_Turchin"
						}
					}]
				}
			}]
		},
		{
			"id": "154",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the capital of Canada?",
					"keywords": "capital, Canada"
				},
				{
					"language": "de",
					"string": "Was ist die Hauptstadt von Kanada?",
					"keywords": "Hauptstadt, Kanada"
				},
				{
					"language": "es",
					"string": "¿Cuál es la capital de Canadá?",
					"keywords": "capital, Canadá"
				},
				{
					"language": "it",
					"string": "Qual è la capitale del Canada?",
					"keywords": "capitale, Canada"
				},
				{
					"language": "fr",
					"string": "Quelle est la capitale du Canada?",
					"keywords": "capitale, Canada"
				},
				{
					"language": "nl",
					"string": "Wat is de hoofdstad van Canada?",
					"keywords": "hoofdstad, Canada"
				},
				{
					"language": "hi_IN",
					"string": "कनाडा की राजधानी क्या है?",
					"keywords": "कनाडा, राजधानी"
				}
			],
			"query": {
				"sparql": "PREFIX dbo:  <http://dbpedia.org/ontology/>\nPREFIX res:  <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n        res:Canada dbo:capital ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Ottawa"
						}
					}]
				}
			}]
		},
		{
			"id": "155",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was Vincent van Gogh inspired by?",
					"keywords": "person, inspiring, Vincent van Gogh"
				},
				{
					"language": "fa",
					"string": "ونسان ون گوگ از چه کسی الهام گرفته است؟",
					"keywords": "ونسان ون گوگ، الهام"
				},
				{
					"language": "de",
					"string": "Wer hat Vincent van Gogh inspiriert?",
					"keywords": "Vincent van Gogh, Inspiration"
				},
				{
					"language": "es",
					"string": "¿Quién inspiro a Vincent van Gogh?",
					"keywords": "persona, inpiracion, Vincent van Gogh"
				},
				{
					"language": "it",
					"string": "Da chi fu inspirato Vincent van Gogh?",
					"keywords": "persona, ispirare, Vincent van Gogh"
				},
				{
					"language": "fr",
					"string": "Qui a inspiré Victor van Gogh?",
					"keywords": "inspiration, Victor van Gogh"
				},
				{
					"language": "nl",
					"string": "Wie heeft van Gogh geinspireerd?",
					"keywords": "van Gogh, geinspireerd"
				},
				{
					"language": "hi_IN",
					"string": "विंसेंट वैन गाग किनसे प्रेरित थे ?",
					"keywords": "विंसेंट वैन गाग, प्रेरित"
				},
				{
					"language": "ro",
					"string": "De către cine a fost Vincent van Gogh inspirat?",
					"keywords": "persoană, inspirație, Vincent van Gogh"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/influenced> <http://dbpedia.org/resource/Vincent_van_Gogh> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Adolphe_Monticelli"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Anton_Mauve"
							}
						}
					]
				}
			}]
		},
		{
			"id": "156",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which city did John F. Kennedy die?",
					"keywords": "city, John F. Kennedy, die"
				},
				{
					"language": "de",
					"string": "In welcher Stadt ist John F. Kennedy gestorben?",
					"keywords": "Stadt, John F. Kennedy, gestorben"
				},
				{
					"language": "es",
					"string": "¿En qué ciudad murió John F. Kennedy?",
					"keywords": "cuidad, John F. Kennedy, murió"
				},
				{
					"language": "it",
					"string": "In quale città morì John F. Kennedy?",
					"keywords": "città, John F. Kennedy, morto"
				},
				{
					"language": "fr",
					"string": "Dans quelle ville est mort John F. Kennedy?",
					"keywords": "ville, John F. Kennedy"
				},
				{
					"language": "nl",
					"string": "In welke stad kwam John F. Kennedy om het leven?",
					"keywords": "stad, John F. Kennedy, gestorven"
				},
				{
					"language": "hi_IN",
					"string": "किस शहर में जॉन एफ कैनेडी का निधन हुआ ?",
					"keywords": "शहर, जॉन एफ कैनेडी, निधन"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri\nWHERE { \n        res:John_F._Kennedy dbo:deathPlace ?uri .\n        ?uri rdf:type dbo:City .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Dallas"
						}
					}]
				}
			}]
		},
		{
			"id": "157",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Was U.S. president Jackson involved in a war?",
					"keywords": "U.S. president, Jackson, war"
				},
				{
					"language": "de",
					"string": "War US-Präsident Jackson in einen Krieg verwickelt?",
					"keywords": "US-Präsident, Jackson, Krieg"
				},
				{
					"language": "es",
					"string": "¿Estuvo el el presidente de los estados unidos Jackson involucrado en una guerra?",
					"keywords": "presidente de los estados unidos, Jackson, guerra"
				},
				{
					"language": "it",
					"string": "Il presidente degli Stati Uniti Jackson è stato coinvolto in una guerra?",
					"keywords": "presidente degli Stati Uniti, Jackson, guerra"
				},
				{
					"language": "fr",
					"string": "Le président Jackson a-t-il participé à une guerre?",
					"keywords": "président Jackson, guerre, participé"
				},
				{
					"language": "nl",
					"string": "Was president Jackson van de Verenigde Staten betrokken bij een oorlog?",
					"keywords": "president van de Verenigde Staten, Jackson, oorlog, betrokken bij"
				},
				{
					"language": "hi_IN",
					"string": "क्या अमेरिका के राष्ट्रपति जैक्सन किसी युद्ध में शामिल थे?",
					"keywords": "अमेरिका, राष्ट्रपति जैक्सन, युद्ध"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE {\n\tres:Andrew_Jackson dbo:battle ?battle .    \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "158",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who wrote the Game of Thrones theme?",
					"keywords": "writer, Game of Thrones"
				},
				{
					"language": "fa",
					"string": "طرح بازی تاج و تخت را چه کسی نوشت؟",
					"keywords": "طرح، بازی تاج و تخت، نوشت"
				},
				{
					"language": "de",
					"string": "Wer hat das Titellied für Games of Thrones geschrieben?",
					"keywords": "Game of Thrones, Titellied, Autor"
				},
				{
					"language": "es",
					"string": "¿Quién escribió el tema del Juego de Tronos?",
					"keywords": "escritor, tema Juego de Tronos"
				},
				{
					"language": "it",
					"string": "Chi ha scritto Game of Thrones?",
					"keywords": "scrittore, Game of Thrones"
				},
				{
					"language": "fr",
					"string": "Qui a écrit le thème de Game of Thrones?",
					"keywords": "compositeur, thème, Game of Thrones"
				},
				{
					"language": "nl",
					"string": "Wie heeft de titelmuziek van Game of Thrones gekomponeerd?",
					"keywords": "titelmuziek, Game of Thrones, componist"
				},
				{
					"language": "hi_IN",
					"string": "गेम ऑफ़ थ्रोन्स थीम किसने लिखी हैं ?",
					"keywords": "गेम ऑफ़ थ्रोन्स, थीम, लिखी"
				},
				{
					"language": "ro",
					"string": "Cine a scris tema din Urzeala Tronurilor?",
					"keywords": "scriitor, Urzeala Tronurilor"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Game_of_Thrones> <http://dbpedia.org/ontology/composer> ?uri. }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Ramin_Djawadi"
						}
					}]
				}
			}]
		},
		{
			"id": "159",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who designed the Brooklyn Bridge?",
					"keywords": "Brooklyn Bridge, design"
				},
				{
					"language": "de",
					"string": "Wer hat die Brooklyn Bridge entworfen?",
					"keywords": "Brooklyn Bridge, entwerfen"
				},
				{
					"language": "es",
					"string": "¿Quién diseñó la Brooklyn Bridge?",
					"keywords": "diseñador, Brooklyn Bridge"
				},
				{
					"language": "it",
					"string": "Chi ha progettato il ponte di Brooklyn?",
					"keywords": "ponte di Brooklyn, progettare"
				},
				{
					"language": "fr",
					"string": "Qui a conçu le pont de Brooklyn?",
					"keywords": "pont de Brooklyn, conçu"
				},
				{
					"language": "nl",
					"string": "Wie ontwierp de Brooklyn Bridge?",
					"keywords": "ontwerp, Brooklyn Bridge"
				},
				{
					"language": "hi_IN",
					"string": "ब्रुकलिन ब्रिज को किसने बनाया है?",
					"keywords": "ब्रुकलिन ब्रिज, बनाया"
				},
				{
					"language": "ro",
					"string": "Cine a proiectat podul din Brooklyn?",
					"keywords": "podul din Brooklyn, proiecta"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/>\nSELECT DISTINCT ?uri \nWHERE {\n        res:Brooklyn_Bridge dbo:architect ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/John_A._Roebling"
						}
					}]
				}
			}]
		},
		{
			"id": "160",
			"answertype": "date",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "When did Boris Becker end his active career?",
					"keywords": "Boris Becker, end career"
				},
				{
					"language": "fa",
					"string": "بوریس بکر کی به فعالیت هنری اش خاتمه داد؟",
					"keywords": "بوریس بکر، فعالیت حرفه ای، خاتمه"
				},
				{
					"language": "de",
					"string": "Wann hat Boris Becker seine aktive Karriere beendet?",
					"keywords": "Boris Becker, aktive Karriere, beendet"
				},
				{
					"language": "es",
					"string": "¿Cuándo termino Boris Becker su carrera como actor?",
					"keywords": "fin carrera, actor Boris Becker"
				},
				{
					"language": "it",
					"string": "Boris Becker quando ha concluso la sua carriera?",
					"keywords": "Boris Becker, fine, carriera"
				},
				{
					"language": "fr",
					"string": "Quelle est la date de terminaison de la carrière de Boris Becker?",
					"keywords": "Date de terminaison, carrière, Boris Becker"
				},
				{
					"language": "nl",
					"string": "Wanneer stopte Boris Becker zijn actieve loopbaan?",
					"keywords": "Boris Becker, actieve loopbaan, einde"
				},
				{
					"language": "hi_IN",
					"string": "बोरिस बेकर ने अपना सक्रिय कैरियर कब समाप्त किया?",
					"keywords": "बोरिस बेकर, सक्रिय कैरियर, समाप्त"
				},
				{
					"language": "ro",
					"string": "Când și-a încheiat Boris Becker cariera activă?",
					"keywords": "încheia cariera, Boris Becker"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?d WHERE { <http://dbpedia.org/resource/Boris_Becker> <http://dbpedia.org/ontology/activeYearsEndDate> ?d . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"date"
					]
				},
				"results": {
					"bindings": [{
						"date": {
							"type": "literal",
							"value": "1999-06-25"
						}
					}]
				}
			}]
		},
		{
			"id": "161",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which types of grapes grow in Oregon?",
					"keywords": "grape types, grow, Oregon"
				},
				{
					"language": "fa",
					"string": "چه انواعی از انگور در اورگن رشد می کند؟",
					"keywords": "انواعی انگور، اورگن، رشد"
				},
				{
					"language": "de",
					"string": "Welche Traubenarten wachsen in Oregon?",
					"keywords": "Traubenarten, wachsen, Oregon"
				},
				{
					"language": "es",
					"string": "¿Que tipo de uva crece en Oregon?",
					"keywords": "tipo uva, crece, Oregon"
				},
				{
					"language": "it",
					"string": "Quali tipi di uva crescono in Oregon?",
					"keywords": "tipi di uva, crescere, Oregon"
				},
				{
					"language": "fr",
					"string": "Quelles genres de raisin poussent en Oregon?",
					"keywords": "genres, raisins, Oregon"
				},
				{
					"language": "nl",
					"string": "Welke soorten druiven groeien in Oregon?",
					"keywords": "soorten druiven, groeien, Oregon"
				},
				{
					"language": "hi_IN",
					"string": "ओरेगन में किस प्रकार के अंगूर उगते हैं?",
					"keywords": "ओरेगन, प्रकार, अंगूर, उगते"
				},
				{
					"language": "ro",
					"string": "Ce soiuri de struguri cresc în Oregon?",
					"keywords": "soiuri de struguri, cresc, Oregon"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Oregon_wine> <http://dbpedia.org/ontology/growingGrape> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Chenin_blanc"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Pinot_Meunier"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Muscat_Blanc_à_Petits_Grains"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Riesling"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Carmine"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Grenache"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Zinfandel"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Léon_Millot"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Dolcetto"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Malbec"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Cabernet_Sauvignon"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Pinot_gris"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Melon"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Merlot"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Gamay"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Sauvignon_blanc"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Muscat_(grape)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Chardonnay"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Huxelrebe"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Sangiovese"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Sémillon"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Gewürztraminer"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Müller-Thurgau"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Pinot_blanc"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Pinot_noir"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Black_Muscat"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Baco_noir"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Marechal_Foch"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Petit_Verdot"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Cabernet_Franc"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Viognier"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Scheurebe"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Syrah"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Barbera"
							}
						}
					]
				}
			}]
		},
		{
			"id": "162",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How tall is Michael Jordan?",
					"keywords": "tall, Michael Jordan"
				},
				{
					"language": "de",
					"string": "Wie groß ist Michael Jordan?",
					"keywords": "groß, Michael Jordan"
				},
				{
					"language": "es",
					"string": "¿Qué altura tiene Michael Jordan?",
					"keywords": "altura, Michael Jordan"
				},
				{
					"language": "it",
					"string": "Quanto è alto Michael Jordan?",
					"keywords": "altezza, Michael Jordan"
				},
				{
					"language": "fr",
					"string": "Quelle est la taille de Michael Jordan?",
					"keywords": "taille, Michael Jordan"
				},
				{
					"language": "nl",
					"string": "Hoe lang is Michael Jordan?",
					"keywords": "lang, Michael Jordan"
				},
				{
					"language": "hi_IN",
					"string": "माइकल जॉर्डन कितना लंबा है?",
					"keywords": "माइकल जॉर्डन, लंबा"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?num \nWHERE {\n        res:Michael_Jordan dbo:height ?num .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "1.9812"
						}
					}]
				}
			}]
		},
		{
			"id": "163",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "To which party does the mayor of Paris belong?",
					"keywords": "party, mayor of Paris, belong"
				},
				{
					"language": "fa",
					"string": "شهردار پاریس عضو چه حزبی است؟",
					"keywords": "شهردار پاریس، حزب"
				},
				{
					"language": "de",
					"string": "Welcher Partei gehört die Bürgermeisterin von Paris an?",
					"keywords": "Paris, Bürgermeisterin, Partei"
				},
				{
					"language": "es",
					"string": "¿A qué partido politico pertenece el alcalde de París?",
					"keywords": "partido politico, alcalde de París"
				},
				{
					"language": "it",
					"string": "A quale partito polito appartiene il sindaco di Parigi?",
					"keywords": "partito politico, sindaco di Parigi, appartiene"
				},
				{
					"language": "fr",
					"string": "Quel est le parti politique du maire de Paris?",
					"keywords": "parti politique, maire, Paris"
				},
				{
					"language": "nl",
					"string": "Tot welke partij behoort de burgemeester van Parijs?",
					"keywords": "partij, burgemeester, Parijs"
				},
				{
					"language": "hi_IN",
					"string": "पेरिस के महापौर किस पार्टी के हैं?",
					"keywords": "पेरिस, महापौर, पार्टी"
				},
				{
					"language": "ro",
					"string": "Cărui partid aparține primarul Parisului?",
					"keywords": "partid, primarul Parisului, aparține"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Paris> <http://dbpedia.org/ontology/mayor> ?x . ?x <http://dbpedia.org/ontology/party> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Socialist_Party_(France)"
						}
					}]
				}
			}]
		},
		{
			"id": "164",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who wrote the book The Pillars of the Earth?",
					"keywords": "wrote, book, The pillars of the Earth"
				},
				{
					"language": "de",
					"string": "Wer schrieb das Buch Die Säulen der Erde?",
					"keywords": "schreiben, Buch, Die Säulen der Erde"
				},
				{
					"language": "es",
					"string": "¿Quen escribió el libro Los pilares de la Tierra?",
					"keywords": "escritor, libro, Pilares de la Tierra"
				},
				{
					"language": "it",
					"string": "Chi ha scritto il libro I pilastri della Terra?",
					"keywords": "scritto, libro, I pilastri della Terra"
				},
				{
					"language": "fr",
					"string": "Qui a écrit le livre Les Piliers de la Terre?",
					"keywords": "Les Piliers de la Terre, écrivain"
				},
				{
					"language": "nl",
					"string": "Wie schreef het boek De Pilaren van de Aarde?",
					"keywords": "auteur, De Pilaren van de Aarde"
				},
				{
					"language": "hi_IN",
					"string": "किसने द पिल्लर्स ऑफ द अर्थ किताब को लिखा हैं ?",
					"keywords": "द पिल्लर्स ऑफ द अर्थ, किताब, लिखा"
				},
				{
					"language": "ro",
					"string": "Cine e scris cartea Stâlpii Pământului?",
					"keywords": "scrie, carte, Stâlpii Pământului"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n        res:The_Pillars_of_the_Earth dbo:author ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Ken_Follett"
						}
					}]
				}
			}]
		},
		{
			"id": "165",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was the 16th president of the United States?",
					"keywords": "United States, 16th president"
				},
				{
					"language": "de",
					"string": "Wer war der 16. Präsident der Vereinigten Staaten?",
					"keywords": "Vereinigte Staaten, 16. Präsident"
				},
				{
					"language": "es",
					"string": "¿Quién fue el 16th presidente de los Estados Unidos?",
					"keywords": "estados unidos, primer presidente"
				},
				{
					"language": "it",
					"string": "Chi è stato il sedicesimo presidente degli Stati Uniti?",
					"keywords": "Stati Uniti, sedicesimo presidente"
				},
				{
					"language": "fr",
					"string": "Qui fut le premier président des États-Unis?",
					"keywords": "Etats-Unis, premier président"
				},
				{
					"language": "nl",
					"string": "Wie was de 16de president van de Verenigde Staten?",
					"keywords": "Verenigde Staten, 16de president"
				},
				{
					"language": "hi_IN",
					"string": "संयुक्त राज्य के 16 वें राष्ट्रपति कौन थे?",
					"keywords": "संयुक्त राज्य, 16 वें राष्ट्रपति"
				},
				{
					"language": "ro",
					"string": "Cine a fost primul președinte al Statelor Unite?",
					"keywords": "Statele Unite, primul președinte"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri\nWHERE {\n         ?uri dbo:office 'President of the United States' .\n         ?uri dbo:orderInOffice '16th' .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Abraham_Lincoln"
						}
					}]
				}
			}]
		},
		{
			"id": "166",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How high is the Mount Everest?",
					"keywords": "Mount Everest, high"
				},
				{
					"language": "de",
					"string": "Wie hoch ist der Mount Everest?",
					"keywords": "Mount Everest, hoch"
				},
				{
					"language": "es",
					"string": "¿Qué alto es el Monte Everest?",
					"keywords": "Monte Everest, altura"
				},
				{
					"language": "it",
					"string": "Quanto è alto il Monte Everest?",
					"keywords": "Monte Everest, altezza"
				},
				{
					"language": "fr",
					"string": "Quelle est l'altitude du Mont Everest?",
					"keywords": "altitude, Mont Everest"
				},
				{
					"language": "nl",
					"string": "Hoe hoog is de Mount Everest?",
					"keywords": "hoogte, Mount Everest"
				},
				{
					"language": "hi_IN",
					"string": "माउंट एवरेस्ट कितना ऊँचा है?",
					"keywords": "माउंट एवरेस्ट, ऊँचा"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?num \nWHERE {\n\tres:Mount_Everest dbo:elevation ?num.\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "8848.0"
						}
					}]
				}
			}]
		},
		{
			"id": "167",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was the doctoral supervisor of Albert Einstein?",
					"keywords": "doctoral supervisor, Albert Einstein"
				},
				{
					"language": "fa",
					"string": "چه کسی استاد راهنمای دکترای آلبرت اینشتین بود؟",
					"keywords": "استاد راهنما، دکترا، آلبرت اینشتین"
				},
				{
					"language": "de",
					"string": "Wer war der Doktorvater von Albert Einstein?",
					"keywords": "Doktorvater, Albert Einstein"
				},
				{
					"language": "es",
					"string": "¿Quien es el supervisor de doctorado de Albert Einstein?",
					"keywords": "supervisor doctoral, Albert Einstein"
				},
				{
					"language": "it",
					"string": "Chi era il supervisore della tesi di dottorato di Albert Einstein?",
					"keywords": "supervisore della tesi di dottorato, Albert Einstein "
				},
				{
					"language": "fr",
					"string": "Qui était le directeur de thèse d'Albert Einstein",
					"keywords": "directeur, these, Albert Einstein"
				},
				{
					"language": "nl",
					"string": "Wie was de promotor van Albert Einsteins doctoraatsonderzoek?",
					"keywords": "Albert Einstein, promotor"
				},
				{
					"language": "hi_IN",
					"string": "अल्बर्ट आइंस्टीन के डॉक्टरेट के पर्यवेक्षक कौन थे?",
					"keywords": "अल्बर्ट आइंस्टीन, डॉक्टरेट, पर्यवेक्षक"
				},
				{
					"language": "ro",
					"string": "Cine a fost conducătorul de doctorat al lui Albert Einstein?",
					"keywords": "conducător de doctorat, Albert Einstein"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Albert_Einstein> <http://dbpedia.org/ontology/doctoralAdvisor> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Alfred_Kleiner"
						}
					}]
				}
			}]
		},
		{
			"id": "168",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which city does Sylvester Stallone live?",
					"keywords": "city, live, Sylvester Stallone"
				},
				{
					"language": "fa",
					"string": "سیلوستر استالونه در کدام شهر زندگی می کند؟",
					"keywords": "سیلوستر استالونه، شهر، زندگی"
				},
				{
					"language": "de",
					"string": "In welcher Stadt wohnt Sylvester Stallone?",
					"keywords": "Sylvester Stallone, wohnen, Stadt"
				},
				{
					"language": "es",
					"string": "¿En qué ciudad vive Sylvester Stallone?",
					"keywords": "ciudad, vive, Sylvester Stallone"
				},
				{
					"language": "it",
					"string": "In quale città vive Sylvester Stallone?",
					"keywords": "città, vive, Sylvester Stallone"
				},
				{
					"language": "fr",
					"string": "Dans quelle ville vit Sylvester Stallone?",
					"keywords": "ville, Sylvester Stallone"
				},
				{
					"language": "nl",
					"string": "In welke stad woont Sylvester Stallone?",
					"keywords": "stad, wonen, Sylvester Stallone"
				},
				{
					"language": "hi_IN",
					"string": "सिल्वेस्टर स्टेलोन किस शहर में रहते हैं?",
					"keywords": "सिल्वेस्टर स्टेलोन, शहर, रहते"
				},
				{
					"language": "ro",
					"string": "În ce oraș trăiește Sylvester Stallone?",
					"keywords": "oraș, trăiește, Sylvester Stallone"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri a <http://dbpedia.org/ontology/City> . <http://dbpedia.org/resource/Sylvester_Stallone> <http://dbpedia.org/ontology/residence> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Beverly_Hills,_California"
						}
					}]
				}
			}]
		},
		{
			"id": "169",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the currency of the Czech Republic?",
					"keywords": "Czech republic, currency"
				},
				{
					"language": "de",
					"string": "Was ist die Währung der Tschechischen Republik?",
					"keywords": "Tschechischen Republik, Währung"
				},
				{
					"language": "es",
					"string": "¿Cuál es la moneda de la república checa?",
					"keywords": "moneda, república checa"
				},
				{
					"language": "it",
					"string": "Qual è la valuta della Repubblica Ceca?",
					"keywords": "valuta, Repubblica Ceca"
				},
				{
					"language": "fr",
					"string": "Quel est la devise de la Tchéquie?",
					"keywords": "devise, Tchéquie"
				},
				{
					"language": "nl",
					"string": "Wat is de munteenheid van Tsjechië?",
					"keywords": "Tsjechië, munteenheid"
				},
				{
					"language": "hi_IN",
					"string": "चेक गणराज्य की मुद्रा क्या है?",
					"keywords": "चेक गणराज्य, मुद्रा"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {\n\tres:Czech_Republic dbo:currency ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Czech_koruna"
						}
					}]
				}
			}]
		},
		{
			"id": "170",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Did Socrates influence Aristotle?",
					"keywords": "Socrates, influence, Aristotle"
				},
				{
					"language": "de",
					"string": "Hat Sokrates Aristoteles beeinflusst?",
					"keywords": "Sokrates, beeinflussen, Aristoteles"
				},
				{
					"language": "es",
					"string": "¿Tuvo Sócrates influencia sobre Aristóteles?",
					"keywords": "Sócrates, influencia, Aristóteles"
				},
				{
					"language": "it",
					"string": "Socrate ha influenzato Aristotele?",
					"keywords": "Socrate, influenzare, Aristotele"
				},
				{
					"language": "fr",
					"string": "Socrate a-t-il influencé Aristote?",
					"keywords": "Socrate, influencer, Aristote"
				},
				{
					"language": "nl",
					"string": "Beïnvloedde Socrates Aristoteles?",
					"keywords": "beïnvloeden, Socrates, Aristoteles"
				},
				{
					"language": "hi_IN",
					"string": "क्या एरिस्टोटल सोक्रेटस से प्रभावित थे?",
					"keywords": "एरिस्टोटल, सोक्रेटस, प्रभावित"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE {\n\tres:Aristotle dbo:influencedBy res:Socrates .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "171",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": false,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the time zone of Salt Lake City?",
					"keywords": "Salt Lake City, time zone"
				},
				{
					"language": "de",
					"string": "In welcher Zeitzone liegt Salt Lake City?",
					"keywords": "Salt Lake City, Zeitzone"
				},
				{
					"language": "es",
					"string": "¿En qué zona horaria se encuentra Salt Lake City?",
					"keywords": "Salt Lake City, zona horaria"
				},
				{
					"language": "it",
					"string": "In quale fuso orario si trova Salt Lake City?",
					"keywords": "Salt Lake City, fuso orario"
				},
				{
					"language": "fr",
					"string": "Quel est le fuseau horaire de Salt Lake City?",
					"keywords": "fuseau horaire, Salt Lake City"
				},
				{
					"language": "nl",
					"string": "In welke tijdzone ligt Salt Lake City?",
					"keywords": "Salt Lake City, tijdzone"
				},
				{
					"language": "hi_IN",
					"string": "साल्ट लेक सिटी का समय क्षेत्र क्या है?",
					"keywords": "साल्ट लेक सिटी, समय क्षेत्र"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbp: <http://dbpedia.org/property/>\nSELECT DISTINCT ?uri \nWHERE {\n\tres:Salt_Lake_City dbp:timezone ?uri . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Mountain_Time_Zone"
						}
					}]
				}
			}]
		},
		{
			"id": "172",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the son of Sonny and Cher?",
					"keywords": "son, Sonny and Cher"
				},
				{
					"language": "fa",
					"string": "پسر سونی و چر چه کسی بود؟",
					"keywords": "پسر، سونی و چر"
				},
				{
					"language": "de",
					"string": "Wer ist der Sohn von Sonny und Cher?",
					"keywords": "Sonny, Cher, Sohn"
				},
				{
					"language": "es",
					"string": "¿Quién es el hijo de Sonny y Cher?",
					"keywords": "hijo, Sonny y Cher?"
				},
				{
					"language": "it",
					"string": "Chi è il figlio di Sonny e Cher",
					"keywords": "figlio, Sonny e Cher"
				},
				{
					"language": "fr",
					"string": "Qui est le fils de Sonny et Cher?",
					"keywords": "fils, Sonny, Cher"
				},
				{
					"language": "nl",
					"string": "Wie is de zoon van Sonny en Cher?",
					"keywords": "zoon, Sonny, Cher"
				},
				{
					"language": "hi_IN",
					"string": "सोनि और चेर का बेटा कौन है?",
					"keywords": "सोन, चेर, बेटा"
				},
				{
					"language": "ro",
					"string": "Cine este fiul lui Sonny și Cher?",
					"keywords": "fiu, Sonny și Cher"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/parent> <http://dbpedia.org/resource/Cher> . ?uri <http://dbpedia.org/ontology/parent> <http://dbpedia.org/resource/Sonny_Bono> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Chaz_Bono"
						}
					}]
				}
			}]
		},
		{
			"id": "173",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which city are the headquarters of the United Nations?",
					"keywords": "city, headquarters of the United Nations"
				},
				{
					"language": "fa",
					"string": "مقر سازمان ملل در کدام شهر قرار دارد؟",
					"keywords": "مقر، سازمان ملل، شهر"
				},
				{
					"language": "de",
					"string": "In welcher Stadt ist das Hauptquartier der Vereinten Nationen?",
					"keywords": "Vereinte Nationen, Hauptquartier, Stadt"
				},
				{
					"language": "es",
					"string": "¿En qué ciudad se encuentra la sede de las Naciones Unidas?",
					"keywords": "ciudad, la sede de las Naciones Unidas"
				},
				{
					"language": "it",
					"string": "In quale città si trova il quartier generale delle Nazioni Unite?",
					"keywords": "città, quartier generale delle Nazioni Unite"
				},
				{
					"language": "fr",
					"string": "Dans quelle ville se trouvé les quartiers généraux des Nations Unies?",
					"keywords": "ville, quartiers généraux, Nations Unies?"
				},
				{
					"language": "nl",
					"string": "In welke stad bevindt zich het hoofdkwartier van de Verenigde Naties?",
					"keywords": "stad, hoofdkwartier, Verenigde Naties"
				},
				{
					"language": "hi_IN",
					"string": "संयुक्त राष्ट के मुख्यालय कौन सा शहर में हैं?",
					"keywords": "संयुक्त राष्ट, मुख्यालय, शहर"
				},
				{
					"language": "ro",
					"string": "În ce oraș se află cartierul general al Națiunilor Unite?",
					"keywords": "oraș, cartierul general al Națiunilor Unite"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Headquarters_of_the_United_Nations> <http://dbpedia.org/ontology/location> ?uri . ?uri a <http://dbpedia.org/ontology/City> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/New_York_City"
						}
					}]
				}
			}]
		},
		{
			"id": "174",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the founder of Penguin Books?",
					"keywords": "founder, Penguin Books"
				},
				{
					"language": "de",
					"string": "Wer hat Penguin Books gegründet?",
					"keywords": "gegründet, Penguin Books"
				},
				{
					"language": "es",
					"string": "¿Quien es el fundador de Penguin Books?",
					"keywords": "fundador, Penguin Books"
				},
				{
					"language": "it",
					"string": "Chi è il fondatore di Penguin Books?",
					"keywords": "fondatore, Penguin Books"
				},
				{
					"language": "fr",
					"string": "Qui est le fondateur de Penguin  Books?",
					"keywords": "fondateur, Penguin Books"
				},
				{
					"language": "nl",
					"string": "Wie is de oprichter van Penguin Books?",
					"keywords": "oprichter, Penguin Books"
				},
				{
					"language": "hi_IN",
					"string": "पेंगुइन बुक्स के संस्थापक कौन हैं?",
					"keywords": "पेंगुइन बुक्स, संस्थापक"
				},
				{
					"language": "ro",
					"string": "Cine este fondatorul Penguin Books?",
					"keywords": "fondator, Penguin Books"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \nSELECT DISTINCT ?uri\nWHERE { \n        res:Penguin_Books dbo:founder ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Allen_Lane"
						}
					}]
				}
			}]
		},
		{
			"id": "175",
			"answertype": "date",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "When was Jack Wolfskin founded?",
					"keywords": "Jack Wolfskin, founded"
				},
				{
					"language": "fa",
					"string": "جک ولفیش کی تأسیس شد؟",
					"keywords": "جک ولفیش، تأسیس"
				},
				{
					"language": "de",
					"string": "Wann wurde Jack Wolfskin gegründet?",
					"keywords": "Jack Wolfskin, gründen"
				},
				{
					"language": "es",
					"string": "¿Cúando se fundó Jack Wolfskin?",
					"keywords": "Jack Wolfskin, fundada"
				},
				{
					"language": "it",
					"string": "Quando è stata fondata Jack Wolfskin?",
					"keywords": "Jack Wolfskin, fondata"
				},
				{
					"language": "fr",
					"string": "Quand a été fondé Jack Wolfskin?",
					"keywords": "fondé, Jack Wolfskin"
				},
				{
					"language": "nl",
					"string": "Wanneer werd Jack Wolfskin opgericht?",
					"keywords": "Jack Wolfskin, opgericht"
				},
				{
					"language": "hi_IN",
					"string": "जैक वुल्फस्किन की स्थापना कब हुई थी?",
					"keywords": "जैक वुल्फस्किन, स्थापना"
				},
				{
					"language": "ro",
					"string": "Când a fost fondat Jack Wolfskin?",
					"keywords": "Jack Wolfskin, fondat"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?year WHERE {  <http://dbpedia.org/resource/Jack_Wolfskin> <http://dbpedia.org/ontology/foundingYear> ?year . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"date"
					]
				},
				"results": {
					"bindings": [{
						"date": {
							"type": "literal",
							"value": "1981"
						}
					}]
				}
			}]
		},
		{
			"id": "176",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the mayor of Rotterdam?",
					"keywords": "mayor, Rotterdam"
				},
				{
					"language": "de",
					"string": "Wer ist der Bürgermeister von Rotterdam?",
					"keywords": "Bürgermeister, Rotterdam"
				},
				{
					"language": "es",
					"string": "¿Quién es el alcalde de Rotterdam?",
					"keywords": "alcalde de Rotterdam"
				},
				{
					"language": "it",
					"string": "Chi è il sindaco di Rotterdam?",
					"keywords": "sindaco, Rotterdam"
				},
				{
					"language": "fr",
					"string": "Qui est le maire de Rotterdam?",
					"keywords": "maire, Rotterdam"
				},
				{
					"language": "nl",
					"string": "Wie is de burgemeester van Rotterdam?",
					"keywords": "burgemeester, Rotterdam"
				},
				{
					"language": "hi_IN",
					"string": "रॉटरडैम के महपौर कौन हैं?",
					"keywords": "रॉटरडैम, महपौर"
				},
				{
					"language": "ro",
					"string": "Cine este primar în Rotterdam?",
					"keywords": "primar, Rotterdam"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {\n        res:Rotterdam dbo:leaderName ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Ahmed_Aboutaleb"
						}
					}]
				}
			}]
		},
		{
			"id": "177",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all Swedish oceanographers.",
					"keywords": "Swedish, oceanographer"
				},
				{
					"language": "de",
					"string": "Gib mir alle Schwedischen Ozeanographen.",
					"keywords": "Schwedisch, Ozeanographen"
				},
				{
					"language": "es",
					"string": "Dame todos los oceanógrafos suecos.",
					"keywords": "oceanógrafos suecos"
				},
				{
					"language": "it",
					"string": "Dammi tutti gli oceanografi svedesi.",
					"keywords": "svedesi, oceanografi"
				},
				{
					"language": "fr",
					"string": "Donne-moi tous les océanographes suédois.",
					"keywords": "Océanographes, suédois"
				},
				{
					"language": "nl",
					"string": "Toon alle Zweedse oceanograafen.",
					"keywords": "Zweedse, oceanograafen"
				},
				{
					"language": "hi_IN",
					"string": "मुझे सभी स्वीडिश महासागरीय वैज्ञानिकों की सूचि बतायें।",
					"keywords": "स्वीडिश, महासागरीय वैज्ञानिक"
				},
				{
					"language": "ro",
					"string": "Dă-mi toți oceanografii suedezi.",
					"keywords": "oceanograf, suedez"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {\n        ?uri dbo:field res:Oceanography . \n        ?uri dbo:birthPlace res:Sweden .        \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Vagn_Walfrid_Ekman"
						}
					}]
				}
			}]
		},
		{
			"id": "178",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Show me Hemingway's autobiography.",
					"keywords": "autobiography, Hemingway"
				},
				{
					"language": "fa",
					"string": "خود زندگی نامه همینگوی را بده.",
					"keywords": "خود زندگی نامه، همینگوی"
				},
				{
					"language": "de",
					"string": "Zeig mir Hemmingways Autobiographie.",
					"keywords": "Hemmingway, Autobiographie"
				},
				{
					"language": "es",
					"string": "Muéstrame la autobiografía Hemingway.",
					"keywords": "autobiografía Hemingway"
				},
				{
					"language": "it",
					"string": "Mostrami l'autobiografia di Hemingway.",
					"keywords": "autobiorafia, Hemingway"
				},
				{
					"language": "fr",
					"string": "Montre l'autobiographie de Hemingway.",
					"keywords": "autobiographie, Hemingway"
				},
				{
					"language": "nl",
					"string": "Toen de autobiografie van Hemmingway.",
					"keywords": "Hemmingway, autobiografie"
				},
				{
					"language": "hi_IN",
					"string": "हेमिंग्वे की आत्मकथा मुझे दिखायें।",
					"keywords": "हेमिंग्वे, आत्मकथा"
				},
				{
					"language": "ro",
					"string": "Arată-mi autobiografia lui Hemingway",
					"keywords": "autobiografie, Hemingway"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/author> <http://dbpedia.org/resource/Ernest_Hemingway> . ?uri <http://dbpedia.org/ontology/literaryGenre> <http://dbpedia.org/resource/Autobiography> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/A_Moveable_Feast"
						}
					}]
				}
			}]
		},
		{
			"id": "179",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who are the parents of the wife of Juan Carlos I?",
					"keywords": "Juan Carlos I, wife, parents"
				},
				{
					"language": "de",
					"string": "Wer sind die Eltern der Frau von Juan Carlos I?",
					"keywords": "Juan Carlos I, Frau, Eltern"
				},
				{
					"language": "es",
					"string": "¿Quién son los padres de la esposa de Juan Carlos I?",
					"keywords": "padres, esposa, Juan Carlos I"
				},
				{
					"language": "it",
					"string": "Chi sono i genitori della moglie di Juan Carlos I?",
					"keywords": "Juan Carlos I, moglie, genitori"
				},
				{
					"language": "fr",
					"string": "Qui sont les parents de l'épouse de Juan Carlos Ier?",
					"keywords": "parents, épouse, Juan Carlos Ier"
				},
				{
					"language": "nl",
					"string": "Hoe heten de ouders van de vrouw van Juan Carlos I?",
					"keywords": "ouders, vrouw van, Juan Carlos I"
				},
				{
					"language": "hi_IN",
					"string": "जुआन कार्लोस-१ की पत्नी के माता-पिता कौन हैं?",
					"keywords": "जुआन कार्लोस-१, पत्नी, माता-पिता"
				},
				{
					"language": "ro",
					"string": "Cine sunt părinții soției lui Juan Carlos I?",
					"keywords": "Juan Carlos I, soție, părinți"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nSELECT DISTINCT ?uri \nWHERE { \n        res:Juan_Carlos_I_of_Spain dbo:spouse ?x . \n        ?x dbo:parent ?uri . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Frederica_of_Hanover"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Paul_of_Greece"
							}
						}
					]
				}
			}]
		},
		{
			"id": "180",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Did Tesla win a nobel prize in physics?",
					"keywords": "Tesla, nobel prize, physics"
				},
				{
					"language": "de",
					"string": "Hat Tesla den Nobelpreis für Physik gewonnen?",
					"keywords": "Tesla, Nobelpreis, Physik"
				},
				{
					"language": "es",
					"string": "¿Obtuvo Tesla el premio nobel de física?",
					"keywords": "Tesla, premio nobel, física"
				},
				{
					"language": "it",
					"string": "Tesla ha vinto un premio Nobel per la fisica?",
					"keywords": "Tesla, premio nobel, fisica"
				},
				{
					"language": "fr",
					"string": "Tesla a-t-il recu le prix Nobel?",
					"keywords": "Tesla, recu, prix Nobel"
				},
				{
					"language": "nl",
					"string": "Heeft Tesla ooit de Nobelprijs voor de Natuurkunde gewonnen?",
					"keywords": "Nobelprijs voor de Natuurkunde, Tesla"
				},
				{
					"language": "hi_IN",
					"string": "क्या टेस्ला ने भौतिक विज्ञान में नोबेल पुरस्कार जीता?",
					"keywords": "टेस्ला, भौतिक विज्ञान, नोबेल पुरस्कार"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE {\n        res:Nikola_Tesla dbo:award res:Nobel_Prize_in_Physics .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": false
			}]
		},
		{
			"id": "181",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the tallest basketball player?",
					"keywords": "tallest, basketball player"
				},
				{
					"language": "fa",
					"string": "چه کسی بلندترین بازیکن بسکتبال است؟",
					"keywords": "بلندترین، بازیکن بسکتبال"
				},
				{
					"language": "de",
					"string": "Wer ist der größte Basketballspieler?",
					"keywords": "größter, Basketballspieler"
				},
				{
					"language": "es",
					"string": "Quien es el jugador de baloncesto mas alto?",
					"keywords": "jugador baloncesto, mas alto"
				},
				{
					"language": "it",
					"string": "Chi è il giocatore di pallacanestro più alto?",
					"keywords": "giocatore di pallacanestro, più alto"
				},
				{
					"language": "fr",
					"string": "Quel est le plus grand joueur de basket?",
					"keywords": "plus grand, joueur, basket"
				},
				{
					"language": "nl",
					"string": "Wie is de grootste basketballer?",
					"keywords": "grootste, basketballer"
				},
				{
					"language": "hi_IN",
					"string": "सबसे लंबा बास्केटबॉल खिलाड़ी कौन है?",
					"keywords": "सबसे लंबा, बास्केटबॉल, खिलाड़ीै"
				},
				{
					"language": "ro",
					"string": "Cine este cel mai înalt jucător de basket?",
					"keywords": "cel mai înalt, jucător de basket"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/BasketballPlayer> .  ?uri <http://dbpedia.org/ontology/height> ?num . } ORDER BY DESC(?num) OFFSET 0 LIMIT 1 "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Thijs_Vermeulen"
						}
					}]
				}
			}]
		},
		{
			"id": "182",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which city has the least inhabitants?",
					"keywords": "city, the least inhabitants"
				},
				{
					"language": "fa",
					"string": "چه شهری کمترین سکنه را دارد؟",
					"keywords": "شهری، کمترین سکنه"
				},
				{
					"language": "de",
					"string": "Welche Stadt hat die wenigsten Einwohner?",
					"keywords": "Stadt, wenigsten Einwohner"
				},
				{
					"language": "es",
					"string": "¿Que ciudad tiene la menor población?",
					"keywords": "ciudad, menor población"
				},
				{
					"language": "it",
					"string": "Quale città ha il minor numero di abitanti?",
					"keywords": "città, minor numero di abitanti"
				},
				{
					"language": "fr",
					"string": "Quelle ville a le plus petit nombre d'habitants?",
					"keywords": "ville, plus petit nombre d'habitants"
				},
				{
					"language": "nl",
					"string": "Welke stad heeft de minste inwoners?",
					"keywords": "stad, minste inwoners"
				},
				{
					"language": "hi_IN",
					"string": "सबसे कम निवासियों वाला शहर कौन सा है?",
					"keywords": "सबसे कम, निवासियों, शहर"
				},
				{
					"language": "ro",
					"string": "Care oraș are cei mai puțini locuitori?",
					"keywords": "oraș, cei mai puțini locuitori"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/City> .  ?uri <http://dbpedia.org/ontology/populationTotal> ?pop . } ORDER BY ASC(?pop) OFFSET 0 LIMIT 1 "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Greenhorn,_Oregon"
						}
					}]
				}
			}]
		},
		{
			"id": "183",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is proinsulin a protein?",
					"keywords": "proinsulin, protein"
				},
				{
					"language": "de",
					"string": "Ist Proinsulin ein Protein?",
					"keywords": "Proinsulin, Protein"
				},
				{
					"language": "es",
					"string": "¿La proinsulina es una proteina?",
					"keywords": "proinsulina, protein"
				},
				{
					"language": "it",
					"string": "a proinsulina è una proteina?",
					"keywords": "proinsulina, proteina"
				},
				{
					"language": "fr",
					"string": "La pro-insuline est-elle une protéine?",
					"keywords": "pro-insuline, protéine"
				},
				{
					"language": "nl",
					"string": "Is proinsuline een proteïne?",
					"keywords": "proinsuline, proteïne"
				},
				{
					"language": "hi_IN",
					"string": "क्या प्रोइन्सुलिन एक प्रोटीन है?",
					"keywords": "प्रोइन्सुलिन, प्रोटीन"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nASK \nWHERE {\n\tres:Proinsulin rdf:type dbo:Protein .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "184",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who were the parents of Queen Victoria?",
					"keywords": "parents, Queen Victoria"
				},
				{
					"language": "de",
					"string": "Wer waren die Eltern von Königin Viktoria?",
					"keywords": "Eltern, Königin Viktoria"
				},
				{
					"language": "es",
					"string": "¿Quiénes fueron los padres de la reina Victoria?",
					"keywords": "padres, reina Victoria?"
				},
				{
					"language": "it",
					"string": "Chi sono i genitori della regina Vittoria?",
					"keywords": "genitori, regina Vittoria"
				},
				{
					"language": "fr",
					"string": "Qui étaient les parents de la reine Victoria?",
					"keywords": "parents, reine Victoria"
				},
				{
					"language": "nl",
					"string": "Wie waren de ouders van Koningin Victoria?",
					"keywords": "ouders, Koningin Victoria"
				},
				{
					"language": "hi_IN",
					"string": "महारानी विक्टोरिया के माता-पिता कौन थे?",
					"keywords": "महारानी विक्टोरियाे, माता-पिता"
				},
				{
					"language": "ro",
					"string": "Cine au fost părinții reginei Victoria?",
					"keywords": "părinți, regina Victoria"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {\n         res:Queen_Victoria dbo:parent ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Princess_Victoria_of_Saxe-Coburg-Saalfeld"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Prince_Edward,_Duke_of_Kent_and_Strathearn"
							}
						}
					]
				}
			}]
		},
		{
			"id": "185",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Did Che Guevara have children?",
					"keywords": "children, Che Guevara"
				},
				{
					"language": "de",
					"string": "Hatte Che Guevara Kinder?",
					"keywords": "Kinder, Che Guevara"
				},
				{
					"language": "es",
					"string": "¿Tuvo hijos el Che Guevara?",
					"keywords": "hijos, Che Guevara"
				},
				{
					"language": "it",
					"string": "Che Guevara aveva dei figli?",
					"keywords": "figli, Che Guevara"
				},
				{
					"language": "fr",
					"string": "Est-ce que Che Guevara a eu des enfants?",
					"keywords": "enfants, Che Guevara"
				},
				{
					"language": "nl",
					"string": "Had Che Guevara kinderen?",
					"keywords": "kinderen, Che Guevara"
				},
				{
					"language": "hi_IN",
					"string": "क्या चे ग्वेरा के बच्चे हैं?",
					"keywords": "चे ग्वेरा, बच्चे"
				},
				{
					"language": "ro",
					"string": "Che Guevara a avut copii?",
					"keywords": "copii, Che Guevara"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK\nWHERE { \n        res:Che_Guevara dbo:child ?uri . \n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "186",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is Lake Baikal bigger than the Great Bear Lake?",
					"keywords": "Lake Baikal, bigger than, Great Bear Lake"
				},
				{
					"language": "de",
					"string": "Ist der Baikalsee größer als der Große Bärensee?",
					"keywords": "Baikalsee, größer als, Großer Bärensee"
				},
				{
					"language": "es",
					"string": "¿Es el lago Baikal mayor que el lago Great Bear?",
					"keywords": "lago Baikal mayor que lago Great Bear?"
				},
				{
					"language": "it",
					"string": "Il lago Baikal è più grande le lago Great Bear?",
					"keywords": "lago Baikal, più grande, lago Great Bear"
				},
				{
					"language": "fr",
					"string": "Est-ce que Lake Baikal est plus grand que le Great Bear Lake?",
					"keywords": "Lake Baikal, plus grand, Great Bear Lake"
				},
				{
					"language": "nl",
					"string": "Is het Baikalmeer groter dan het Groot Berenmeer?",
					"keywords": "Baikalmeer, groter, Groot Berenmeer"
				},
				{
					"language": "hi_IN",
					"string": "क्या जैक बेयर झील तुलना में बाइकाल झील बड़ी है?",
					"keywords": "जैक बेयर झील, बाइकाल झील, बड़ी"
				},
				{
					"language": "ro",
					"string": "Lacul Baikal este mai mare decât lacul Great Bear?",
					"keywords": "lacul Baikal, mai mare decât, lacul Great Bear"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/> \nASK\nWHERE {  \n        res:Lake_Baikal dbo:areaTotal ?a1 . \n        res:Great_Bear_Lake dbo:areaTotal ?a2 .\n        FILTER (?a1 > ?a2)\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "187",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Did Kaurismäki ever win the Grand Prix at Cannes?",
					"keywords": "Kaurismäki, winner, Grand Prix at Cannes"
				},
				{
					"language": "fa",
					"string": "آیا کوریسماکی تا بحال جایزه بزرگ  جشنواره کن را برده است؟",
					"keywords": "کوریسماکی، جایزه بزرگ جشنواره کن"
				},
				{
					"language": "de",
					"string": "Hat Kaurismäki jemals den Großen Preis der Jury in Cannes gewonnen?",
					"keywords": "Kaurismäki, Großer Preis der Jury, Cannes"
				},
				{
					"language": "es",
					"string": "¿Gano Kaurismäki alguna vez el Gran Prix de Cannes?",
					"keywords": "Kaurismäki, ganador, Grand Prix de Cannes"
				},
				{
					"language": "it",
					"string": "Kaurismäki ha mai vinto il Grand Prix a Cannes?",
					"keywords": "Kaurismäki, vincitore, Grand Prix a Cannes"
				},
				{
					"language": "fr",
					"string": "A Kaurismäki gagné le Grand Prix de Cannes?",
					"keywords": "Kaurismäki, gagné, Grand Prix de Cannes"
				},
				{
					"language": "nl",
					"string": "Heeft Kaurismäki ooit de Grand Prix op het filmfestival van Cannes gewonnen?",
					"keywords": "Kaurismäki, winnaar, Grand Prix, Cannes"
				},
				{
					"language": "hi_IN",
					"string": "क्या कौरिस्म्की कभी कैनन्स में ग्रांड प्रिक्स जीते हैं?",
					"keywords": "कौरिस्म्की, कैनन्स, ग्रांड प्रिक्स, जीत"
				},
				{
					"language": "ro",
					"string": "Kaurismäki a câștigat vreodată premiul Grand Prix la Cannes?",
					"keywords": "Kaurismäki, câștigător, Grand Prix la Cannes"
				}
			],
			"query": {
				"sparql": "ASK WHERE { <http://dbpedia.org/resource/Aki_Kaurismäki> <http://dbpedia.org/ontology/award> <http://dbpedia.org/resource/Grand_Prix_(Cannes_Film_Festival)> . }"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "188",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all books by William Goldman with more than 300 pages.",
					"keywords": "book, William Goldman, pages, more than 300"
				},
				{
					"language": "de",
					"string": "Gib mir alle Bücher von William Goldman mit mehr als 300 Seiten.",
					"keywords": "Buch, William Goldman, Seiten, mehr als 300"
				},
				{
					"language": "es",
					"string": "Dame todos los libros de Wiliam Goldman con más de 300 páginas.",
					"keywords": "libro, William Goldman, más de 300 páginas"
				},
				{
					"language": "it",
					"string": "Dammi tutti i libri di Wiliam Goldman con più di 300 pagine.",
					"keywords": "libro, Wiliam Goldman, pagine, più di 300"
				},
				{
					"language": "fr",
					"string": "Donnes-moi tous les livres de William Goldman avec plus de 300 pages.",
					"keywords": "livres, William Goldman, plus de 300 pages"
				},
				{
					"language": "nl",
					"string": "Geef alle boeken van William Goldman met meer dan 300 pagina's.",
					"keywords": "boeken, William Goldman, meer dan 300 pagina's"
				},
				{
					"language": "hi_IN",
					"string": "मुझे ३०० से अधिक पृष्ठों के साथ विलियम गोल्डमैन की किताबें की सूचि बतायें।",
					"keywords": "३०० से अधिक पृष्ठों, विलियम गोल्डमैन, किताबें"
				},
				{
					"language": "ro",
					"string": "Dă-mi toate carțile de William Glodman cu mai mult de 300 de pagini.",
					"keywords": "carte, William Goldman, pagini, mai mult de 300"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri \nWHERE {\n        ?uri rdf:type dbo:Book .\n        ?uri dbo:author res:William_Goldman .\n        ?uri dbo:numberOfPages ?x .\n        FILTER (?x > 300)\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Marathon_Man_(novel)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Which_Lie_Did_I_Tell%3F"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Hype_and_Glory"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Tinsel_(novel)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Boys_and_Girls_Together"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Control_(novel)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Color_of_Light"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Princess_Bride"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Wait_Till_Next_Year"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Brothers_(Goldman_novel)"
							}
						}
					]
				}
			}]
		},
		{
			"id": "189",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Where is Fort Knox located?",
					"keywords": "Fort Knox, located"
				},
				{
					"language": "fa",
					"string": "فورت ناکس در کجا واقع شده است؟",
					"keywords": "فورت ناکس، واقع"
				},
				{
					"language": "de",
					"string": "Wo liegt Fort Knox?",
					"keywords": "Fort Knox, liegen"
				},
				{
					"language": "es",
					"string": "¿Donde se encuentra el Fort Knox?",
					"keywords": "Fort Knox, se encuentra, estado americano"
				},
				{
					"language": "it",
					"string": "Dove si trova Fort Knox?",
					"keywords": "Fort Knox, trovarsi"
				},
				{
					"language": "fr",
					"string": "Dans quel état américain se trouve Fort Knox?",
					"keywords": "état américain, Fort Knox"
				},
				{
					"language": "nl",
					"string": "Waar ligt Fort Knox?",
					"keywords": "Fort Knox, ligt"
				},
				{
					"language": "hi_IN",
					"string": "फोर्ट नॉक्स कहां स्थित है?",
					"keywords": "फोर्ट नॉक्स, स्थित"
				},
				{
					"language": "ro",
					"string": "În ce stat american este situat Fort Knox?",
					"keywords": "Fort Knox, situat, stat american"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/Fort_Knox> <http://dbpedia.org/property/location> ?uri . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Kentucky"
						}
					}]
				}
			}]
		},
		{
			"id": "190",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": false,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which U.S. state is Fort Knox located?",
					"keywords": "Fort Knox, located, U.S. state"
				},
				{
					"language": "de",
					"string": "In welchem US-Bundesstaat liegt Fort Knox?",
					"keywords": "Fort Knox, liegen, US-Bundesstaat"
				},
				{
					"language": "es",
					"string": "¿En qué estado american se encuentra Fort Knox?",
					"keywords": "Fort Knox, se encuentra, estado americano"
				},
				{
					"language": "it",
					"string": "In quale stato americano si trova Fort Knox?",
					"keywords": "Fort Knox, trovarsi, stato americano"
				},
				{
					"language": "fr",
					"string": "Dans quel état américain se trouve Fort Knox?",
					"keywords": "état américain, Fort Knox"
				},
				{
					"language": "nl",
					"string": "In welke staat van de Verenigde Staten ligt Fort Knox?",
					"keywords": "Fort Knox, staat van de Verenigde Staten, ligt"
				},
				{
					"language": "hi_IN",
					"string": "सैयुक्त राज्य के किस राज्य में फोर्ट नॉक्स स्थित है?",
					"keywords": "सैयुक्त राज्य, फोर्ट नॉक्स, स्थित"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX dbp: <http://dbpedia.org/property/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {\n\tres:Fort_Knox dbp:location ?uri .\n        ?uri dbo:country res:United_States .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Kentucky"
						}
					}]
				}
			}]
		},
		{
			"id": "191",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Where is Syngman Rhee buried?",
					"keywords": "where, Syngman Rhee, buried"
				},
				{
					"language": "fa",
					"string": "ایسونگمن ری گجا دفن شده است؟",
					"keywords": "ایسونگمن ری، دفن"
				},
				{
					"language": "de",
					"string": "Wo liegt Syngman Rhee begraben?",
					"keywords": "Syngman Rhee, begraben"
				},
				{
					"language": "es",
					"string": "¿Dónde está enterrado Syngman Rhee?",
					"keywords": "Dónde, enterrado, Syngman Rhee"
				},
				{
					"language": "it",
					"string": "Dove è sepolto Syngman Rhee?",
					"keywords": "dove, sepolto, Syngman Rhee"
				},
				{
					"language": "fr",
					"string": "Où est enterré Syngman Rhee?",
					"keywords": "lieu d'enterrement, Syngman Rhee"
				},
				{
					"language": "nl",
					"string": "Waar ligt Syngman Rhee begraven?",
					"keywords": "Syngman Rhee, begrafplaats"
				},
				{
					"language": "hi_IN",
					"string": "सिन्गमैन र्ही कहाँ दफनाया गया है?",
					"keywords": "सिन्गमैन र्ही, दफनाया"
				},
				{
					"language": "ro",
					"string": "Unde este înmormântat Syngman Rhee?",
					"keywords": "unde, înmormântat, Syngman Rhee"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/Syngman_Rhee> <http://dbpedia.org/ontology/restingPlace> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Seoul_National_Cemetery"
						}
					}]
				}
			}]
		},
		{
			"id": "192",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the timezone in San Pedro de Atacama?",
					"keywords": "timezone, San Pedro de Atacama"
				},
				{
					"language": "fa",
					"string": "منطقه زمانی در San Pedro de Atacama چیست؟",
					"keywords": "منطقه زمانی، San Pedro de Atacama"
				},
				{
					"language": "de",
					"string": "In welcher Zeitzone liegt San Pedro de Atacama?",
					"keywords": "Zeitzone, San Pedro de Atacama"
				},
				{
					"language": "es",
					"string": "¿Cuál es la zona horaria en San Pedro de Atacama?",
					"keywords": "zona horaria, San Pedro de Atacama"
				},
				{
					"language": "it",
					"string": "Qual è il fuso orario di San Pedro de Atacama?",
					"keywords": "fuso orario, San Pedro de Atacama"
				},
				{
					"language": "fr",
					"string": "Quel est le fuseau horaire de San Pedro de Atacama?",
					"keywords": "fuseau horaire, San Pedro de Atacama"
				},
				{
					"language": "nl",
					"string": "Wat is de tijdzone in San Pedro de Atacama?",
					"keywords": "tijdzone, San Pedro de Atacama"
				},
				{
					"language": "hi_IN",
					"string": "सैन पेड्रो डे अटाकामा में समय क्षेत्र क्या है?",
					"keywords": "सैन पेड्रो डे अटाकामा, समय क्षेत्र"
				},
				{
					"language": "ro",
					"string": "Care este fusul orar din San Pedro de Atacama?",
					"keywords": "fus orar, San Pedro de Atacama"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/San_Pedro_de_Atacama> <http://dbpedia.org/ontology/timeZone> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Time_in_Chile"
						}
					}]
				}
			}]
		},
		{
			"id": "193",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "To which artistic movement did the painter of The Three Dancers belong?",
					"keywords": "artistic movement, painter, The Three Dancers"
				},
				{
					"language": "fa",
					"string": "نقاش سه رقصنده به چه جنبش هنری تعلق دارد؟",
					"keywords": "نقاش، سه رقصنده، جنبش هنری"
				},
				{
					"language": "de",
					"string": "Welcher Stilrichtung gehörte der Maler der Drei Tänzer an?",
					"keywords": "Drei Tänzer, Maler, Stilrichtung"
				},
				{
					"language": "es",
					"string": "¿A qué estilo artístico pertenece el pinto de Los Tres Bailarines?",
					"keywords": "estilo artístico, pintor, Los Tres Bailarines"
				},
				{
					"language": "it",
					"string": "A quale movimento artistico apparteneva il pittore de I tre ballerini?",
					"keywords": "movimento artistico, pittore, I tre ballerini"
				},
				{
					"language": "fr",
					"string": "A quel mouvement artistisque appartient le peintre de Les Trois Danceurs?",
					"keywords": "mouvement artistique, peintre, les trois danceurs"
				},
				{
					"language": "nl",
					"string": "Tot welke artistieke stijl behoort de schilder van de Drie Dansers?",
					"keywords": "Drie Dansers, schilder, stijl"
				},
				{
					"language": "hi_IN",
					"string": "द थ्री डांसर्स के चित्रकार किस कलात्मक आंदोलन से हैं?",
					"keywords": "द थ्री डांसर्स, चित्रकार, कलात्मक आंदोलन"
				},
				{
					"language": "ro",
					"string": "Cărui curent artistic îi aparține pictorul lucrării Trei dansatoare?",
					"keywords": "curent artistic, pictor, Trei dansatoare"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/The_Three_Dancers> <http://dbpedia.org/ontology/author> ?person .  ?person <http://dbpedia.org/ontology/movement> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Cubism"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Surrealism"
							}
						}
					]
				}
			}]
		},
		{
			"id": "194",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which scientist is known for the Manhattan Project and the Nobel Peace Prize?",
					"keywords": "scientist, known for, Manhattan Project, Nobel Peace Prize"
				},
				{
					"language": "de",
					"string": "Welcher Wissenschaftler ist bekannt für das Manhattan-Projekt und den Friedensnobelpreis?",
					"keywords": "Wissenschaftler, bekannt für, Manhattan-Projekt, Friedensnobelpreis"
				},
				{
					"language": "es",
					"string": "¿Qué científicos son conocidos por el proyecto Manhattan y el premio Nobel de la Paz?",
					"keywords": "científico, conocidos, proyecto Manhattan, premio Nobel de la Paz"
				},
				{
					"language": "it",
					"string": "Quale scienziato è conosciuto per il progetto Manhattan e per il premio Nobel per la pace?",
					"keywords": "scienziato, conosciuto, progetto Manhattan, premio Nobel per la pace"
				},
				{
					"language": "fr",
					"string": "Quel chercheur est connu pour le projet Manhattan et le prix Nobel de la paix?",
					"keywords": "chercheur, projet Manhattan, prix Nobel de la paix"
				},
				{
					"language": "nl",
					"string": "Welke wetenschaper staat bekend om het Manhattan Project en de Nobelprijs voor de Vrede?",
					"keywords": "wetenschaper, bekend om, Manhattan Project, Nobelprijs voor de Vrede"
				},
				{
					"language": "hi_IN",
					"string": "कौन सा वैज्ञानिक मैनहट्टन प्रोजेक्ट और नोबेल शांति पुरस्कार के लिए जाना जाता है?",
					"keywords": "वैज्ञानिक, मैनहट्टन प्रोजेक्ट, नोबेल, शांति पुरस्कार"
				},
				{
					"language": "ro",
					"string": "Care om de știință este cunoscut pentru proiectul Manhattan și pentru premiul Nobel pentru pace?",
					"keywords": "om de știință, cunoscut pentru, proiect Manhattan, premiul Nobel pentru pace"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri\nWHERE {\n        ?uri dbo:knownFor res:Manhattan_Project .\n        ?uri rdf:type dbo:Scientist .\n        ?uri dbo:knownFor res:Nobel_Peace_Prize .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Joseph_Rotblat"
						}
					}]
				}
			}]
		},
		{
			"id": "195",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Show me all books in Asimov's Foundation series.",
					"keywords": "books, Asimov, Foundation series"
				},
				{
					"language": "fa",
					"string": "مجموعه کتاب های آسیموف چند کتاب دارد؟",
					"keywords": "مجموعه کتاب های، آسیموف، کتاب"
				},
				{
					"language": "de",
					"string": "Zeig mir alle Bücher in Asimovs Foundation-Serie.",
					"keywords": "Asimov, Foundation-Serie, Bücher"
				},
				{
					"language": "es",
					"string": "Muéstrame todos los libros en la serie Fundación de Asimov",
					"keywords": "libros, serie Fundación Asimov"
				},
				{
					"language": "it",
					"string": "Mostrami tutti i libri del Ciclo della Fondazione di Asimov",
					"keywords": "libri, Ciclo della Fondazione, Asimov"
				},
				{
					"language": "fr",
					"string": "Montres-moi tous les livres du Cycle de Fondation d'Asimov.",
					"keywords": "livres, Cycle de Fondation, Asimov"
				},
				{
					"language": "nl",
					"string": "Toon alle boeken die bij de Foundation-serie horen.",
					"keywords": "boeken, Foundation-serie"
				},
				{
					"language": "hi_IN",
					"string": "असिमोव की फाउंडेशन श्रृंखला की सारी पुस्तकों की सूचि दिखाएं।",
					"keywords": "असिमोव, फाउंडेशन श्रृंखला, पुस्तकों"
				},
				{
					"language": "ro",
					"string": "Arată-mi toate cărțile din seria Fundația de Asimov",
					"keywords": "cărți, seria Fundația, Asimov"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/series> <http://dbpedia.org/resource/Foundation_series> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Foundation's_Edge"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Second_Foundation"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Foundation_(Isaac_Asimov_novel)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Foundation_and_Chaos"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Foundation's_Triumph"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Originist"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Prelude_to_Foundation"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Foundation's_Fear"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Foundation_and_Earth"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Forward_the_Foundation"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Foundation_and_Empire"
							}
						}
					]
				}
			}]
		},
		{
			"id": "196",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": false,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all cities in New Jersey with more than 100000 inhabitants.",
					"keywords": "New Jersey, city, inhabitants, more than 100000"
				},
				{
					"language": "de",
					"string": "Gib mir alle Städte in New Jersey, die mehr als 100000 Einwohner haben.",
					"keywords": "New Jersey, Stadt, Einwohner, mehr als 100000"
				},
				{
					"language": "es",
					"string": "Dame todas las cuidades en New Jersey que tengan más de 100000 habitantes.",
					"keywords": "New Jersey, ciudad, habitantes, más de 100000"
				},
				{
					"language": "it",
					"string": "Dammi tutte le città del New Jersey con più di 100000 abitanti.",
					"keywords": "New Jersey, città, abitanti, più di 100000"
				},
				{
					"language": "fr",
					"string": "Donnes-moi toutes les villes du New Jersey avec plus de 100000 habitants.",
					"keywords": "New Jersey, villes, habitants, plus de 100000"
				},
				{
					"language": "nl",
					"string": "Geef alle steden in New Jersey met meer dan 100000 inwoners.",
					"keywords": "New Jersey, stad, inwoners, meer dan 100000"
				},
				{
					"language": "hi_IN",
					"string": "मुझे न्यू जर्सी के १००००० से अधिक निवासियों के साथ सभी शहरों की सूचि बतायें।",
					"keywords": "न्यू जर्सी, १००००० से अधिक निवासि, शहर"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX dbp: <http://dbpedia.org/property/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri \nWHERE {\n\t?uri rdf:type dbo:City .\n        ?uri dbo:isPartOf res:New_Jersey .\n        ?uri dbp:populationTotal ?inhabitants .\n        FILTER (?inhabitants > 100000) .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Newark,_New_Jersey"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Jersey_City,_New_Jersey"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Elizabeth,_New_Jersey"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Paterson,_New_Jersey"
							}
						}
					]
				}
			}]
		},
		{
			"id": "197",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which museum in New York has the most visitors?",
					"keywords": "museum, New York, the most visitors"
				},
				{
					"language": "fa",
					"string": "کدام موزه در نیویورک بیشترین بازدید کننده را دارد؟",
					"keywords": "موزه، نیویورک، بیشترین بازدید کننده"
				},
				{
					"language": "de",
					"string": "Welches Museum in New York hat die meisten Besucher?",
					"keywords": "Museum, New York, die meisten Besucher"
				},
				{
					"language": "es",
					"string": "¿Qué museo en Nueva York tiene el mayor numero de visitantes?",
					"keywords": "museo Nueva York, mayor numero visitantes"
				},
				{
					"language": "it",
					"string": "Quale museo di New York ha il maggior numero di visitatori?",
					"keywords": "museo, New York, maggior numero di visitatori"
				},
				{
					"language": "fr",
					"string": "Quel musée de New York a le plus de visiteurs?",
					"keywords": "musée, New York, nombre maximal de visiteurs"
				},
				{
					"language": "nl",
					"string": "Welk museum in New York heeft de meeste bezoekers?",
					"keywords": "museum, New York, de meeste bezoekers"
				},
				{
					"language": "hi_IN",
					"string": "न्यूयॉर्क में कौन से संग्रहालय में सबसे अधिक आगंतुक हैं?",
					"keywords": "न्यूयॉर्क, संग्रहालय, सबसे अधिक आगंतुक"
				},
				{
					"language": "ro",
					"string": "Care muzeu din New York are cei mai mulți vizitatori?",
					"keywords": "muzeu, New York, cei mai mulți vizitatori"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Museum> .  ?uri <http://dbpedia.org/ontology/location> <http://dbpedia.org/resource/New_York_City> .  ?uri <http://dbpedia.org/ontology/numberOfVisitors> ?num . } ORDER BY DESC(?num) OFFSET 0 LIMIT 1 "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Museum_of_Motherhood"
						}
					}]
				}
			}]
		},
		{
			"id": "198",
			"answertype": "number",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How high is the Yokohama Marine Tower?",
					"keywords": "high, Yokohama Marine Tower"
				},
				{
					"language": "de",
					"string": "Wie hoch ist der Yokohama Marine Tower?",
					"keywords": "hoch, Yokohama Marine Tower"
				},
				{
					"language": "es",
					"string": "¿Cómo de alta el la torre Yokohama Marine?",
					"keywords": "alta, torre Yokohama Marine?"
				},
				{
					"language": "it",
					"string": "Quanto è alta la torre Yokohama Marine?",
					"keywords": "altezza, torre Yokohama Marine"
				},
				{
					"language": "fr",
					"string": "Quelle est la hauteur de la tour de Yokohama?",
					"keywords": "hauteur, tour de Yokohama"
				},
				{
					"language": "nl",
					"string": "Hoe hoog is de Yokohama Marine Tower?",
					"keywords": "hoog, Yokohama Marine Tower"
				},
				{
					"language": "hi_IN",
					"string": "योकोहामा समुद्री टॉवर कितना ऊँचा है?",
					"keywords": "योकोहामा समुद्री टॉवर, ऊँचा"
				},
				{
					"language": "ro",
					"string": "Cât de înalt este Turnul Marine Yokohama?",
					"keywords": "înalt, Turnul Marine Yokohama"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?num\nWHERE {\n        res:Yokohama_Marine_Tower dbo:height ?num .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "106.07"
						}
					}]
				}
			}]
		},
		{
			"id": "199",
			"answertype": "boolean",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Does the new Battlestar Galactica series have more episodes than the old one?",
					"keywords": "new BattleStar Galactica series, episodes, more, old Battle Star Galactica series"
				},
				{
					"language": "de",
					"string": "Hat die neue Battlestar-Galactica-Serie mehr Episoden als die alte?",
					"keywords": "neue Battlestar-Galactica-Serie, Episoden, mehr, alte Battlestar-Galactica-Serie"
				},
				{
					"language": "es",
					"string": "¿Tiene la nueve serie de Battlestar-Galactica más episodios que la anterior?",
					"keywords": "nueve serie de Battlestar-Galactica, más episodios que la anterior"
				},
				{
					"language": "it",
					"string": "La nuova serie di Battlestar Galactica ha più episodi di quella precedente?",
					"keywords": "nuova serie di Battlestar Galactica, più episodi della precedente"
				},
				{
					"language": "fr",
					"string": "A la nouvelle série de Battlestar Galactica plus d'épisodes que l'ancienne?",
					"keywords": "nouvelle série de Battlestar Galactica, plus d'épisodes que l'ancienne"
				},
				{
					"language": "nl",
					"string": "Heeft de nieuwe Battlestar Galactica-serie meer afleveringen dan de oude?",
					"keywords": "nieuwe Battlestar Galactica-serie, meer afleveringen, oude Battlestar Galactica-serie"
				},
				{
					"language": "hi_IN",
					"string": "क्या नई बट्ट्लैस्टार गैलेक्टिका सीरीज़ के पुराने संस्करणों की तुलना में अधिक एपिसोड हैं?",
					"keywords": "नई बट्ट्लैस्टार गैलेक्टिका सीरीज़, पुराने संस्करणों, अधिक एपिसोड"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nASK \nWHERE {\n\t<http://dbpedia.org/resource/Battlestar_Galactica_%281978_TV_series%29> dbo:numberOfEpisodes ?x .\n\t<http://dbpedia.org/resource/Battlestar_Galactica_%282004_TV_series%29> dbo:numberOfEpisodes ?y .\n\tFILTER (?y > ?x)\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": false
			}]
		},
		{
			"id": "200",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is the youngest Darts player?",
					"keywords": "Darts player, youngest"
				},
				{
					"language": "de",
					"string": "Wer ist der jüngste Dartspieler?",
					"keywords": "Dartspieler, jüngster"
				},
				{
					"language": "es",
					"string": "¿Quién es el jugador mas jóven de dardos?",
					"keywords": "jugador más jóven dardos"
				},
				{
					"language": "it",
					"string": "Chi è il giocatore di freccette più giovane?",
					"keywords": "giocatore di freccette, più giovane"
				},
				{
					"language": "fr",
					"string": "Quel est le joueur de fléchettes le plus jeune?",
					"keywords": "jouer de fléchettes, plus jeune"
				},
				{
					"language": "nl",
					"string": "Wie is de jongste dartsspeler?",
					"keywords": "jongste Darts speeler"
				},
				{
					"language": "hi_IN",
					"string": "सबसे छोटा डार्ट्स खिलाड़ी कौन है?",
					"keywords": "सबसे छोटा, डार्ट्स खिलाड़ी"
				},
				{
					"language": "ro",
					"string": "Cine este cel mai tânăr jucător de Darts?",
					"keywords": "jucător de Darts, cel mai tânăr"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?uri\nWHERE {\n        ?uri rdf:type dbo:DartsPlayer .\n        ?uri dbo:birthDate ?date .\n}\nORDER BY DESC(?date)\nOFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Max_Hopp"
						}
					}]
				}
			}]
		},
		{
			"id": "201",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who developed the video game World of Warcraft?",
					"keywords": "video game, World of Warcraft, develop"
				},
				{
					"language": "de",
					"string": "Wer hat das Videospiel World of Warcraft entwickelt?",
					"keywords": "Videospiel, World of Warcraft, entwickeln"
				},
				{
					"language": "es",
					"string": "¿Quién desarrolló el videojuego Warcraft?",
					"keywords": "videojuego, Warcraft, desarrollar"
				},
				{
					"language": "it",
					"string": "Chi ha creato il videogioco World of Warcraft?",
					"keywords": "videogioco, World of Warcraft, creare"
				},
				{
					"language": "fr",
					"string": "Qui a développé World of Warcraft?",
					"keywords": "développé, World of Warcraft"
				},
				{
					"language": "nl",
					"string": "Wie heeft het videospel World of Warcraft ontwikkeld?",
					"keywords": "World of Warcraft, ontwikkelaar"
				},
				{
					"language": "hi_IN",
					"string": "वर्ल्ड ऑफ़ वारक्राफ़्ट गेम किसने विकसित किया हैं?",
					"keywords": "वर्ल्ड ऑफ़ वारक्राफ़्ट, गेम, विकसित"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri \nWHERE {\n\tres:World_of_Warcraft dbo:developer ?uri . \n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Blizzard_Entertainment"
						}
					}]
				}
			}]
		},
		{
			"id": "202",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who was the pope that founded the Vatican Television?",
					"keywords": "pope, founded, Vatican Television"
				},
				{
					"language": "de",
					"string": "Welcher Papst hat das Vatikanische Fernsehen gegründet?",
					"keywords": "Papst, gegründet, Vatikanisches Fernsehen"
				},
				{
					"language": "es",
					"string": "¿Quien fue el papa que fundo la televisión Vaticana?",
					"keywords": "papa, fundo, televisión Vaticana"
				},
				{
					"language": "it",
					"string": "Quale papa ha fondato la televisione vaticana?",
					"keywords": "papa, fondare, televisione vaticana"
				},
				{
					"language": "fr",
					"string": "Quel pape est le fondateur de la télé du Vatican?",
					"keywords": "pape, fondateur, télé du Vatican"
				},
				{
					"language": "nl",
					"string": "Welk paus richtte de Vaticaanse televisie op?",
					"keywords": "paus, oprichter, Vaticaanse televisie"
				},
				{
					"language": "hi_IN",
					"string": "किस पोप ने वेटिकन टेलीविजन की स्थापना की थी?",
					"keywords": "पोप, वेटिकन टेलीविजन, स्थापना"
				},
				{
					"language": "ro",
					"string": "Cine a fost papa care a creat televiziunea din Vatican?",
					"keywords": "papa, fondat, televiziunea din Vatican"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/> \nPREFIX res: <http://dbpedia.org/resource/> \nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \nSELECT ?uri \nWHERE { \n         ?uri rdf:type dbo:Pope . \n         res:Vatican_Television_Center dbo:foundedBy ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Pope_John_Paul_II"
						}
					}]
				}
			}]
		},
		{
			"id": "203",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who composed the music for Harold and Maude?",
					"keywords": "Harold and Maude, compose, music"
				},
				{
					"language": "de",
					"string": "Wer hat die Musik für Harold und Maude komponiert?",
					"keywords": "Harold und Maude, komponieren, Musik"
				},
				{
					"language": "es",
					"string": "¿Quién compuso la música para Harold y Maude?",
					"keywords": "Harold y Maude, música, compositor"
				},
				{
					"language": "it",
					"string": "Chi ha composto la musica per Harold e Maude?",
					"keywords": "Harold e Maude, compositore, musica"
				},
				{
					"language": "fr",
					"string": "Qui a composé la musique de Harold et Maude?",
					"keywords": "composé, musique, Harold et Maude"
				},
				{
					"language": "nl",
					"string": "Wie componeerde de muziek voor Harold and Maude",
					"keywords": "componist, Harold and Maude"
				},
				{
					"language": "hi_IN",
					"string": "हेरोल्ड एंड मॉड के लिए संगीत किसने बनाया था?",
					"keywords": "हेरोल्ड एंड मॉड, संगीत, बनाया"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/>\nSELECT DISTINCT ?uri \nWHERE {\n\tres:Harold_and_Maude dbo:musicComposer ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Cat_Stevens"
						}
					}]
				}
			}]
		},
		{
			"id": "204",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Give me all members of Prodigy.",
					"keywords": "member, Prodigy"
				},
				{
					"language": "fa",
					"string": "تمام اعضای پرادیجی را لیست کن.",
					"keywords": "اعضا، پرادیجی"
				},
				{
					"language": "de",
					"string": "Gib mir alle Bandmitglieder von Prodigy.",
					"keywords": "Bandmitglied, Prodigy"
				},
				{
					"language": "es",
					"string": "Dame todos los miembros de la banda Prodigy.",
					"keywords": "miembros de la banda Prodigy"
				},
				{
					"language": "it",
					"string": "Dammi tutti i membri dei Prodigy.",
					"keywords": "membri, Prodigy"
				},
				{
					"language": "fr",
					"string": "Donne-moi tous les membres de Prodigy.",
					"keywords": "members, Prodigy"
				},
				{
					"language": "nl",
					"string": "Noem alle leden van Prodigy.",
					"keywords": "leden, Prodigy"
				},
				{
					"language": "hi_IN",
					"string": "मुझे प्रोडिजी के सभी सदस्यों की सूचि बतायें।",
					"keywords": "प्रोडिजी, सदस्यों"
				},
				{
					"language": "ro",
					"string": "Dă-mi toții membrii Prodigy.",
					"keywords": "membru, Prodigy"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE {  <http://dbpedia.org/resource/The_Prodigy> <http://dbpedia.org/ontology/bandMember> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Maxim_(musician)"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Liam_Howlett"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Keith_Flint"
							}
						}
					]
				}
			}]
		},
		{
			"id": "205",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Who is starring in Spanish movies produced by Benicio del Toro?",
					"keywords": "starring, Spanish movies, produced, Benicio del Toro"
				},
				{
					"language": "fa",
					"string": "چه کسی در فیلم های اسپانیایی تولید شده توسط بنیسیو دل تورو بازی می کند؟",
					"keywords": "فیلم های اسپانیایی، تولید، بنیسیو دل تورو، بازی"
				},
				{
					"language": "de",
					"string": "Wer spielt alles in spanischen Filmen produziert von Benicio del Toro mit? ",
					"keywords": "mitspielen, spanische Filme, produziert, Benicio del Toro"
				},
				{
					"language": "es",
					"string": "¿Quien protagoniza peliculas españolas producidas por Benicio del Toro?",
					"keywords": "protagonista, peliculas españolas, productor, Benicio del Toro"
				},
				{
					"language": "it",
					"string": "Chi recita nei film spagnoli prodotti da Benicio del Toro?",
					"keywords": "attori, film spagnoli, prodotti, Benicio del Toro"
				},
				{
					"language": "fr",
					"string": "Quels acteurs jouent dans des films dirigés par Benicio del Toro?",
					"keywords": "acteurs, directeur, Benicio del Toro"
				},
				{
					"language": "nl",
					"string": "Wie speeld in Spaanse films geproduceerd door Benicio del Toro?",
					"keywords": "speeld, Spaanse films, geproduceerd, Benicio del Toro"
				},
				{
					"language": "hi_IN",
					"string": "बेनिसीओ डेल टोरो द्वारा निर्मित स्पेनिश फिल्मों में कौन अभिनय करता है?",
					"keywords": "बेनिसीओ डेल टोरो, निर्मित, स्पेनिश फिल्म, अभिनय"
				},
				{
					"language": "ro",
					"string": "Cine sunt protagoniști în filmele spaniole produse de Benicio del Toro?",
					"keywords": "protagoniști, filmele spaniole, produse, Benicio del Toro"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?film <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Film> . ?film <http://dbpedia.org/ontology/country> <http://dbpedia.org/resource/Spain> . ?film <http://dbpedia.org/ontology/producer> <http://dbpedia.org/resource/Benicio_del_Toro> . ?film <http://dbpedia.org/ontology/starring> ?uri . ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Person> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Benicio_del_Toro"
						}
					}]
				}
			}]
		},
		{
			"id": "206",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which subsidiary of TUI Travel serves both Glasgow and Dublin?",
					"keywords": "subsidiary, TUI Travel, serve, Glasgow, Dublin"
				},
				{
					"language": "fa",
					"string": "چه شرکت های تابعی از تی.یو.آی. تراول به هر دوی گلاسگو و دوبلین سرویس دارند؟",
					"keywords": "شرکت های تابعی، تی.یو.آی. تراول، گلاسگو، دوبلین، سرویس"
				},
				{
					"language": "de",
					"string": "Welche Tochtergesellschaft von TUI Travel fliegt sowohl Glasgow als auch Dublin an?",
					"keywords": "Tochtergesellschaft, TUI Travel, anfliegen, Glasgow, Dublin"
				},
				{
					"language": "es",
					"string": "¿Qué subsidiario de TUI Travel vuela en Glasgow y en Dublin?",
					"keywords": "subsidiario, TUI Travel, vuela, Glasgow, Dublin"
				},
				{
					"language": "it",
					"string": "Quale società sussidiaria di TUI Travel serve sia Dortmund che Dublino?",
					"keywords": "società sussidiaria di TUI Travel, servire, Glasgow, Dublin"
				},
				{
					"language": "fr",
					"string": "Quelle subsidiaire de TUI Travel vole sur Glasgow et Dublin?",
					"keywords": "subsidiaire, TUI Travel, vole sur, Glasgow, Dublin"
				},
				{
					"language": "nl",
					"string": "Welke dochteronderneming van TUI Travel bedient zowel Glasgow en Dublin?",
					"keywords": "dochteronderneming, TUI Travel, bedient, Glasgow, Dublin"
				},
				{
					"language": "hi_IN",
					"string": "टीयूआई ट्रैवल की कौन सी सहायक कंपनी ग्लासगो और डबलिन को सेवाएं देती है?",
					"keywords": "टीयूआई ट्रैवल, सहायक कंपनी, ग्लासगो, डबलिन, सेवा?"
				},
				{
					"language": "ro",
					"string": "Care filială a TUI Travel deservește atât Glasgow cât și Dublin?",
					"keywords": "filială, TUI Travel, deservește, Glasgow, Dublin"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { <http://dbpedia.org/resource/TUI_Travel> <http://dbpedia.org/ontology/subsidiary> ?uri .  ?uri <http://dbpedia.org/ontology/targetAirport> <http://dbpedia.org/resource/Glasgow_Airport> . ?uri <http://dbpedia.org/ontology/targetAirport> <http://dbpedia.org/resource/Dublin_Airport> . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Thomson_Airways"
						}
					}]
				}
			}]
		},
		{
			"id": "207",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "In which country is Mecca located?",
					"keywords": "country, located, Mecca"
				},
				{
					"language": "de",
					"string": "In welchem Land liegt Mekka?",
					"keywords": "Land, Mekka"
				},
				{
					"language": "es",
					"string": "¿En que país se sitúa la Meca?",
					"keywords": "pais Meca"
				},
				{
					"language": "it",
					"string": "In quale stato si trova La Mecca?",
					"keywords": "stato, La Mecca"
				},
				{
					"language": "fr",
					"string": "Dans quel pays se trouve Mecca?",
					"keywords": "pays, Mecca"
				},
				{
					"language": "nl",
					"string": "In welk land ligt Mekka?",
					"keywords": "land, Mekka"
				},
				{
					"language": "hi_IN",
					"string": "मक्का किस देश में स्थित है?",
					"keywords": "मक्का, देश, स्थित"
				},
				{
					"language": "ro",
					"string": "În ce țară se află Mecca?",
					"keywords": "țară, se află, Mecca"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/> \nSELECT DISTINCT ?uri \nWHERE {  \n        res:Mecca dbo:country ?uri .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Saudi_Arabia"
						}
					}]
				}
			}]
		},
		{
			"id": "208",
			"answertype": "number",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "How many languages are spoken in Colombia?",
					"keywords": "languages, Colombia"
				},
				{
					"language": "fa",
					"string": "چه تعداد زبان در کلمبیا صحبت می شود؟",
					"keywords": "زبان، کلمبیا"
				},
				{
					"language": "de",
					"string": "Wieviele Sprachen werden in Kolumbien gesprochen?",
					"keywords": "Sprachen, Kolumbien"
				},
				{
					"language": "es",
					"string": "¿Cuántos idiomas se hablan en Colombia?",
					"keywords": "idiomas, Colombia"
				},
				{
					"language": "it",
					"string": "Quante lingue sono parlate in Colombia?",
					"keywords": "lingue, Colombia"
				},
				{
					"language": "fr",
					"string": "Combien de langues sont parlées au Colombie?",
					"keywords": "langues, Colombie"
				},
				{
					"language": "nl",
					"string": "Hoeveel talen worden er in Colombia gesproken?",
					"keywords": "talen, Columbia"
				},
				{
					"language": "hi_IN",
					"string": "कोलंबिया में कितनी भाषाएं बोली जाती हैं?",
					"keywords": "कोलंबिया, भाषाएं, बोली"
				},
				{
					"language": "ro",
					"string": "Câte limbi sunt vorbite în Columbia?",
					"keywords": "limbi, Columbia"
				}
			],
			"query": {
				"sparql": "SELECT (COUNT(DISTINCT ?uri) as ?c) WHERE {  ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Language> .  <http://dbpedia.org/resource/Colombia> <http://dbpedia.org/ontology/language> ?uri . } "
			},
			"answers": [{
				"head": {
					"vars": [
						"c"
					]
				},
				"results": {
					"bindings": [{
						"c": {
							"type": "literal",
							"value": "2"
						}
					}]
				}
			}]
		},
		{
			"id": "209",
			"answertype": "resource",
			"aggregation": true,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What is the biggest stadium in Spain?",
					"keywords": "biggest stadium, Spain"
				},
				{
					"language": "fa",
					"string": "بزرگترین استادیوم در اسپانیا کدام است؟",
					"keywords": "بزرگترین استادیوم، اسپانیا"
				},
				{
					"language": "de",
					"string": "Was ist das größte Stadion in Spanien?",
					"keywords": "Spanien, größtes Stadium"
				},
				{
					"language": "es",
					"string": "¿Cuál es el estadio más grande de España?",
					"keywords": "estadio más grande España"
				},
				{
					"language": "it",
					"string": "Qual è lo stadio più grande in Spagna?",
					"keywords": "stadio più grande, Spagna"
				},
				{
					"language": "fr",
					"string": "Quel est le plus grand stade d'Espagne?",
					"keywords": "plus grand stade, Espagne"
				},
				{
					"language": "nl",
					"string": "Wat is het grootste stadion van Spanje?",
					"keywords": "grootste stadion, Spanje"
				},
				{
					"language": "hi_IN",
					"string": "स्पेन, सबसे बड़ा, स्टेडियम",
					"keywords": "कोलंबिया, भाषाएं, बोली"
				},
				{
					"language": "ro",
					"string": "Care este cel mai mare stadion din Spania?",
					"keywords": "cel mai mare stadion, Spania"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri a <http://dbpedia.org/ontology/Stadium> . ?uri <http://dbpedia.org/ontology/location> <http://dbpedia.org/resource/Spain> . ?uri <http://dbpedia.org/ontology/seatingCapacity> ?n . } ORDER BY DESC(?n) OFFSET 0 LIMIT 1"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Camp_Nou"
						}
					}]
				}
			}]
		},
		{
			"id": "210",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Which professional surfers were born on the Philippines?",
					"keywords": "professional surfer, born, Philippines"
				},
				{
					"language": "de",
					"string": "Welche Profisurfer wurden auf den Philippinen geboren?",
					"keywords": "Profisurfer, geboren, Philippinen"
				},
				{
					"language": "es",
					"string": "¿Qué surfistas profesionales nacieron en las Filipinas?",
					"keywords": "surfista profesional, nacido, Filipinas"
				},
				{
					"language": "it",
					"string": "Quali surfisti professionisti sono nati nelle Filippine?",
					"keywords": "surfista professionista, nato, Filippine"
				},
				{
					"language": "fr",
					"string": "Quels surfeurs professionels sont nés aux Philippines?",
					"keywords": "surfeurs professionels, Philippines"
				},
				{
					"language": "nl",
					"string": "Welke professionele surfers werden geboren op de Filipijnen?",
					"keywords": "professionele surfer, Filipijnen"
				},
				{
					"language": "hi_IN",
					"string": "फिलीपींस पर कौन से पेशेवर सर्फर्स पैदा हुए थे?",
					"keywords": "फिलीपींस, पेशेवर सर्फर्स, पैदा"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nSELECT DISTINCT ?uri\nWHERE {\n\t?uri dbo:occupation res:Surfing .\n\t?uri dbo:birthPlace res:Philippines .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Marcus_Adoro"
						}
					}]
				}
			}]
		},
		{
			"id": "211",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "What are the five boroughs of New York?",
					"keywords": "five boroughs, New York"
				},
				{
					"language": "fa",
					"string": "پنج منطقه نیویورک کدام است؟",
					"keywords": "پنج، منطقه، نیویورک"
				},
				{
					"language": "de",
					"string": "Was sind die fünf Stadtteile von New York?",
					"keywords": "New York, Stadtteile"
				},
				{
					"language": "es",
					"string": "¿Cuáles son los cinco condados de Nueva York?",
					"keywords": "cinco condados, Nueva York"
				},
				{
					"language": "it",
					"string": "Quali sono i cinque quartieri di New York?",
					"keywords": "cinque quartieri, New York"
				},
				{
					"language": "fr",
					"string": "Donne-moi cinq quartiers de New York.",
					"keywords": "quartiers, New York"
				},
				{
					"language": "nl",
					"string": "Wat zijn de fijv wijken van New York?",
					"keywords": "New York, wijken"
				},
				{
					"language": "hi_IN",
					"string": "न्यूयॉर्क के पांच नगर क्या हैं?",
					"keywords": "न्यूयॉर्क, पांच नगर"
				},
				{
					"language": "ro",
					"string": "Care sunt cele cinci cartiere din New York?",
					"keywords": "cinci cartiere, New York"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?uri WHERE { ?uri <http://dbpedia.org/ontology/governmentType> <http://dbpedia.org/resource/Borough_(New_York_City)> . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Queens"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Staten_Island"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Manhattan"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/The_Bronx"
							}
						},
						{
							"uri": {
								"type": "uri",
								"value": "http://dbpedia.org/resource/Brooklyn"
							}
						}
					]
				}
			}]
		},
		{
			"id": "212",
			"answertype": "boolean",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Is Cola a beverage?",
					"keywords": "Cola, beverage"
				},
				{
					"language": "de",
					"string": "Ist Cola ein Getränk?",
					"keywords": "Cola, Getränk"
				},
				{
					"language": "es",
					"string": "¿La Coca Cola es una bebida?",
					"keywords": "Coca Cola, bebida"
				},
				{
					"language": "it",
					"string": "La Cola è una bevanda?",
					"keywords": "Cola, bevanda"
				},
				{
					"language": "fr",
					"string": "Le Coca est-il une boisson?",
					"keywords": "Coca, boisson"
				},
				{
					"language": "nl",
					"string": "Is cola een drank?",
					"keywords": "Cola, drank"
				},
				{
					"language": "hi_IN",
					"string": "क्या कोला एक पेय है?",
					"keywords": "कोला, पेय"
				},
				{
					"language": "ro",
					"string": "Cola este o băutură?",
					"keywords": "Cola, băutură"
				}
			],
			"query": {
				"sparql": "PREFIX dbo: <http://dbpedia.org/ontology/>\nPREFIX res: <http://dbpedia.org/resource/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nASK \nWHERE {\n        res:Cola rdf:type dbo:Beverage .\n}"
			},
			"answers": [{
				"head": {},
				"results": {},
				"boolean": true
			}]
		},
		{
			"id": "213",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "When did princess Diana die?",
					"keywords": "date, princess Diana, died"
				},
				{
					"language": "fa",
					"string": "شاهزاده دیانا کی فوت کرد؟",
					"keywords": "شاهزاده دیانا، فوت"
				},
				{
					"language": "de",
					"string": "Wann ist Prinzessin Diana gestorben?",
					"keywords": "Prinzessin Diana, Todestag"
				},
				{
					"language": "es",
					"string": "¿Cuándo murió la princesa Diana?",
					"keywords": "fecha fallecimiento, princesa Diana"
				},
				{
					"language": "it",
					"string": "Quando è morta la principessa Diana?",
					"keywords": "data di morte, principessa Diana"
				},
				{
					"language": "fr",
					"string": "Donne moi la date de décès de Princesse Diana.",
					"keywords": "date de décès, Princesse Diana"
				},
				{
					"language": "nl",
					"string": "Wanneer is prinses Diana overleden?",
					"keywords": "prinses Diana, overleden, datum"
				},
				{
					"language": "hi_IN",
					"string": "राजकुमारी डायना का निधन कब हुआ?",
					"keywords": "राजकुमारी डायना, निधन"
				},
				{
					"language": "ro",
					"string": "Când a murit prințesa Diana?",
					"keywords": "data morții, prințesa Diana"
				}
			],
			"query": {
				"sparql": "SELECT DISTINCT ?d WHERE { <http://dbpedia.org/resource/Diana,_Princess_of_Wales> <http://dbpedia.org/ontology/deathDate> ?d . }"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "1997-08-31"
						}
					}]
				}
			}]
		},
		{
			"id": "214",
			"answertype": "resource",
			"aggregation": false,
			"onlydbo": true,
			"hybrid": false,
			"question": [{
					"language": "en",
					"string": "Where in France is sparkling wine produced?",
					"keywords": "produced, France, sparkling wine"
				},
				{
					"language": "de",
					"string": "Wo in Frankreich wird Schaumwein hergestellt?",
					"keywords": "Frankreich, hergestellt, Schaumwein"
				},
				{
					"language": "es",
					"string": "¿Dónde en Francia se produce el vino espumoso?",
					"keywords": "produce, Francia, vino espumoso"
				},
				{
					"language": "it",
					"string": "Dove si produce vino frizzante in Francia?",
					"keywords": "produrre, Francia, vino frizzante"
				},
				{
					"language": "fr",
					"string": "Où produit-on du vin mousseux en France?",
					"keywords": "france, produit, vin mousseux"
				},
				{
					"language": "nl",
					"string": "Waar in Frankrijk word mousserende wijn geproduceerd?",
					"keywords": "Frankrijk, mousserende wijn, geproduceerd"
				},
				{
					"language": "hi_IN",
					"string": "फ्रांस में स्पार्कलिंग वाइन का उत्पादन कहाँ होता है?",
					"keywords": "फ्रांस, स्पार्कलिंग वाइन, उत्पादन"
				},
				{
					"language": "ro",
					"string": "Unde în Franța este produs vinul spumant?",
					"keywords": "produs, Franța, vin spumant"
				}
			],
			"query": {
				"sparql": "PREFIX res: <http://dbpedia.org/resource/>\nPREFIX dbo: <http://dbpedia.org/ontology/> \nSELECT DISTINCT ?uri\nWHERE {\n        ?uri dbo:wineProduced res:Sparkling_wine .\n        ?uri dbo:location res:France .\n}"
			},
			"answers": [{
				"head": {
					"vars": [
						"uri"
					]
				},
				"results": {
					"bindings": [{
						"uri": {
							"type": "uri",
							"value": "http://dbpedia.org/resource/Loire_Valley_(wine)"
						}
					}]
				}
			}]
		}
	]
}