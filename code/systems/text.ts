import { content } from './assets';
import { CosmosFont, CosmosKeyed, CosmosMath } from './storyteller';

export default {
   battle: {
      death0: [ '(You take a deep breath.)', '(You\'re filled with determination.)' ],
      death1: [ 'You cannot give up just yet...', '$(name)!\nStay determined...' ],
      death2: [ 'Our fate rests upon you...', '$(name)!\nStay determined...' ],
      death3: [ 'You\'re going to be alright!', '$(name)!\nStay determined...' ],
      death4: [ 'Don\'t lose hope!', '$(name)!\nStay determined...' ],
      death5: [ 'It cannot end now!', '$(name)!\nStay determined...' ],

      flee1: '    * Escaped...',
      flee2: '    * I\'m outta here.',
      flee3: '    * I\'ve got better to do.',
      flee4: '    * Don\'t slow me down.',
      flee5: '    * Ran away with $(x) EXP\n      and $(y)G.',

      mercy_assist: '* Assist',
      mercy_flee: '* Flee',
      mercy_spare: '* Spare',

      victory1: '<32>{#p/story}* YOU WON!\n* You earned $(x) EXP and $(y)G.',
      victory2: '<32>{#p/story}* YOU WON!\n* You earned $(x) EXP and $(y)G.\n* Your LOVE increased.'
   },

   developer: {
      console: {
         header: 'ERROR',
         p_resume: {
            header: 'DISMISS',
            resume: 'Click To Dismiss'
         },
         blurb: 'An error occurred! Please send\nscreenshot to developer.'
      },
      control: {
         tab: 'CONTROL',
         headers: [ 'GENERAL', 'BATTLE' ],
         items: [
            [
               'FixMusic',
               'FixPlayer',
               'InfiniteG',
               'Interact',
               'Input',
               'Movement',
               'Noclip',
               'Save',
               'SkipText',
               'Freecam'
            ],
            [
               'CanAssist',
               'ClearBox',
               'Exit',
               'ResetBox',
               'ResetMenu',
               'CanFlee',
               'InfiniteHP',
               'PacifyAll',
               'Suicide',
               'WeakenAll'
            ]
         ],
         p_speed: {
            fps: '$(x) FPS',
            halt: 'Halt',
            header: 'GAME SPEED',
            multiplier: '$(x)x',
            next: 'More',
            prev: 'Less',
            sec: '$(x)s/frame'
         }
      },
      godhome: {
         tab: 'GODHOME',
         p_teleport: {
            header: 'ROOM',
            action: 'Teleport'
         },
         p_encounter: {
            header: 'ENCOUNTER',
            action: 'Start'
         },
         p_armor: {
            header: 'ARMOR'
         },
         p_weapon: {
            header: 'WEAPON'
         }
      },
      inspect: {
         tab: 'INSPECT',
         headers: [ 'LAYERS', 'TYPES' ],
         switches: [
            [ 'Base', 'Below', 'Main', 'Above', 'Menu' ],
            [ 'Hitbox', 'Sprite', 'Text' ]
         ],
         p_explorer: {
            header: 'EXPLORER',
            layers: [ 'Base (Explorer)', 'Below (Explorer)', 'Main (Explorer)', 'Above (Explorer)', 'Menu (Explorer)' ],
            letters: {
               animation: 'A',
               character: 'C',
               rectangle: 'R',
               entity: 'E',
               hitbox: 'H',
               object: 'O',
               player: 'P',
               sprite: 'S',
               text: 'T'
            }
         },
         debug_instructions: 'Press [TAB] to cycle debug info',
         debug: {
            a: 'A', // alive
            acceleration: 'Acceleration',
            active: 'Active',
            alpha: 'Alpha',
            anchor: 'Anchor',
            b: 'B', // bullied
            blend: 'Blend',
            border: 'Border',
            compute: 'Computed Size',
            content: 'Content',
            crop: 'Crop',
            down: 'Down',
            duration: 'Duration',
            exp: 'EXP',
            extent: 'Extent',
            f: 'F', // flirted
            face: 'Face',
            false: 'False',
            fill: 'Fill',
            fontFamily: 'Font Family',
            fontSize: 'Font Size',
            frames: 'Frames',
            gravity: 'Gravity',
            group: 'Group',
            hp: 'HP',
            index: 'Index',
            inert: 'Inert',
            key: 'Key',
            lastSavedTime: 'Last Saved Time',
            layer: 'Layer',
            layers: 'Layers',
            left: 'Left',
            metadata: 'Metadata',
            music: 'Music',
            namespace: 'Namespace',
            none1: 'NONE',
            none2: 'none',
            objects: 'Objects',
            oversaver: 'Oversaver',
            parallax: 'Parallax',
            position: 'Position',
            primed: 'Primed',
            priority: 'Priority',
            registry: 'REGISTRY',
            renderer: 'Renderer',
            resources: 'Resources',
            reverse: 'Reverse',
            right: 'Right',
            room: 'Room',
            roomState: 'Room State',
            rotation: 'Rotation',
            s: 'S', // sparable
            scale: 'Scale',
            shopSelection: 'Shop Selection',
            size: 'Size',
            spacing: 'Spacing',
            spin: 'Spin',
            sprites: 'Sprites',
            step: 'Step',
            stroke: 'Stroke',
            subcrop: 'Subcrop',
            talk: 'Talk',
            target: 'Target',
            text: 'Text',
            time: 'Time',
            tint: 'Tint',
            trackedAssets: 'Tracked Assets',
            true: 'True',
            unknown: 'UNKNOWN',
            up: 'Up',
            vars: 'Vars',
            velocity: 'Velocity',
            volatile: 'Volatile'
         }
      },
      savemod: {
         tab: 'SAVEMOD',
         header1: 'SAVE EDITOR',
         domains: [
            'Data (Booleans)',
            'Data (Numbers)',
            'Data (Strings)',
            'Flags (Booleans)',
            'Flags (Numbers)',
            'Flags (Strings)'
         ],
         p_page: {
            header: 'NAVIGATION',
            prev: 'Prev',
            next: 'Next'
         },
         prompt: 'Enter Value',
         back: 'Back'
      },
      storage: {
         tab: 'STORAGE',
         header: 'STORAGE EDITOR',
         p_container: { header: 'SELECTION', prev: 'Prev', next: 'Next' },
         display: { inventory: 'Inventory', dimboxA: 'Dim. Box A', dimboxB: 'Dim. Box B' }
      }
   },

   dialog: {
      dialog_clear_title: 'Clear File',
      dialog_notice_title: 'Notice',
      dialog_open: { buttonLabel: 'Open', name: 'SAVE files', title: 'Open File' },
      dialog_save: { buttonLabel: 'Save', name: 'SAVE files', title: 'Save File' },
      error_load: 'That file could not be parsed.',
      message_alert: [ 'OK' ],
      message_confirm: [ 'Cancel', 'OK' ],
      prompt_clear: 'Clear this file?',
      prompt_demo: 'Your SAVE file from the\nOUTERTALE demo has been\nmoved to a timeline slot.',
      prompt_save: 'Save this file?',
      prompt_save_alternate: 'Copy the text below into\na JSON file to save it\nto your device.',
      prompt_open: 'Load this file?'
   },

   extra: {
      credits: [
         [
            '§fill=#ff0§< DEVELOPER >§fill=#fff§',
            'spacey_432',
            '',
            '§fill=#ff0§< WRITER >§fill=#fff§',
            'Aster',
            'Balgamlı Kedi',
            'Bilge "mnwary"',
            'Dischnie',
            'Efe Kaya',
            'Ghostly',
            'InvincibleRacoon',
            'Jojoton56',
            'Kiwi "Quinn"',
            'neo9174',
            'Rise'
         ],
         [
            '§fill=#ff0§< WRITER >§fill=#fff§',
            'ThatGuyWhoLikesFood',
            'Turbulation',
            'Zaxento The Greedy',
            '',
            '§fill=#ff0§< ARTIST >§fill=#fff§',
            'Balgamlı Kedi',
            'Burge',
            'Deskius',
            'DESM.al',
            'Discarded Vessel',
            'Efe Kaya',
            'Fired',
            'Funtermore',
            'Ghostly'
         ],
         [
            '§fill=#ff0§< ARTIST >§fill=#fff§',
            'HolyOranges',
            'major_memestar',
            'MattSpriteMaster',
            'Medi0creking',
            'NerNot1',
            'PhyreFM',
            'Pongy25',
            'PoTheWinterCorder',
            'ProctorDorkchop02',
            'ScarletScaledDragon',
            'semi',
            'Soup Taels',
            'SquigglyWiggley',
            'Starkiteckt'
         ],
         [
            '§fill=#ff0§< ARTIST >§fill=#fff§',
            'supper12',
            'Valor52',
            'Zaxento The Greedy',
            '',
            '§fill=#ff0§< TECHNICIAN >§fill=#fff§',
            'Codetoil',
            'ryi3r',
            'ws3917',
            '',
            '§fill=#ff0§< TESTER >§fill=#fff§',
            'Alden',
            'Aspey',
            'Aster',
            'Balgamlı Kedi'
         ],
         [
            '§fill=#ff0§< TESTER >§fill=#fff§',
            'Bilge "mnwary"',
            'Brad',
            'brayjamin',
            'ClamsyMoe',
            'delta',
            'Discarded Vessel',
            'Dischnie',
            'DR4GON HE4RT',
            'Dubituar',
            'Efe Kaya',
            'Emurry',
            'Enzolos',
            'EvanGamesGoodman',
            'Fired'
         ],
         [
            '§fill=#ff0§< TESTER >§fill=#fff§',
            'FireWizard72X',
            'FuLiNT',
            'Funtermore',
            'gardnaeden',
            'Ghostly',
            'Gon UT',
            'Green Tea',
            'Huggies!',
            'ilovecookies',
            'InvincibleRacoon',
            'Jago128',
            'Joe98912',
            'Jojoton56',
            'Jonkler'
         ],
         [
            '§fill=#ff0§< TESTER >§fill=#fff§',
            'Kiwi "Quinn"',
            'lil tanski',
            'MR. PETER',
            'MSBen',
            'Murder--Sans_MDR',
            'Nanorasmus',
            'neo9174',
            'NepAnime',
            'semi',
            'Shaun Duz Stuffs',
            'SHCyank',
            'NerNot1',
            'petar3644',
            'PixelToons Jaafar'
         ],
         [
            '§fill=#ff0§< TESTER >§fill=#fff§',
            'Prezmop',
            'prymus-agd',
            'Quin',
            'RadicalRic',
            'Raelynn',
            'retr22800',
            'Rise',
            'RoCtD_14159',
            'sonicisawesome222',
            'Soup Taels',
            'spaceknife234',
            'SquigglyWiggley',
            'superkippy',
            'Teecup'
         ],
         [
            '§fill=#ff0§< TESTER >§fill=#fff§',
            'Tem in a Cowboy Hat',
            'Tenbrooks',
            'ThatGuyWhoLikesFood',
            'The Fallen Angel',
            'TheAsriel',
            'Turbulation',
            'Wild Pasta',
            'Xiao_Akatsuki',
            'xNoodlePlayz',
            'Zaxento The Greedy'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'Alden',
            '§fill=#808080§For being there for me when I\nneed someone to lean on, and\nteaching me life lessons that\nhave made me a better person.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'Aster',
            '§fill=#808080§For being one of the friendliest\npeople I know, the first person\nto believe in my vision, and\ninspiring me to finish the game.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'Balgamlı Kedi',
            '§fill=#808080§For sticking with me at every\nstage of development, right from\nthe start. Regardless of the era,\nhe\'s always been there to help.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'Ghostly',
            '§fill=#808080§For being a voice of reason when\nit comes to many aspects of the\ngame, and encouraging me to take\ntesting seriously.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'Zaxento The Greedy',
            '§fill=#808080§For being reliable, brutally\nhonest, giving me lots of\ncriticism and ideas, and being\ntrustworthy from the day we met.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'ThatGuyWhoLikesFood',
            '§fill=#808080§For helping me write crucial\nparts of the game, supporting my\nvision, and helping me express\nmyself in a whole new way.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'Bilge "mnwary"',
            '§fill=#808080§For being there to help towards\nthe end of development, and\nensuring the game\'s writing\nreaches its full potential.§fill=#fff§'
         ],
         [ 'Brought to you by §fill=#ff0§The Mavis & Co.§fill=#fff§' ]
      ],

      final_frontier: {
         header: '(( CAST ))',
         opponents: {
            froggit: {
               name: 'FROGGIT',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Pondering\nLife',
                  spare: 'Professional\nFrog',
                  flirt: 'Pondering\nLove',
                  bully: 'Hopping In\nFear'
               }
            },
            whimsun: {
               name: 'FLUTTERLYTE',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Learning To\nFly',
                  spare: 'Emboldening\nAviator',
                  flirt: 'Searching The\nSkies',
                  bully: 'Evasively\nManeuvering'
               }
            },
            moldsmal: {
               name: 'GELATINI',
               author: 'spacey_432',
               text: {
                  basic: 'Found A New\nSpace Station',
                  spare: 'Backup\nDancer',
                  flirt: 'Exotic Jelly\nDancer',
                  bully: 'Found A New\nGalaxy'
               }
            },
            loox: {
               name: 'OCULOUX',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Slightly\nBully-Like',
                  spare: 'Reformed\nBully',
                  flirt: 'Slightly\nFlirtatious',
                  bully: ''
               }
            },
            migosp: {
               name: 'SILENTE',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Exceedingly\nAgreeable',
                  spare: 'Casually\nEnjoys Life',
                  flirt: 'In Love From\nAfar',
                  bully: 'Endangerment\nDenier'
               }
            },
            mushy: {
               name: 'MUSHY',
               author: 'Balgamlı Kedi & ScarletScaledDragon',
               text: {
                  basic: 'Shooting\nBlanks',
                  spare: 'Quick-Draw\nMagician',
                  flirt: 'Frontier\nHeart-Throb',
                  bully: 'Spraying And\nPraying'
               }
            },
            finalghost: {
               name: 'LURKSALOT',
               author: 'spacey_432',
               text: {
                  basic: 'Keeping To\nThemselves',
                  spare: 'Seeking\nPhysical Contact',
                  flirt: 'Stoically\nUninvolved',
                  bully: ''
               }
            },
            stardrake: {
               name: 'STARDRAKE',
               author: 'Burge',
               text: {
                  basic: 'Still Looking\nFor Laughs',
                  spare: 'Semi-Successful\nComedian',
                  flirt: 'Still Strictly\nPG-13',
                  bully: ''
               }
            },
            chilldrake: {
               name: 'CHILLDRAKE',
               author: 'Burge',
               text: {
                  basic: 'Still Looking\nFor Supporters',
                  spare: 'Gained A Cult\nFollowing',
                  flirt: 'Since Softened\nIts Heart',
                  bully: 'Anti-Bullying\nActivist'
               }
            },
            spacetop: {
               name: 'ASTRO SERF',
               author: 'DESM.al',
               text: {
                  basic: 'Thinking About\nIts Antenna',
                  spare: 'Radio Station\nSensation',
                  flirt: 'Love Is On\nThe Air',
                  bully: 'Emergency\nBroadcaster'
               }
            },
            jerry: {
               name: 'JERRY',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Getting Ditched\nOn The Daily',
                  spare: 'Getting Ditched\nSlightly Less',
                  flirt: 'On The Road To\nRedemption',
                  bully: ''
               }
            },
            mouse: {
               name: 'WHIZKARAT',
               author: 'Zaxento The Greedy & semi',
               text: {
                  basic: 'Having An\nIdentity Crisis',
                  spare: 'Newest Member Of\nMouse Society',
                  flirt: 'Mouse Nose\nNuzzling Champion',
                  bully: 'Scurried Back To\nCat Society'
               }
            },
            doggo: {
               name: 'DOGGO',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Believes In The\nAlmighty Wrench',
                  spare: 'Found His Own\nSeeing-Eye Wolf',
                  flirt: 'In Love With His\nSeeing-Eye Wolf',
                  bully: 'Running To His\nSeeing-Eye Wolf'
               }
            },
            lesserdog: {
               name: 'CANIS MINOR',
               author: 'major_memestar',
               text: {
                  basic: 'Searching For\nAffection',
                  spare: 'Found A Loving\nOwner',
                  flirt: 'Found An Owning\nLover',
                  bully: 'Desperate For\nAffection'
               }
            },
            dogs: {
               name: 'DOGAMY & DOGARESSA',
               author: 'major_memestar',
               text: {
                  basic: 'Still Thinking\nAbout Fetch',
                  spare: 'Reigning Puppy-Dog\nEyes Champions',
                  flirt: 'Caught In Each-\nOther\'s Gaze',
                  bully: 'Defensive Puppy-\nDog Eyes Engaged'
               }
            },
            greatdog: {
               name: 'CANIS MAJOR',
               author: 'major_memestar',
               text: {
                  basic: 'Unaware Of\nLife\'s Changes',
                  spare: 'Excited By\nLife\'s Changes',
                  flirt: 'Touched By\nLife\'s Changes',
                  bully: ''
               }
            },
            woshua: {
               name: 'SKRUBBINGTON',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Only 99.1\nPercent Clean',
                  spare: 'Power-Washing\nPowerhouse',
                  flirt: 'Hot Tub\nManufacturer',
                  bully: 'Overpowered\nPressure Washer'
               }
            },
            moldbygg: {
               name: 'GELATA',
               author: 'spacey_432',
               text: {
                  basic: 'Looking For A\nBaby Sitter',
                  spare: 'Slime-Powered\nBarstool',
                  flirt: 'Sexy Sitcom\nRegular',
                  bully: 'Glorified\nWrestling Prop'
               }
            },
            radtile: {
               name: 'RADTILE',
               author: 'Balgamlı Kedi & Zaxento The Greedy',
               text: {
                  basic: 'Wallowing In\nImperfection',
                  spare: 'Improving His\nSelf-Image',
                  flirt: 'Dating His Own\nReflection',
                  bully: 'Headed For An\nUgly Future'
               }
            },
            shyren: {
               name: 'SHYREN',
               author: 'Ghostly',
               text: {
                  basic: 'Back To Taking\nPiano Lessons',
                  spare: 'Mettaton\'s\nNew Lead Singer',
                  flirt: 'In Love With\nA Ghost',
                  bully: 'Can\'t Sing Without\nA Synthesizer'
               }
            },
            doge: {
               name: 'DOGE',
               author: 'major_memestar',
               text: {
                  basic: 'Construction Site\nDrill Sergeant',
                  spare: 'Bought A Lifetime\nSpa Subscription',
                  flirt: 'Felt Puppy Love\nFor The First Time',
                  bully: ''
               }
            },
            muffet: {
               name: 'MUFFET',
               author: 'major_memestar',
               text: {
                  basic: 'Looking For Her\nNext Payout',
                  spare: 'Caring For The\nSpider Clans',
                  flirt: 'Picnic Date\nMatchmaker',
                  bully: ''
               }
            },
            pyrope: {
               name: 'HOTWIRE',
               author: 'semi',
               text: {
                  basic: 'Waiting For The\nBeat To Drop',
                  spare: 'Lightning-Fast\nRapper',
                  flirt: 'Rapper Turned\nLove Song Writer',
                  bully: 'Rap Battling To\nThe Near-Death'
               }
            },
            tsundere: {
               name: 'TSUNDERIDEX',
               author: 'spacey_432',
               text: {
                  basic: 'Flying Deeper\nInto Denial',
                  spare: 'Sneaking Up On\nYou At Warp Speed',
                  flirt: 'Tsun To Be\nYour Dere-Dere',
                  bully: 'Finally Met\nIts Match'
               }
            },
            perigee: {
               name: 'PERIGEE',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Another Day,\nAnother Conflict',
                  spare: 'Interplanetary\nAmbassador',
                  flirt: 'Encouraging Love\nIn Others',
                  bully: 'Showing Kindness\nThrough The Pain'
               }
            },
            rg: {
               name: 'RG 03 & RG 04',
               author: 'semi',
               text: {
                  basic: 'In Search Of\nChildhood Friends',
                  spare: 'Use Your\nImagination',
                  flirt: 'Please Use Your\nImagination',
                  bully: 'Royal Guard\nRetirees'
               }
            },
            glyde: {
               name: 'GLYDE',
               author: 'Burge',
               text: {
                  basic: 'Not Your Ideal\nBusiness Partner',
                  spare: 'A Little Less\nShady Than Usual',
                  flirt: 'Not Your Ideal\nBedfellow',
                  bully: ''
               }
            },
            burgie: {
               name: 'BURGERPANTS',
               author: 'Pongy25',
               text: {
                  basic: 'Running Hastily\nAt The Life Ahead',
                  spare: 'Looking Forward\nTo The Life Ahead',
                  flirt: 'Finding Love\nIn The Life Ahead',
                  bully: ''
               }
            },
            madjick: {
               name: 'COZMO',
               author: 'semi',
               text: {
                  basic: 'Looking For A\nDictionary',
                  spare: 'Famous\nMagician',
                  flirt: 'Found A New Kind\nOf Magic',
                  bully: ''
               }
            },
            knightknight: {
               name: 'TERRESTRIA',
               author: 'major_memestar',
               text: {
                  basic: 'In Search Of\nThe Past',
                  spare: 'Renowned\nHistorian',
                  flirt: 'Has A Crush On\nThe Homeworld',
                  bully: ''
               }
            },
            froggitex: {
               name: 'FINAL FROGGIT',
               author: 'PoTheWinterCorder',
               text: {
                  basic: 'Keeping Its\nWisdom To Itself',
                  spare: 'Sharing Its\nWisdom Openly',
                  flirt: 'Using Its Wisdom\nFor Love',
                  bully: 'Using Its Wisdom\nFor Survival'
               }
            },
            whimsalot: {
               name: 'FLUTTERKNYTE',
               author: 'spacey_432',
               text: {
                  basic: 'Still Working\nEvery Day',
                  spare: 'Finally Took\nA Break',
                  flirt: 'Heart\'s In\nThe Right Place',
                  bully: 'Working Harder\nOut Of Fear'
               }
            },
            astigmatism: {
               name: 'EYEWALKER PRIME',
               author: 'semi',
               text: {
                  basic: 'Still A\nBig Bully',
                  spare: 'Domineering\nEye Doctor',
                  flirt: 'Domineering\nLeather Tailor',
                  bully: 'Overthrown By\nAn Oculoux'
               }
            },
            migospel: {
               name: 'SILENCIO',
               author: 'Balgamlı Kedi',
               text: {
                  basic: 'Still A\nShameless Coward',
                  spare: 'A Little Less Of\nA Coward',
                  flirt: 'In Love With\nIts Fear',
                  bully: 'Running Faster\nThan Ever Before'
               }
            },
            mushketeer: {
               name: 'MUSHKETEER',
               author: 'Balgamlı Kedi & Ghostly',
               text: {
                  basic: 'One Mushroom\nArmy',
                  spare: 'Hardened Warrior\nSeeking Peace',
                  flirt: 'Defeated By The\nPower Of Love',
                  bully: 'Scared\nStraight'
               }
            }
         },
         swords: {
            papyrus: {
               name: 'PAPYRUS',
               author: 'ProctorDorkchop02 & MattSpriteMaster'
            },
            sans: {
               name: 'SANS',
               author: 'ProctorDorkchop02 & Fired'
            },
            undyne: {
               name: 'UNDYNE',
               author: 'major_memestar'
            },
            alphys: {
               name: 'ALPHYS',
               author: 'major_memestar'
            },
            mewmew: {
               name: 'MEW MEW',
               author: 'spacey_432'
            },
            napstablook: {
               name: 'NAPSTABLOOK',
               author: 'spacey_432'
            },
            mettaton: {
               name: 'METTATON',
               author: 'MattSpriteMaster'
            },
            toriel: {
               name: 'TORIEL',
               author: 'MattSpriteMaster'
            },
            asgore: {
               name: 'ASGORE',
               author: 'MattSpriteMaster'
            },
            monsterkid: {
               name: 'MONSTER KID',
               author: 'spacey_432'
            },
            asriel: {
               name: 'ASRIEL',
               author: 'Medi0creking & MattSpriteMaster'
            }
         }
      },

      langPrompt: '[↑ or ↓] to Select / [Z or ENTER] to Confirm',
      epilepsyInfo:
         'To whom it may concern,\n\nThis game contains §fill=#ff0§flashing images§fill=#fff§\nwhich may be reduced via the\n§fill=#ff0§settings menu§fill=#fff§.\n\n',
      epilepsyKeys: '§fill=#808080§Press [Z or ENTER] to Continue',

      quitText1: 'Quitting',
      quitText2: 'Quitting.',
      quitText3: 'Quitting..',

      real1: [
         [
            'Thank you for playing Outertale.',
            'Working on this project has been an honor,',
            'and a pleasure on my part.'
         ],
         [ 'When I started this journey, I never', 'thought I\'d get this far, but here we', 'are anyway, at the end.' ],
         [
            'For me, UNDERTALE was a life-changing',
            'experience, and one that was very hard to',
            'let go of after I first played it.'
         ],
         [
            'So, with OUTERTALE, I wanted to give you',
            'another chance to exist in a world like it,',
            'as if it were your first time.'
         ],
         [
            'I hope I\'ve given you that chance.',
            'I hope you\'ve come away satisfied with',
            'the time you\'ve spent in this world.'
         ],
         [
            'No matter what you\'ve done in your life,',
            'your actions here speak volumes about the',
            'kind of person you really are.'
         ],
         [
            'It\'s because of you that you got the ending',
            'you did, and nothing can take that',
            'experience away from you.'
         ],
         [ 'Despite your mistakes... you are awesome,', 'and you deserve love and attention.', 'Remember that, okay?' ]
      ],
      real2: 'Take care of yourself, "$(x)."',

      end1: 'THE END',
      end2: 'THE END...?',

      restartText1: 'Restarting',
      restartText2: 'Restarting.',
      restartText3: 'Restarting..',

      title: 'OUTERTALE'
   },

   gamepad: {
      prompt: 'GAMEPAD SETUP',
      prompt_desc:
         'Use an input on your gamepad to assign\nit to the in-game action.\n\nUse the input again to confirm, or use\nother inputs to assign those as well.\n\nPress ESC to skip setup.',
      prompt_counter: 'Inputs Assigned: $(x)',
      z: '[Z or ENTER] - Confirm',
      x: '[X or SHIFT] - Cancel',
      c: '[C or CTRL] - Menu (In-game)',
      u: '[UP or W] - Move Up',
      l: '[LEFT or A] - Move Left',
      d: '[DOWN or S] - Move Down',
      r: '[RIGHT or D] - Move Right',
      f: '[F4] - Fullscreen',
      prompt_done: 'Setup complete.\nPress any button to continue.',
      prompt_done_browser: '\nNote: On this platform, the gamepad may\nnot always be able to enter fullscreen.',
      prompt_load:
         'A gamepad has already been set up.\nPress any button to continue, or press\nany button three times in rapid\nsuccession to restart setup.\n\nPress ESC to skip setup.'
   },

   general: {
      asriel: 'Asriel',
      asriel_location: 'The Oblivion',
      disabled: 'DISABLED',
      enabled: 'ENABLED',
      finish: 'Press [X] to Finish',
      frisk: 'Frisk',
      g: 'G',
      hp: 'HP',
      inf: 'INF',
      landing1: '[PRESS Z OR ENTER]',
      lv: 'LV',
      mystery1: '§mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz§aaaaaa§mystify=§',
      mystery2: '{@mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify=}',
      mystery2l: '{@mystify=abcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify=}',
      mystery2u: '{@mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZ}aaaaaa{@mystify=}',
      no: 'No',
      nominal: '§fill=#0f0§NOMINAL',
      percent: '$(x)%',
      player: 'player',
      settings: 'Settings',
      unknown: '?',
      xm: 'XM',
      yes: 'Yes'
   },

   menu: {
      box1: 'INVENTORY',
      box2: 'BOX',
      key1: 'KEYRING',

      confirm1: 'Is this name correct?',
      confirm2: 'A name has already\nbeen chosen.',
      confirm3: 'Go back',

      footer: 'OUTERTALE V6.00 (c) 2025 SPACEY_432',

      heal1: '* (HP fully restored.)',
      heal2: '* (You recovered $(x) HP.)',
      heal3: '* (You lost $(x) HP.)',
      heal4: '* (HP fully depleted.)',
      heal5: '* (You gained $(x) HP.)',

      item1: 'USE',
      item2: 'EQUIP',
      item3: 'INFO',
      item4: 'DROP',

      load1: 'Continue',
      load2: 'Observe',
      load3: 'Reset',
      load4: 'True Reset',

      name1: 'Name the stranded human.',
      name2: 'Quit',
      name3: 'Backspace',
      name4: 'Done',
      name5: [
         [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ],
         [ 'H', 'I', 'J', 'K', 'L', 'M', 'N' ],
         [ 'O', 'P', 'Q', 'R', 'S', 'T', 'U' ],
         [ 'V', 'W', 'X', 'Y', 'Z' ],
         [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ],
         [ 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
         [ 'o', 'p', 'q', 'r', 's', 't', 'u' ],
         [ 'v', 'w', 'x', 'y', 'z' ]
      ],
      name6: (index: number) => {
         const pos = index % 26;
         return {
            x: 312 + CosmosMath.spread(192, pos % 7, 7),
            y: (index < 26 ? 200 : 320) + CosmosMath.spread(42, Math.floor(pos / 7), Math.ceil(26 / 7))
         };
      },
      name7: {
         // no names
         '': 'You must choose a name.',
         no: 'No?',

         // meta names
         bully: 'Hm...?',
         flirt: 'Hm...?',
         geno: 'Hm...?',
         mercy: 'Hm...?',
         murder: 'Hm...?',
         paci: 'Hm...?',
         maybe: 'Maybe?',
         yes: 'Yes?',

         // mood names
         afraid: 'Take heart.\nThere is nothing to be afraid of here.',
         amused: 'A light-hearted spirit will serve you well on your journey.',
         angry: 'Take heart.\nYour frustrations are behind you now.',
         angsty: 'Take heart.\nThe story is yours, no matter what you feel.',
         antsy: 'May tranquility come upon you as you embark on your journey.',
         bored: 'Take heart.\nYour story is as interesting as you make it.',
         brainy: 'May your quality of speech translate to action on your journey.',
         brave: 'A courageous heart will serve you well on your journey.',
         brazen: 'A courageous heart will serve you well on your journey.',
         calm: 'A sense of serenity will do you wonders on your journey.',
         clever: 'May your ingenuity surpass the challenges on your journey.',
         cocky: 'A confident mindset will take you far on your journey.',
         crafty: 'May your inginuity surpass the challenges on your journey.',
         crazy: 'May balance come upon you as you embark on your journey.',
         daring: 'A courageous heart will serve you well on your journey.',
         dizzy: 'May balance come upon you as you embark on your journey.',
         dumb: 'Take heart.\nThere is much to be learned on the road ahead.',
         edgy: 'May the tapestry of chaos and order satisfy you on your journey.',
         elated: 'A light-hearted spirit will serve you well on your journey.',
         empty: 'May your story gain meaning in this cocoon amidst the darkness.',
         flirty: 'May the experience be as playful as you desire.',
         giddy: 'A light-hearted spirit will serve you well on your journey.',
         goofy: 'A light-hearted spirit will serve you well on your journey.',
         greedy: 'May the experience be as excessive as you desire.',
         guilty: 'Take heart.\nYou have nothing to feel ashamed of now.',
         happy: 'A light-hearted spirit will serve you well on your journey.',
         hollow: 'May your story gain meaning in this cocoon amidst the darkness.',
         humble: 'A temperate ego will take you far on your journey.',
         hungry: 'May the experience provide the sustenance you require.',
         insane: 'May balance come upon you as you embark on your journey.',
         irate: 'Take heart.\nYour frustrations are behind you now.',
         jaded: 'May your story bring forth the emotion you strive to feel.',
         lazy: 'May your choices be as effortless as they come.',
         lively: 'A light-hearted spirit will serve you well on your journey.',
         livid: 'Take heart.\nYour frustrations are behind you now.',
         lonely: 'Take heart.\nThere is much companionship to be had here.',
         lucky: 'May your fortune carry you forward on your journey.',
         mad: 'Take heart.\nYour frustrations are behind you now.',
         manic: 'May balance come upon you as you embark on your journey.',
         meek: 'A temperate ego will take you far on your journey.',
         modest: 'A temperate ego will take you far on your journey.',
         nervy: 'May tranquility come upon you as you embark on your journey.',
         moody: 'Take heart.\nThe story is yours, no matter what you feel.',
         numb: 'May your story bring forth the emotion you strive to feel.',
         proud: 'A confident mindset will take you far on your journey.',
         rowdy: 'May the tapestry of chaos and order please you on your journey.',
         sad: 'Take heart.\nYour story is as uplifting as you make it.',
         sane: 'May your stability provide a solid foundation on your journey.',
         sassy: 'May the experience be as playful as you desire.',
         sated: 'May the experience only add to your state of satisfaction.',
         scared: 'Take heart.\nThere is nothing to be afraid of here.',
         serene: 'A sense of serenity will do you wonders on your journey.',
         shy: 'May the experience be as comforting as you desire.',
         silly: 'A light-hearted spirit will serve you well on your journey.',
         sleepy: 'May the experience provide the energy you require.',
         smug: 'A confident mindset will take you far on your journey.',
         sorry: 'Take heart.\nYou have nothing to feel ashamed of now.',
         spry: 'May your overflowing energy power you through your journey.',
         steady: 'May your stability provide a solid foundation on your journey.',
         stupid: 'Take heart.\nThere is much to be learned on the road ahead.',
         timid: 'Take heart.\nThere is nothing to be afraid of here.',
         tired: 'May the experience provide the energy you require.',
         unruly: 'May the tapestry of chaos and order please you on your journey.',
         wacky: 'A light-hearted spirit will serve you well on your journey.',
         witty: 'May your quality of speech translate to action on your journey.',
         zen: 'May your stability provide a solid foundation on your journey.',

         // historical figures
         erogot: 'I am honored by your choice.',
         roman: 'Let the experiment begin.',
         thomas: 'Let the experiment begin.',

         // humans
         chara: 'The true name.',
         frisk: 'This name is incorrect.',

         // outlands
         blooky: '............\n(They\'re powerless to stop you.)',
         dummy: '............\n(It\'s not much for conversation.)',
         lurky: 'Hello.',
         mushy: 'Saddle up!',
         napsta: '............\n(They\'re powerless to stop you.)',
         torie: 'Well... I suppose that works...',
         toriel: 'I think you should think of your own name, my child.',
         twink: 'Really...',
         twinkl: 'Nice try, idiot.',
         twinky: 'Nice try, idiot.',
         walker: 'Don\'t you mean "Eyewalker?"',

         // starton
         astro: 'Check out my antenna!',
         cdrake: 'Guh huh huh, nice one.',
         chilly: 'Guh huh huh, nice one.',
         dogamy: 'Huh? What\'s that smell?',
         doggo: 'It\'s m-moving! I-I-It\'s shaking!',
         jerry: 'Jerry.',
         major: '(The dog jumped into your lap.)',
         minor: '(Pant pant)',
         papyrs: 'I\'LL ALLOW IT!!!!',
         papyru: 'I\'LL ALLOW IT!!!!',
         san: 'ok.',
         sans: 'nope.',
         sdrake: 'A "stellar" choice.',
         serf: 'Check out my antenna!',
         starry: 'A "stellar" choice.',

         // foundry
         bob: 'A pleasing nomenclature, no?',
         doge: 'I am not amused.',
         gelata: 'Roar.',
         gerson: 'Wah ha ha! Why not?',
         mdummy: 'What. What! WHAT!',
         mkid: 'That\'s my name!!',
         monkid: 'That\'s my name!!',
         muffet: 'Ahuhuhu~\nYou must have great taste, dearie~',
         raddy: 'Hey!\nOnly Skrubby gets to call me that!',
         radtie: 'Sorry, but you\'re a letter shy.',
         radtil: 'Sorry, but you\'re a letter shy.',
         shyren: '...?',
         skrub: 'Clean name.',
         skrubb: 'Clean name.',
         tem: 'hOI!',
         temmie: 'hOI!',
         undyn: 'Ngah, fine.',
         undyne: 'Get your OWN name!',

         // aerialis
         alphy: 'Uh.... OK?',
         alphys: 'D-don\'t do that.',
         bpants: 'You are really scraping the bottom of the barrel.',
         bratty: 'Like, OK I guess.',
         burgie: 'You like my name, little buddy?',
         catty: 'Bratty! Bratty! That\'s MY name!',
         cozmo: 'A fellow wizard?',
         glyde: 'Slick choice, homeslice.',
         hapsta: 'Now you\'re just being rude, darling.',
         mett: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',
         metta: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',
         mtt: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',

         // notable NPCs
         aaron: 'Is this name correct? ;)',
         grillb: 'Hot, but not hot enough.',
         grilly: 'Hot, but not hot enough.',
         gyft: 'You don\'t have to do that...',
         heats: 'You KNEW!?',
         kabakk: 'Respect my AUTHORITY!',
         vulkin: 'Ahh! Thank you~',
         zorren: 'Thanks for, uh, using my name.',

         // citadel
         asgor: 'You can?',
         asgore: 'You cannot.',
         asrie: '... fine.',
         asriel: '...'
      },
      name8: {
         san: [ content.fComicSans, 16 ],
         sans: [ content.fComicSans, 16 ],
         papyrs: [ content.fPapyrus, 16 ],
         papyru: [ content.fPapyrus, 16 ]
      } as Partial<CosmosKeyed<[CosmosFont, number]>>,
      name9: [ '', 'alphys', 'asgore', 'asriel', 'frisk', 'sans', 'toriel', 'twinkl', 'twinky', 'undyne' ],

      save1: 'Save',
      save2: 'Return',
      save3: 'File saved.',

      settings1: 'SETTINGS',
      settings2: 'EXIT',
      settings3: 'SOUND FX',
      settings4: 'MUSIC',
      settings5: 'FANCY GRAPHICS',
      settings6: 'FLASHING IMAGERY',
      settings6a: 'NORMAL',
      settings6b: 'REDUCED',
      settings7: 'OPEN MOD FOLDER',

      sidebar1: 'ITEM',
      sidebar2: 'STAT',
      sidebar3: 'CELL',
      sidebar4: 'CONF',
      sidebar5: 'S',

      start1: [
         '--- Instruction ---',
         '[Z or ENTER] - Confirm',
         '[X or SHIFT] - Cancel',
         '[C or CTRL] - Menu (In-game)',
         '[F4] - Fullscreen',
         '[Hold ESC] - Restart',
         'When HP is 0, you lose.'
      ],
      start2: 'Begin Game',

      stat1: 'AT',
      stat2: 'DF',
      stat3: 'WEAPON',
      stat4: 'ARMOR',
      stat5: 'GOLD',
      stat6: 'EXP',
      stat7: 'NEXT',
      stat8: '§fill=#ff0§Warning:\nNon-canon\ntimeline.',
      stat9: 'KILLS',
      stat10: 'BULLY',
      stat11: 'FLIRT',
      stat12: 'STATUS',
      stat13: '"$(x)"',

      story1: [ '<24>{#p/storyteller}Long ago, two species ruled the solar system: HUMANS and MONSTERS.{^35}{}' ],
      story2: [ '<24>As time passed, a war broke out between the two species.{^35}{}' ],
      story3: [ '<24>After the MONSTERS\' home planet was destroyed, HUMANS declared victory.{^35}{}' ],
      story4: [ '<24>The remaining MONSTERS were banished to an abandoned outpost.{^35}{}' ],
      story5: [ '<24>A powerful force field was erected, and the MONSTERS were sealed in.{^35}{}' ],
      story6: [ '<24>Many years later.{^8}.{^8}.{^35}{}' ],
      story7: [ '<#24>     EBOTT SECTOR     \n         251X{^35}{}' ],
      story8: [ '<24>Tales speak of a place from which spacecraft never return.{^35}{}' ],
      story9: [ '<24>{^100}{}' ],
      story10: [ '<24>{^100}{}' ],
      story11: [ '<24>{^35}{}' ]
   },

   timeline: {
      main: 'Resume Canon Timeline',
      main_ex: 'Start Canon Timeline',
      timelines: 'Other Slots',
      bisect: 'Bisect',
      delete: 'Delete',
      instruction: '[ESC] to Cancel / [ENTER] to Confirm',
      instruction_gamepad: 'Press any button on your gamepad to open the keyboard.',
      launch: 'Launch',
      rename: 'Rename',
      create: 'Create New',
      placeholder: 'Enter Timeline Name',
      confirm: 'Are You Sure?'
   }
};
