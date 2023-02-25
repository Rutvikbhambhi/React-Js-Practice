import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = "articles";
  [{
    status: "ok",
    totalResults: 94,
    articles: [
      {
        source: {
          id: null,
          name: "MacRumors",
        },
        author: "Juli Clover",
        title: "Apple Releases Studio Display 16.4 Firmware Beta",
        description:
          "Alongside the maCOS 13.3 beta that came out this week, Apple has provided a beta of new 16.4 firmware that's designed for the Studio Display.\n\n\n\n\n\nAll Studio Display models are able to receive over-the-air firmware updates, but this firmware update is limited…",
        url: "https://www.macrumors.com/2023/02/17/apple-releases-studio-display-16-4-firmware-beta/",
        urlToImage:
          "https://images.macrumors.com/t/iXPd1H5IC6TMnWWuRHItlsBuG4g=/2250x/article-new/2022/03/apple-studio-display-blue.jpg",
        publishedAt: "2023-02-18T00:17:01Z",
        content:
          "Alongside the maCOS 13.3 beta that came out this week, Apple has provided a beta of new 16.4 firmware that's designed for the Studio Display.\r\nAll Studio Display models are able to receive over-the-a… [+255 chars]",
      },
      {
        source: {
          id: null,
          name: "9to5Mac",
        },
        author: "Zac Hall",
        title:
          "Apple Studio Display firmware update available to macOS Ventura 13.3 beta testers",
        description:
          "Apple released a new round of software updates this week for iPhone, iPad, Mac, and more. Now it’s the Studio Display’s turn for Mac users running macOS 13.3 beta. Apple Studio Display 16.4 is available for monitors connected to Macs running this week’s macOS…",
        url: "https://9to5mac.com/2023/02/17/apple-studio-display-16-4/",
        urlToImage:
          "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/16.4-studio-display.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2023-02-18T00:35:42Z",
        content:
          "Apple released a new round of software updates this week for iPhone, iPad, Mac, and more. Now its the Studio Display’s turn for Mac users running macOS 13.3 beta.\r\nApple Studio Display 16.4 is availa… [+2070 chars]",
      },
      {
        source: {
          id: null,
          name: "Slickdeals.net",
        },
        author: "iconian",
        title: 'LG OLED 4K TV\'s (2022): 48" C2 $758, 55" C2 $1038 + free s/h',
        description:
          'BuyDig via eBay has *48" LG C2 Series HDR 4K Smart OLED TV* (2022, OLED48C2PUA) on sale for $946.99 - 20% off w/ coupon code PRESDAY20 = *$**757.59*. *Shipping is free*. \n \nBuyDig via eBay also has...',
        url: "https://slickdeals.net/f/16456666-lg-c2-4k-oled-tvs-2022-55-oled55c2pua-1038-48-oled48c2pua-758-free-shipping",
        urlToImage:
          "https://static.slickdealscdn.com/attachment/4/8/2/3/7/7/13026577.attach",
        publishedAt: "2023-02-18T00:00:00Z",
        content:
          'BuyDig via eBay has 48" LG C2 Series HDR 4K Smart OLED TV (2022, OLED48C2PUA) on sale for $946.99 - 20% off w/ coupon code PRESDAY20 = $757.59. Shipping is free.BuyDig via eBay also has 55" LG C2 Ser… [+921 chars]',
      },
      {
        source: {
          id: null,
          name: "Deadline",
        },
        author: "Nancy Tartaglione",
        title:
          "BAFTA Film Awards Weekend Party List Features New Venues & A Mega-Combo",
        description:
          "It's BAFTA weekend here in London, and that means it's time for our annual rundown of the festivities in store for nominees, execs and other well-heeled invitees. Notably in 2023, there’s a new venue for the Film Awards ceremony and dinner, while the roster o…",
        url: "https://deadline.com/2023/02/2023-bafta-film-awards-party-list-1235263192/",
        urlToImage:
          "https://deadline.com/wp-content/uploads/2023/02/bafta-richard-e-grant.jpg?w=1024",
        publishedAt: "2023-02-18T00:19:20Z",
        content:
          "It's BAFTA weekend here in London, and that means it's time for our annual rundown of the festivities in store for nominees, execs and other well-heeled invitees. Notably in 2023, there’s a new venue… [+4947 chars]",
      },
      {
        source: {
          id: null,
          name: "Gadgethacks.com",
        },
        author: "Justin Meyers",
        title:
          "Safari Finally Has More Dark Mode Powers for Your iPhone, Making Night Web Surfing More Comfortable",
        description:
          "Not all websites are created equal, and that's why Safari doesn't apply Dark Mode to each webpage you visit during your iPhone's system-wide dark appearance. But in Safari's latest update, Apple gives its web browser more power to automatically apply Dark Mod…",
        url: "https://ios.gadgethacks.com/how-to/safari-finally-has-more-dark-mode-powers-for-your-iphone-making-night-web-surfing-more-comfortable-0385325/",
        urlToImage:
          "https://img.gadgethacks.com/img/82/19/63812246182184/0/safari-finally-has-more-dark-mode-powers-for-your-iphone-making-night-web-surfing-more-comfortable.1280x600.jpg",
        publishedAt: "2023-02-18T00:04:00Z",
        content:
          "Not all websites are created equal, and that's why Safari doesn't apply Dark Mode to each webpage you visit during your iPhone's system-wide dark appearance. But in Safari's latest update, Apple give… [+1537 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Matías S. Zavia",
        title:
          "Filtrado el diseño del iPhone 15 Pro con puerto USB-C, botones capacitivos y cámaras aún más grandes",
        description:
          "Ya hemos llegado a ese punto del ciclo de noticias en el que empezamos a ver renders del próximo iPhone basados en archivos esquemáticos filtrados.Read more...",
        url: "https://es.gizmodo.com/filtrado-el-diseno-del-iphone-15-pro-con-puerto-usb-c-1850130770",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/38e29cd33654ff50a769568496f43409.jpg",
        publishedAt: "2023-02-18T00:37:00Z",
        content:
          "Ya hemos llegado a ese punto del ciclo de noticias en el que empezamos a ver renders del próximo iPhone basados en archivos esquemáticos filtrados.\r\nEn esta ocasión, 9to5Mac dice haber obtenido un mo… [+1727 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Andy Wang, Contributor, \n Andy Wang, Contributor\n https://www.forbes.com/sites/andywang-1/",
        title: "B.J. Novak's Restaurant Pop-Up Creates 'Scream'-Worthy Burger",
        description:
          "Chain, a mischief-loving pop-up that has lovingly reinterpreted iconic dishes from Taco Bell, Chili’s and other chain restaurants, is serving up the Stabby Meal.",
        url: "https://www.forbes.com/sites/andywang/2023/02/17/bj-novaks-restaurant-pop-up-creates-scream-worthy-burger/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/63effa6ad1958a1136b8d5ae/0x0.jpg?format=jpg&width=1200",
        publishedAt: "2023-02-18T00:31:59Z",
        content:
          "Chain takes a stab at fast food burgers with its latest drop.\r\nJustin Slade McClain\r\nWhat if you think youre in on the joke and you get murdered anyway? Also, whats your favorite scary fast food meal… [+2819 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Jason R. Rich, Forbes Staff, \n Jason R. Rich, Forbes Staff\n https://www.forbes.com/sites/forbes-personal-shopper/people/jasonrich/",
        title:
          "The Best Android Phones That Do Everything (And Make Calls, Too)",
        description:
          "Thanks to an vast selection and enormous variety, Android phones are a great alternative to Apple's iPhone. These are the best Android phones you can buy today.",
        url: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-android-phones/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/63e6745040d4a501b7724fec/0x0.jpg?format=jpg&width=1200",
        publishedAt: "2023-02-18T00:13:49Z",
        content:
          "If you want a phone packed with the latest technology and tons of customization, youll inevitably look towards one of the best Android phones, such as our pick for best overall, the Samsung Galaxy S2… [+17485 chars]",
      },
      {
        source: {
          id: null,
          name: "Cool3c.com",
        },
        author: "Mash Yang",
        title:
          "微軟正式確認 Parallels Desktop 在 Arm 架構 Mac 上安裝 Windows 的授權合法性 但功能上並未作調整",
        description:
          "目前Arm架構Mac採用Parallels Desktop相容方式依然無法對應32位元的Arm架構應用程式，部分驅動程式依然需要透過模擬方式使用，而在Arm架構上執行x86架構應用程式的效能相對也會因為模擬方式受限。 在微軟稍早更新技術支援頁面中，微軟確定將可讓使用者自行購買Windows 11 Pro合法授權版本，並且能配合Parallels Desktop用於搭載Apple Silicon處理器的Mac機種。 在此之前，雖然使用者可以透過Windows Insider Program計畫，自行下載以測試使用為…",
        url: "https://www.cool3c.com/article/189558",
        urlToImage:
          "https://sw.cool3c.com/article/2023/cfd70f87-6ca4-43a5-a2d3-a89680df0d4e.jpg?fit=max&w=1400&q=80",
        publishedAt: "2023-02-18T03:03:35Z",
        content:
          "ArmMacParallels Desktop32ArmArmx86\r\nWindows 11 ProParallels DesktopApple SiliconMac\r\nWindows Insider ProgramArmWindows 10Windows 11Apple SiliconMac\r\nWindows 11 ProParallels DesktopApple SiliconMacWin… [+109 chars]",
      },
      {
        source: {
          id: null,
          name: "Cult of Mac",
        },
        author: "Scout Tafoya",
        title:
          "Dear Edward takes a predictable path to boredom [Apple TV+ recap] ★☆☆☆☆",
        description:
          "This week on the Apple TV+ series about the daisy chain of grief after a plane crash, Edward learns his dead brother had a secret girlfriend.\n(via Cult of Mac - Tech and culture through an Apple lens)",
        url: "https://www.cultofmac.com/?p=805106",
        urlToImage:
          "https://www.cultofmac.com/wp-content/uploads/2023/02/Dear_Edward_Photo_010506.jpeg",
        publishedAt: "2023-02-18T01:00:59Z",
        content:
          "This week on Dear Edward, the Apple TV+ series about the daisy chain of grief that connects dozens of people after a plane crash, survivor Edward learns that his dead brother had a secret girlfriend.… [+7488 chars]",
      },
      {
        source: {
          id: null,
          name: "Daily Beast",
        },
        author: "Coleman Spilde",
        title:
          "'RuPaul's Drag Race' Just Aired Its Twistiest Episode of the Season",
        description:
          "Photo Illustration by Elizabeth Brockway/The Daily Beast/MTV\r\nGay people love to sit in front of their televisions and scream, “‘DRAG RACE’ LIP SYNC…BEST” into their Apple TV remotes. In fact, they say that if you stand in front of your mirror on a Friday nig…",
        url: "https://www.thedailybeast.com/obsessed/rupauls-drag-lalaparuza-recap-lip-syncs-and-biggest-twists-of-the-season",
        urlToImage:
          "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1676671788/230217-rupauls-drag-race-hero_qtg7v2",
        publishedAt: "2023-02-18T02:00:00Z",
        content:
          "Gay people love to sit in front of their televisions and scream, DRAG RACE LIP SYNCBEST into their Apple TV remotes. \r\nIn fact, they say that if you stand in front of your mirror on a Friday night an… [+8357 chars]",
      },
      {
        source: {
          id: null,
          name: "Daily Beast",
        },
        author: "Kate Briquelet",
        title: "Socialite to Sex Offender: Inside Hadley Palmer's Downfall",
        description:
          "Photo Illustration by The Daily Beast / Connecticut State Police Department\r\nWhen Hadley Palmer walked out of prison last week, it was the latest chapter in a sordid crime story that has friends in her tony Connecticut enclave scratching their heads about how…",
        url: "https://www.thedailybeast.com/inside-hadley-palmers-downfall-from-socialite-to-sex-offender",
        urlToImage:
          "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1676336528/230213-Briquelet-Hadley-Palmer-tease_w6f015",
        publishedAt: "2023-02-18T02:39:47Z",
        content:
          "When Hadley Palmer walked out of prison last week, it was the latest chapter in a sordid crime story that has friends in her tony Connecticut enclave scratching their heads about how a devoted mother… [+37047 chars]",
      },
      {
        source: {
          id: null,
          name: "Taisy0.com",
        },
        author: "taisy0",
        title: "Apple、｢iOS 16.4｣と｢iPadOS 16.4｣のパブリックベータ1を提供開始",
        description:
          "本日、Appleが、テスター向けに「iOS 16.4」と「iPadOS 16.4」のパブリックベータ1の提供を開始しました。 本パブリックベータ版はApple Beta Software Programに登録することでダ ...",
        url: "https://taisy0.com/2023/02/18/168618.html",
        urlToImage: "https://taisy0.com/wp-content/uploads/2022/06/ios16ss.jpg",
        publishedAt: "2023-02-18T00:03:33Z",
        content: "MacBook Pro 14MacBook AirAlpha Messenger",
      },
      {
        source: {
          id: null,
          name: "Taisy0.com",
        },
        author: "taisy0",
        title: "Apple、｢macOS Ventura 13.3｣のパブリックベータ1を提供開始",
        description:
          "本日、Appleが、テスター向けに「macOS Ventura 13.3」のパブリックベータ1の提供を開始しました。 本パブリックベータ版はApple Beta Software Programに登録することでダウンロー ...",
        url: "https://taisy0.com/2023/02/18/168625.html",
        urlToImage:
          "https://taisy0.com/wp-content/uploads/2022/06/macOSVentura1.jpg",
        publishedAt: "2023-02-18T00:13:34Z",
        content: "ApplemacOS Big Sur 11.7.4",
      },
      {
        source: {
          id: null,
          name: "Taisy0.com",
        },
        author: "taisy0",
        title:
          "Apple、｢Studio Display｣のファームウェアアップデート16.4を｢macOS 13.3 beta｣向けに配信開始",
        description:
          "9To5Macによると、Appleが「macOS 13.3 beta」を利用するユーザーに対し、「Studio Display」向けの”ファームウェアアップデート 16.4″をリリースしていることがわかりました。 このア ...",
        url: "https://taisy0.com/2023/02/18/168631.html",
        urlToImage:
          "https://taisy0.com/wp-content/uploads/2022/03/StudioDisplayss1.jpg",
        publishedAt: "2023-02-18T01:37:07Z",
        content:
          "9To5MacApplemacOS 13.3 betaStudio Display 16.4\r\nv15.5v16.4\r\nmacOS 13.3 betaMacStudio Display",
      },
      {
        source: {
          id: null,
          name: "Sapo.pt",
        },
        author: "Pedro Simões",
        title:
          "Windows 11 nos Mac com M1 ou M2? A Microsoft tem a solução através do Parallels",
        description:
          "A mudança da Apple para o seu SoC M1 e M2 veio trazer muitos problemas para todos os que se queriam usar os computadores da Apple com Windows 11. Este sistema não está adaptado...",
        url: "https://pplware.sapo.pt/apple/windows-11-nos-mac-com-m1-ou-m2-a-microsoft-tem-a-solucao-atraves-do-parallels/",
        urlToImage:
          "https://pplware.sapo.pt/wp-content/uploads/2020/11/apple_m1_windows_2.jpg",
        publishedAt: "2023-02-18T00:30:45Z",
        content:
          "A mudança da Apple para o seu SoC M1 e M2 veio trazer muitos problemas para todos os que se queriam usar os computadores da Apple com Windows 11. Este sistema não está adaptado a este hardware e a Ap… [+1971 chars]",
      },
      {
        source: {
          id: null,
          name: "Macotakara.jp",
        },
        author: "danbo",
        title: "Apple、メディア向けにゲーム体験会を開催",
        description:
          "CNN Underscored:The Medium\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nCNN UnderscoredやTom's Guideが、Appleが2023年2月15日にメディアをニューヨークオフィスに招待して開催したゲーム体験会の様子を伝えています。\niPhone 14 Pro Max、Mac mini (2023)、MacBook Pro (16-inch, 2023)、Apple TV 4K (第3世代…",
        url: "https://www.macotakara.jp/news/entry-44352.html",
        urlToImage:
          "https://www.macotakara.jp/archives/001/202302/618b41e57b45830d.jpg",
        publishedAt: "2023-02-18T00:49:15Z",
        content:
          "CNN UnderscoredTom's GuideApple2023215\r\niPhone 14 Pro MaxMac mini (2023)MacBook Pro (16-inch, 2023)Apple TV 4K (3)Call of Duty: Warzone MobileLego Starwars castawaysRun LegendsThe Medium\r\nThe Medium2… [+15 chars]",
      },
      {
        source: {
          id: null,
          name: "TVLine",
        },
        author: "Matt Webb Mitovich",
        title:
          "Hello Tomorrow!: Billy Crudup Weighs In on Episode 1's Out-of-This-World Twist",
        description:
          "The following contains spoilers from premiere of Hello Tomorrow!, which is now streaming its first three episodes on Apple TV+. How stellar of a salesman is Hello Tomorrow!‘s Jack Billings? Well, as revealed at the end of the Apple TV+ dramedy’s first episode…",
        url: "https://tvline.com/2023/02/17/hello-tomorrow-recap-episode-1-brightside-moon-timeshare-scam/",
        urlToImage:
          "https://tvline.com/wp-content/uploads/2023/01/Hello_Tomorrow_trailer-apple-tv.jpg?w=630",
        publishedAt: "2023-02-18T00:01:58Z",
        content:
          "The following contains spoilers from premiere of Hello Tomorrow!, which is now streaming its first three episodes on Apple TV+.\r\nHow stellar of a salesman is Hello Tomorrow!‘s Jack Billings? Well, as… [+2381 chars]",
      },
      {
        source: {
          id: null,
          name: "Itmedia.co.jp",
        },
        author: "中川理緒(TEKIKAKU),ITmedia",
        title: "iPhoneで使っているサービスのパスワードを確認する方法",
        description:
          "iPhoneにはログイン情報を自動で入力する機能がある。今回はこの機能を利用して忘れたパスワードを確認する方法を紹介する。",
        url: "https://www.itmedia.co.jp/mobile/articles/2302/18/news018.html",
        urlToImage:
          "https://image.itmedia.co.jp/mobile/articles/2302/18/cover_news018.jpg",
        publishedAt: "2023-02-18T00:00:00Z",
        content:
          "iPhone\r\niPhone\r\nPC\r\nWeb\r\nApple ID\r\nIDApple ID\r\nCopyright © ITmedia, Inc. All Rights Reserved.",
      },
      {
        source: {
          id: null,
          name: "CleanTechnica",
        },
        author: "Derek Markham",
        title:
          "The Munro MK_1 Is An All-Electric All-Terrain Workhorse For Farms, Forests, Jobsites, & Beyond",
        description:
          "The Munro MK_1 looks like the love child of a classic Ford Bronco and an International Scout, if they conceived under a giant Tesla coil, but this new electric vehicle could be a very practical solution to cleaner transport in heavy industry, agriculture, lan…",
        url: "https://cleantechnica.com/2023/02/17/the-munro-mk_1-is-an-all-electric-all-terrain-workhorse-for-farms-forests-jobsites-beyond/",
        urlToImage: "https://cleantechnica.com/files/2023/02/munromk1.jpg",
        publishedAt: "2023-02-18T01:04:24Z",
        content:
          "The Munro MK_1 looks like the love child of a classic Ford Bronco and an International Scout, if they conceived under a giant Tesla coil, but this new electric vehicle could be a very practical solut… [+4521 chars]",
      },
      {
        source: {
          id: null,
          name: "Bleeding Cool News",
        },
        author: "Ray Flook",
        title:
          "Warrior Nun Billboard Company Video Offers #SaveWarriorNun Support",
        description:
          "Right off the bat, we have to say that we agree with showrunner Simon Barry. When the campaign to find the Alba Baptista-starring Warrior Nun a new home is making such an impact that the company behind the billboard that the #SaveWarriorNun campaign is making…",
        url: "https://bleedingcool.com/tv/warrior-nun-billboard-company-video-offers-savewarriornun-support/",
        urlToImage:
          "https://bleedingcool.com/wp-content/uploads/2023/02/Warrior-Nun-Fans-Rally-for-Season-3-with-OOH-0-6-screenshot-1200x628.jpg",
        publishedAt: "2023-02-18T02:35:11Z",
        content:
          "Warrior Nun Showrunner Simon Barry shared a video from billboard company OUTFRONT Media promoting the #SaveWarriorNun campaign.\r\nRight off the bat, we have to say that we agree with showrunner Simon … [+2971 chars]",
      },
      {
        source: {
          id: null,
          name: "DIE WELT",
        },
        author: "Philipp Vetter",
        title:
          "Russische Vermögen von 5,32 Milliarden Euro in Deutschland sanktioniert",
        description:
          "Mehr als fünf Milliarden Euro wurden in Deutschland seit Beginn des Ukraine-Krieges sanktioniert. Das teilte das Bundesfinanzministerium auf Anfrage von WELT AM SONNTAG mit. Eine neue Zentralstelle für Sanktionsdurchsetzung (ZfS) befindet sich noch im Aufbau.",
        url: "https://www.welt.de/wirtschaft/article243834349/Russische-Vermoegen-von-5-32-Milliarden-Euro-in-Deutschland-sanktioniert.html",
        urlToImage:
          "https://img.welt.de/img/wirtschaft/mobile243834557/0951350837-ci16x9-w1200/Yacht-Dilbar.jpg",
        publishedAt: "2023-02-18T00:01:39Z",
        content:
          "Knapp ein Jahr nach Beginn des russischen Angriffskriegs auf die Ukraine sind in Deutschland Vermögenswerte in Höhe von 5,32 Milliarden Euro sanktioniert. Das teilte das Bundesfinanzministerium auf A… [+1367 chars]",
      },
      {
        source: {
          id: null,
          name: "Livedoor.jp",
        },
        author: "golden3",
        title:
          "【悲報】 アップル「インドに生産を移して脱中国します」 ← 50%が不良品",
        description:
          "1 ：それでも動く名無し :2023/02/16(木) 09:55:43.65 ID:MwANaoMor.net\n\n\nインドのiPhoneパーツ工場、50％が不良品か\nhttps://news.yahoo.co.jp/articles/b50816014a0ae4b985b95800756d6d0577bd4c3e\n\n\n\n7 ：それでも動く名無し ：2023/02/16(木) 09:57:28.76 ID:WM/bk6...",
        url: "http://blog.livedoor.jp/goldennews/archives/52213084.html",
        urlToImage:
          "https://livedoor.blogimg.jp/goldennews/imgs/d/a/da17636d.jpg",
        publishedAt: "2023-02-18T01:18:00Z",
        content:
          "1 2023/02/16() 09:55:43.65 ID:MwANaoMor.net\r\niPhone50https://news.yahoo.co.jp/articles/b50816014a0ae4b985b95800756d6d0577bd4c3e\r\n7 2023/02/16() 09:57:28.76 ID:WM/bk6xb0.net\r\n12 2023/02/16() 09:57:52.… [+6124 chars]",
      },
      {
        source: {
          id: null,
          name: "Rivals.com",
        },
        author: "The Maize And Blue Review",
        title:
          "Mazi Smith lone Wolverine on FOX Sports' top NFL Draft prospects list",
        description:
          "FOX Sports has recognized Mazi Smith as one of the top draft prospects available in the 2023 NFL Draft.",
        url: "https://michigan.rivals.com/news/mazi-smith-lone-wolverine-on-fox-sports-top-nfl-draft-prospects-list?yptr=yahoo?src=rss",
        urlToImage:
          "https://images.rivals.com/image/upload/f_auto,q_auto,t_headline_primary/ubyvgyt4dwmgzgt0hg3e",
        publishedAt: "2023-02-18T00:22:18Z",
        content:
          "With the NFL season over, the attention quickly shifts to NFL Draft talk as franchises across the league are looking to address the needs the team has.\r\nAs for the Michigan football program, it is se… [+1331 chars]",
      },
      {
        source: {
          id: null,
          name: "Technews.tw",
        },
        author: "邱 倢芯",
        title: "蘋果修改 iPhone 14 Pro 維修流程,TrueDepth 模組可以修了",
        description:
          "過往如果 iPhone 用戶的 TrueDepth 原深相機模組出現故障情況，用戶就必須直接換新設備，因為蘋果無法提供 TrueDepth 原深相機模組的單一維修。 不過這樣的情況在去年有了新變化，去年蘋果就宣布開始可以提供 iPhone XS 與後續機性進行 TrueDepth 原深相機模組的單一...",
        url: "https://technews.tw/2023/02/18/iphone-14-pro-truedepth/",
        urlToImage:
          "https://img.technews.tw/wp-content/uploads/2022/09/16160033/31.jpg",
        publishedAt: "2023-02-18T02:50:31Z",
        content:
          "iPhone TrueDepth TrueDepth \r\n iPhone XS TrueDepth iPhone 14 \r\n9to5mac iPhone 14 Pro iPhone 14 Pro Max TrueDepth Face ID Apple Store \r\n iPhone 14 iPhone 14 iPhone 14 Plus",
      },
      {
        source: {
          id: null,
          name: "NPR",
        },
        author: "NPR",
        title: "Jay & Shai's debt ceiling adventure",
        description:
          "Every year, the U.S. government spends more money than it takes in. In order to fund all that spending, the country takes on debt. Congress has the power to limit how much debt the U.S. takes on. Right now, the debt limit is $31.4 trillion dollars. Once we re…",
        url: "https://www.npr.org/2023/02/17/1158035090/debt-ceiling-negotiation-deadline-x-date-extraordinary-measures-jay-powell",
        urlToImage:
          "https://media.npr.org/assets/img/2023/02/17/debt-ceiling-negotiation-deadline-x-date-extraordinary-measures-jay-powell_wide-72bef6a2077e24ba9c29eb719278aa6225a52b19-s1400-c100.jpeg",
        publishedAt: "2023-02-18T00:09:26Z",
        content:
          "Every year, the U.S. government spends more money than it takes in. In order to fund all that spending, the country takes on debt. Congress has the power to limit how much debt the U.S. takes on. Rig… [+2472 chars]",
      },
      {
        source: {
          id: null,
          name: "Smzdm.com",
        },
        author: null,
        title:
          "Apple 苹果 iPhone14 Pro 5G智能手机 256GB 快充套装版 8228元包邮(需用券)",
        description:
          "此商品目前在京东特价至8228,可参加满4000减800元活动,属于近期好价,感兴趣的值友不容错过。叠加优惠券：满4000减800元",
        url: "https://www.smzdm.com/p/73098128/",
        urlToImage:
          "https://qny.smzdm.com/202209/08/631951bb98a932280.jpg_d250.jpg",
        publishedAt: "2023-02-18T02:56:41Z",
        content:
          "iPhone 14 Pro6.12556*1179460PPIApp1000HDR16002000 ProMotion Super Retina XDR 1 Hz120 HzAlways-On\r\niPhone 14 ProA164nm160 6 CPU A1520%A16 Bionic 5 GPU 50% 16 17 iPhone 14 Pro23\r\niPhone 14 Pro48002ProR… [+32 chars]",
      },
      {
        source: {
          id: null,
          name: "Smzdm.com",
        },
        author: null,
        title:
          "百亿补贴:Apple 苹果 iPhone 14 Plus 5G智能手机 128GB 5559元包邮(需用券)",
        description:
          "拼多多此款目前活动售价5759元,叠加200元无门槛券,到手价5559元,近期好价。叠加优惠券:满200元减200元",
        url: "https://www.smzdm.com/p/73091602/",
        urlToImage:
          "https://qny.smzdm.com/202302/18/63f01655476f72274.jpg_d250.jpg",
        publishedAt: "2023-02-18T00:08:17Z",
        content:
          "iPhone 14 miniiPhone 14 Plus6.7 A15 \r\n iPhone 14 6.72778*1284458ppi8001200100%DCI-P360Hz\r\niPhone 14 Plus A15 16 \r\niPhone 14 1200//1.51.949%12MP/1.938%\r\niPhone 14",
      },
      {
        source: {
          id: null,
          name: "Appps.jp",
        },
        author: "saki",
        title:
          "iOS16とiPadOS16の搭載率判明!iPhoneの約7割のユーザーがアップデート済み",
        description:
          "Appleは、昨年2022年9月にiOS16、10月にiPadOS16をリリースしました。 Appleが、iOS16とiPadOS16の搭載率を公表し、話題になっています。 iPhoneの約7割のユー…",
        url: "https://www.appps.jp/374897/",
        urlToImage: "https://www.appps.jp/wp-content/uploads/2022/11/clpw.jpg",
        publishedAt: "2023-02-18T02:25:27Z",
        content:
          "Apple20229iOS1610iPadOS16\r\nAppleiOS16iPadOS16\r\nApple20229iOS16iPadOS16\r\n214App StoreiOS16iPadOS16iPhoneiPad\r\nApple\r\nAppleiOS16iPhone72%4iPhone81%Apple iPhone20%iOS158%iOS14\r\nApple\r\nAppleiPadOS1650%4 … [+74 chars]",
      },
      {
        source: {
          id: null,
          name: "MMA Fighting",
        },
        author: "MMA Fighting Newswire",
        title:
          "UFC Vegas 69 preview show: Will Jessica Andrade vs. Erin Blanchfield winner get title shot next?",
        description:
          "MMA Fighting previews Saturday's UFC Vegas 69 event, which will be headlined by Jessica Andrade vs. Erin Blanchfield.",
        url: "https://www.mmafighting.com/2023/2/17/23604753/ufc-vegas-69-preview-show-will-jessica-andrade-vs-erin-blanchfield-winner-get-title-shot-next",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/Xi7p1dG3lqUGiEOBkC0ssXELEl4=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24441365/UFC_Vegas_69_CLEAN.jpg",
        publishedAt: "2023-02-18T00:00:00Z",
        content:
          "The stakes are high in the UFC Vegas 69 main event between former strawweight champion Jessica Andrade and surging flyweight prospect Erin Blanchfield. Will championship gold be on the line for whoev… [+798 chars]",
      },
      {
        source: {
          id: null,
          name: "Earmilk.com",
        },
        author: "Josh Loewen",
        title: 'Shit Happens tells haters to "Cancel Us Next Tuesday"',
        description:
          "Punk rockers, are you ready to rage? If you're not familiar with Shit Happens, it's time to get acquainted with this four-piece powerhouse from Winnipeg Manitoba, Canada. Since their EP…\nThe post Shit Happens tells haters to \"Cancel Us Next Tuesday\" appeared …",
        url: "https://earmilk.com/2023/02/17/shit-happens-tells-haters-to-cancel-us-next-tuesday/",
        urlToImage:
          "https://earmilk.com/wp-content/uploads/2023/02/Shit-Happens.png",
        publishedAt: "2023-02-18T00:00:19Z",
        content:
          "Punk rockers, are you ready to rage? If you're not familiar with Shit Happens, it's time to get acquainted with this four-piece powerhouse from Winnipeg Manitoba, Canada. Since their EP release only … [+1419 chars]",
      },
      {
        source: {
          id: null,
          name: "Iphone-mania.jp",
        },
        author: "hato",
        title:
          "携帯キャリア各社、iPhone14のアップデート呼びかけ。衝突事故検知を修正",
        description:
          "ソフトバンク、NTTドコモ、楽天モバイルの各社が、iPhone14シリーズや最新のApple Watchで、緊急番号に意図せず発信されてしまうケースがあるとして、最新のOSへのアップデートを呼びかけています。\niPhone14シリーズ、最新Apple Watchのアップデートを\niPhone14シリーズと、Apple Watch Series 8、Apple Watch Ultra、Apple Watch SE（第2世代）において、意図せず緊急番号（119番など）に発信されてしまうとして、ソフトバンク、NTTドコ…",
        url: "https://iphone-mania.jp/?p=524657",
        urlToImage:
          "https://iphone-mania.jp/uploads/2023/02/18/Apple-iPhone-SOS.jpg",
        publishedAt: "2023-02-18T03:08:19Z",
        content:
          "NTTiPhone14Apple WatchOSiPhone14Apple Watch\r\niPhone14Apple Watch Series 8Apple Watch UltraApple Watch SE2119NTT217iOSiPhoneiOS16.3.1Apple WatchwatchOS9.3.1214\r\n2022iPhone14Apple WatchSOS\r\niPhoneApple… [+85 chars]",
      },
      {
        source: {
          id: null,
          name: "Kocpc.com.tw",
        },
        author: "Ross Wang",
        title: "微軟正式授權 M1 / M2 Mac 安裝 Windows 11,但依然要靠 Parallels",
        description:
          "先前也有人注意到，像是 Parallels、CrossOver 甚至是電腦王阿達團隊曾經介紹過透過 UTM 免費工具，為你的 M1 Mac 安裝 Windows 11 作業系統的方式，可能並不在微軟正式授權的使用範圍內（大驚）。好在，透過 Parallels Desktop 與微軟的合作，現在透過平行桌面以虛擬環境執行 Arm 版 Windows 11 專業版與 Windows 11 企業版 已經是被官方認可的正式授權解決方案途徑了。繼續閱讀微軟正式授權 M1 / M2 Mac 安裝 Windows 11，但依然…",
        url: "https://www.kocpc.com.tw/archives/480879",
        urlToImage:
          "https://www.kocpc.com.tw/wp-content/uploads/2023/02/1676620986-b1345423ebf11b71a7bb50c0a977937d.png",
        publishedAt: "2023-02-18T02:04:03Z",
        content:
          "ParallelsCrossOver UTM M1 Mac Windows 11 Parallels Desktop Arm Windows 11 Windows 11 M1 / M2 Mac Windows 11 Parallels \r\n Apple Silicon M1 M2 Mac Intel Windows Boot Camp \r\n ParallelsCrossOver UTM M1 M… [+331 chars]",
      },
      {
        source: {
          id: null,
          name: "Bloguismo.com",
        },
        author: "Villauriz",
        title:
          "In Informationen de l'ensemble des Marktforschungsunternehmens realisiert nachfolgende Singleborse angeschaltet das Spitze",
        description:
          "In Informationen de l'ensemble des Marktforschungsunternehmens realisiert nachfolgende Singleborse angeschaltet das Spitze Sobald Welche Nahrungsmittel einen kommentar abgeben mochten mussen Sie hinein Einem Benutzerprofil jedoch Diesen Namen, Nicknamen & Die…",
        url: "https://www.bloguismo.com/in-informationen-de-l-ensemble-des/",
        urlToImage: "https://g.twimg.com/Twitter_logo_blue.png",
        publishedAt: "2023-02-18T00:42:37Z",
        content:
          "In Informationen de l'ensemble des Marktforschungsunternehmens realisiert nachfolgende Singleborse angeschaltet das Spitze\r\nSobald Welche Nahrungsmittel einen kommentar abgeben mochten\r\nmussen Sie hi… [+7199 chars]",
      },
      {
        source: {
          id: null,
          name: "Daily Mail",
        },
        author: "Kevin Kayhart",
        title: "Ray Liotta to get posthumous star on Hollywood Walk Of Fame",
        description:
          "Actress and director Elizabeth Banks and actor Taron Egerton will pay tribute to the late actor during the dedication as guest speakers.",
        url: "https://www.dailymail.co.uk/tvshowbiz/article-11765383/Ray-Liotta-posthumous-star-Hollywood-Walk-Fame.html",
        urlToImage:
          "https://i.dailymail.co.uk/1s/2023/02/18/01/67819889-0-image-a-21_1676683067289.jpg",
        publishedAt: "2023-02-18T01:28:30Z",
        content:
          "Nine months after his sudden and unexpected death, actor Ray Liotta will be honored with a star on the Hollywood Walk Of Fame.\r\nThe ceremony will be taking place on Friday, February 24, at 6201 Holly… [+4644 chars]",
      },
      {
        source: {
          id: null,
          name: "BGR",
        },
        author: "Chris Hachey",
        title: "The 8 best laptop cases of 2023",
        description:
          "Having a laptop offers the ability to relocate and continue to work. Working from a coffee shop, a different desk in the office, or going …\nThe post The 8 best laptop cases of 2023 appeared first on BGR.",
        url: "https://bgr.com/guides/best-laptop-case/",
        urlToImage:
          "https://bgr.com/wp-content/uploads/2019/08/71uknmjpnzl._sl1200_-e1565805555462.jpg?quality=82&strip=all",
        publishedAt: "2023-02-18T01:59:44Z",
        content:
          "Having a laptop offers the ability to relocate and continue to work. Working from a coffee shop, a different desk in the office, or going from the couch to the living room is easy to do with a laptop… [+8569 chars]",
      },
      {
        source: {
          id: null,
          name: "iPhone in Canada",
        },
        author: "Gary Ng",
        title:
          "Fido Customers are Seeing '5G On' and '5G Auto' Settings in iOS 16.4 Beta",
        description:
          "Apple released iOS 16.4 beta to developers and public testers yesterday, and for Fido customers, they’re seeing some 5G options appear in iPhone settings. According to a screenshot shared by iPhone in Canada reader and Fido customer, John, he’s seeing 5G Auto…",
        url: "https://www.iphoneincanada.ca/carriers/rogers/fido-customers-are-seeing-5g-on-and-5g-auto-settings-in-ios-16-4-beta/",
        urlToImage:
          "https://cdn.iphoneincanada.ca/wp-content/uploads/2017/09/iic-logo-1.svg",
        publishedAt: "2023-02-18T00:36:31Z",
        content:
          "Apple released iOS 16.4 beta to developers and public testers yesterday, and for Fido customers, theyre seeing some 5G options appear in iPhone settings.\r\nAccording to a screenshot shared by iPhone i… [+924 chars]",
      },
      {
        source: {
          id: null,
          name: "Doctorofcredit.com",
        },
        author: "William Charles",
        title:
          "Paceline Credit Card To Shut Down (Apple Watch Statement Credits Ending)",
        description:
          "Paceline has sent out an e-mail to cardholders that effective February 23, 2023 the card will no longer be usable. One of the benefits of the card was statement credits for an Apple Watch Series 7 if you met your activity goal. Unfortunately this benefit will…",
        url: "https://www.doctorofcredit.com/paceline-credit-card-to-shut-down-apple-watch-statement-credits-ending/",
        urlToImage:
          "https://www.doctorofcredit.com/wp-content/uploads/2021/10/paceline-credit-card-1.png",
        publishedAt: "2023-02-18T01:32:42Z",
        content:
          "Paceline has sent out an e-mail to cardholders that effective February 23, 2023 the card will no longer be usable. One of the benefits of the card was statement credits for an Apple Watch Series 7 if… [+449 chars]",
      },
      {
        source: {
          id: null,
          name: "Ithome.com",
        },
        author: null,
        title: "拜登下周一将决定苹果是否可以继续在美国市场销售 Apple Watch",
        description:
          "IT之家 2 月 18 日消息,美国国际贸易委员会(ITC)于去年 12 月裁定,苹果公司旗下带有心电图（ECG）功能的 Apple Watch 侵犯了医疗设备制造商 AliveCor Inc 的专利。该禁令最快将于下周生效，意味着苹果的 Apple Watch Series 8 智能手表将无法在美国市场发售。目前苹果唯一的解决方案，就是游说拜登政府来阻止该禁令生效。苹果公司已经聘请了 Covington & Burling 的游说者 Shara Aranoff（她曾担任过 ITC 主席），以确保可以继续销售 A…",
        url: "https://www.ithome.com/0/674/202.htm",
        urlToImage: null,
        publishedAt: "2023-02-18T00:39:11Z",
        content:
          "IT 2 18 ITC 12 ECG Apple Watch AliveCor Inc \r\nApple Watch Series 8 \r\n Covington &amp; Burling Shara Aranoff ITC Apple Watch\r\n ITC \r\nIT\r\nAliveCor KardiaBand KardiaBand Apple Watch ECG \r\n Apple Watch A… [+133 chars]",
      },
      {
        source: {
          id: null,
          name: "Ithome.com",
        },
        author: null,
        title:
          "无需更换整台设备，苹果为 iPhone 14 Pro 两款机型提供 TrueDepth 同机维修服务",
        description:
          "IT之家 2 月 18 日消息，苹果正简化和改善 iPhone 14 Pro 和 iPhone 14 Pro Max 两款机型的维修流程。苹果公司表示自本周开始，上述两款机型出现 Face ID 和 TrueDepth 问题之后，可以前往 Apple Store 零售店和 Apple 授权服务提供商进行维修，而不再需要更换整台 iPhone。TrueDepth 摄像头模块包括 Face ID 和前置摄像头组件，苹果此前没有办法对 TrueDepth 模块进行同机维修。因此，用户手头上的 iPhone 一旦出现该模…",
        url: "https://www.ithome.com/0/674/197.htm",
        urlToImage: null,
        publishedAt: "2023-02-18T00:06:27Z",
        content:
          "IT 2 18 iPhone 14 ProiPhone 14 Pro Max Face ID TrueDepth Apple Store Apple iPhone\r\nTrueDepth Face ID TrueDepth iPhone \r\niPhone XS TrueDepth iPhone 14\r\nIT 9to5Mac iPhone 14 Pro iPhone 14 Pro Max TrueD… [+34 chars]",
      },
      {
        source: {
          id: null,
          name: "Arigato-ipod.com",
        },
        author: "Ygn",
        title:
          "【セール】ヨドバシ.comでApple純正iPhoneケースとMagSafeレザーウォレットを、15%オフで特価販売",
        description:
          "ヨドバシ.comでApple純正iPhone用アクセサリの特価セールが実施されています。 対象となっているのはiPhoneケース各種と、MagSafeレザーウォレットです。 ケースはiPhone 12以降のMagSafe...\nThe post 【セール】ヨドバシ.comでApple純正iPhoneケースとMagSafeレザーウォレットを、15％オフで特価販売 first appeared on アイアリ.",
        url: "https://arigato-ipod.com/2023/02/yodobashi-apple-accessories-campaign-feb-2023.html",
        urlToImage:
          "https://arigato-ipod.com/wp/wp-content/uploads/2023/02/230218yodobashiapplesale.jpg",
        publishedAt: "2023-02-18T00:02:59Z",
        content:
          "ヨドバシ.comでApple純正iPhone用アクセサリの特価セールが実施されています。\n\n対象となっているのはiPhoneケース各種と、MagSafeレザーウォレットです。\nケースはiPhone 12以降のMagSafeに対応してからのものと、iPhone SE（第2/第3世代）用が対象です。\nそれぞれ15％オフになっています。\n\n一例として、iPhone 14 Pro用のシリコーンケースとク… [+167 chars]",
      },
      {
        source: {
          id: null,
          name: "Prtimes.jp",
        },
        author: null,
        title:
          "「dヒッツ」で2023年1月に最も聴かれたアーティストはOfficial髭男dism!3カ月連続1位獲得!「プレイリスト再生回数」1位はback number！",
        description:
          "[レコチョク]\n[画像1: https://prtimes.jp/i/2747/1537/resize/d2747-1537-6c9e71c137e07191aced-0.jpg ]\n\n\n\n「楽曲再生回数ランキング」でもOfficial髭男dism「Subtitle」が3カ月連続1位を獲得。\n\n\n[画像2: https://prtimes.j...",
        url: "https://prtimes.jp/main/html/rd/p/000001537.000002747.html",
        urlToImage:
          "https://prtimes.jp/i/2747/1537/ogp/d2747-1537-6c9e71c137e07191aced-0.jpg",
        publishedAt: "2023-02-18T01:40:02Z",
        content:
          "Subtitlesilent1012d1117TVSPYxFAMILYSubtitleCry BabyTVTVOfficialdism2dOfficialdism https://dhits.docomo.ne.jp/program/10016783\r\n202311747back number21CD5612 NHKTBSDeepdback number https://dhits.docomo… [+415 chars]",
      },
      {
        source: {
          id: null,
          name: "Funkyjunkinteriors.net",
        },
        author: "Funky Junk Donna",
        title: "New Upcycle Ideas 666",
        description:
          "New Upcycle Ideas 666   Every Friday, 7 PM through Wednesday 11 PM Pacific Visit 20+ NEW Upcycle Ideas 666 – Clay mushrooms, tin ceiling, chenille and soda can hearts, cord holders, plus more, with tutorials! Hi all!  Ready for another round of inspiring upcy…",
        url: "https://www.funkyjunkinteriors.net/new-upcycle-ideas-666/",
        urlToImage:
          "https://www.funkyjunkinteriors.net/wp-content/uploads/2023/02/clay-mushrooms-under-a-cloche.jpeg",
        publishedAt: "2023-02-18T03:00:35Z",
        content:
          "Every Friday, 7 PM through Wednesday 11 PM Pacific\r\nVisit 20+ NEW Upcycle Ideas 666 – Clay mushrooms, tin ceiling, chenille and soda can hearts, cord holders, plus more, with tutorials!\r\nHi all! \r\nRe… [+3374 chars]",
      },
      {
        source: {
          id: null,
          name: "Sky.com",
        },
        author: "Tom Acres, technology reporter",
        title:
          "People on mental health waiting lists cautioned not to turn to chatbots",
        description:
          "People waiting months for mental health treatment have been cautioned against turning to chatbots as a quick alternative.",
        url: "https://news.sky.com/story/people-on-mental-health-waiting-lists-cautioned-not-to-turn-to-chatbots-12807634",
        urlToImage:
          "https://e3.365dm.com/23/02/1600x900/skynews-social-media-phone_6061293.jpg?20230217234606",
        publishedAt: "2023-02-18T00:00:00Z",
        content:
          "People waiting months for mental health treatment have been cautioned against turning to chatbots as a quick alternative.\r\nOne in four patients are now waiting more than 90 days between their first a… [+4053 chars]",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "BeauHD",
        title: "Google Gives Apple Cut of Chrome iOS Search Revenue",
        description:
          "According to The Register, Google has been paying Apple a portion of search revenue generated by people using Google Chrome on iOS. From the report: This is one of the aspects of the relationship between the two tech goliaths that currently concerns the UK's …",
        url: "https://tech.slashdot.org/story/23/02/17/2315244/google-gives-apple-cut-of-chrome-ios-search-revenue",
        urlToImage: "https://a.fsdn.com/sd/topics/topicgoogle_fb.gif",
        publishedAt: "2023-02-18T00:45:00Z",
        content:
          "This is one of the aspects of the relationship between the two tech goliaths that currently concerns the UK's Competition and Markets Authority (CMA). Though everyone knows Google pays Apple, Samsung… [+2563 chars]",
      },
      {
        source: {
          id: null,
          name: "Dark Horizons",
        },
        author: "Garth Franklin",
        title: "Scorsese's “Flower Moon” Still Being Edited?",
        description:
          "Cinephiles had hoped and then came to accept that Martin Scorsese’s “Killers of the Flower Moon” wasn’t to be ready for this year’s awards race. Budgeted at an eye-watering $200 million for an adult drama, the project was shot from April – October 2021, so it…",
        url: "https://www.darkhorizons.com/scorseses-flower-moon-still-being-edited/",
        urlToImage:
          "https://cdndh.darkhorizons.com/wp-content/uploads/2023/02/scorseses-flower-moon-still-being-edited.jpg",
        publishedAt: "2023-02-18T03:20:39Z",
        content:
          "Cinephiles had hoped and then came to accept that Martin Scorsese’s “Killers of the Flower Moon” wasn’t to be ready for this year’s awards race.\r\nBudgeted at an eye-watering $200 million for an adult… [+1240 chars]",
      },
      {
        source: {
          id: null,
          name: "Softantenna.com",
        },
        author: "softantenna",
        title:
          "Apple、iOS 16.4、iPadOS 16.4、macOS Ventura 13.3のPublic Beta 2を公開",
        description:
          "] Appleは本日、iOS 16.4、iPadOS 16.4、macOS Ventura 13.3の各Public Beta 1を公開しました(MacRumors)。 Apple Beta Software Programに参加しているベ",
        url: "https://softantenna.com/blog/ios-16-4-public-beta-1/",
        urlToImage:
          "https://softantenna.com/blog/wp-content/uploads/2023/02/s_20220712_93410.jpg",
        publishedAt: "2023-02-18T00:28:55Z",
        content:
          "]AppleiOS 16.4iPadOS 16.4macOS Ventura 13.3Public Beta 1(MacRumors)\r\nApple Beta Software ProgramWeb\r\nApple Beta Software Program\r\niOS 16.4iPadOS 16.4SafariWebHomeKit\r\nmacOS Ventura 13.3iOSiPadOS",
      },
      {
        source: {
          id: null,
          name: "Softantenna.com",
        },
        author: "softantenna",
        title: "M1/M2 Macに最適な「Tiny11」のARM64版が公開",
        description:
          "今月の初め、極限まで無駄をそぎ落としたWindows 11の軽量版「Tiny11」が公開されて注目を集めました。 Tiny11は、Windows 11 Pro 22H2をベースにし、ストレージ8GB、メモリ2GBという少ないリソースで動作可",
        url: "https://softantenna.com/blog/tiny11-arm64/",
        urlToImage:
          "https://softantenna.com/blog/wp-content/uploads/2023/02/tiny11-2.jpg",
        publishedAt: "2023-02-18T01:25:16Z",
        content:
          "Windows 11Tiny11\r\nTiny11Windows 11 Pro 22H28GB2GBTPMWindows 11\r\nNTDEVTiny11Arm64(Neowin)\r\nBy popular request, tiny11 for Arm64 devices is finally here!This version of tiny11 is great for low-powered … [+329 chars]",
      },
      {
        source: {
          id: null,
          name: "Rivals.com",
        },
        author: "The Maize And Blue Review",
        title:
          "Hail to the Podcast: Michigan vs MSU Bball, UM Football recruiting spring",
        description:
          "The M&BR crew talk an upcoming emotional day at Crisler, 2024 football recruiting, and early spring storylines.",
        url: "https://michigan.rivals.com/news/hail-to-the-podcast-michigan-vs-msu-bball-um-football-recruiting-spring?yptr=yahoo?src=rss",
        urlToImage:
          "https://images.rivals.com/image/upload/f_auto,q_auto,t_headline_primary/dgx3ka8bzrf3g54apmgr",
        publishedAt: "2023-02-18T02:54:52Z",
        content:
          "M&amp;BR's Trevor McCue, Josh Henschke, Brock Heilig and Jared Halus talk Michigan's upcoming emotional game with Michigan State, MIchigan 2024 recruiting targets in the Rivals250, and Michigan sprin… [+595 chars]",
      },
      {
        source: {
          id: null,
          name: "Rivals.com",
        },
        author: "The Maize And Blue Review",
        title: "Track star BreeAna Bates sets school record in 60m dash",
        description:
          "On Friday night, sophomore track runner BreeAna Bates set a school record in the 60-meter dash with a blazing 7.36 seconds. Bates' record broke the old school record, set by Cindy Sember, by just 0.01 seconds.",
        url: "https://michigan.rivals.com/news/track-star-breeana-bates-sets-school-record-in-60m-dash?yptr=yahoo?src=rss",
        urlToImage:
          "https://images.rivals.com/image/upload/f_auto,q_auto,t_headline_primary/ygje04bxheiegmvxrpdp",
        publishedAt: "2023-02-18T01:31:11Z",
        content:
          "On Friday night, sophomore track runner BreeAna Bates set a school record in the 60-meter dash with a blazing 7.36 seconds. Bates' record broke the old school record, set by Cindy Sember, by just 0.0… [+1152 chars]",
      },
      {
        source: {
          id: null,
          name: "Rivals.com",
        },
        author: "The Maize And Blue Review",
        title: "LOOK: Michigan makes chain commemorating win over Ohio State",
        description:
          "For years, Ohio State football has given its players a chain with gold pants every time the Buckeyes defeat Michigan in their annual late November meeting. It's one of the long-lasting traditions of Ohio State football, but Michigan may have just taken a shot…",
        url: "https://michigan.rivals.com/news/look-michigan-makes-chain-commemorating-win-over-ohio-state?yptr=yahoo?src=rss",
        urlToImage:
          "https://images.rivals.com/image/upload/f_auto,q_auto,t_headline_primary/aqvopmtcm6zbxcax2gor",
        publishedAt: "2023-02-18T00:54:03Z",
        content:
          "For years, Ohio State football has given its players a chain with gold pants every time the Buckeyes defeat Michigan in their annual late November meeting. It's one of the long-lasting traditions of … [+1424 chars]",
      },
      {
        source: {
          id: null,
          name: "Rivals.com",
        },
        author: "The Maize And Blue Review",
        title: "Tracy Smith era opens with split of games on Opening Day",
        description:
          "It was Opening Day for Michigan baseball on Friday as the team began its 2023 season in Mesa, Arizona at the MLB Desert Invitational. Smith spent seven seasons at Arizona State before becoming the head coach at Michigan, replacing Erik Bakich during the offse…",
        url: "https://michigan.rivals.com/news/tracy-smith-era-opens-with-split-of-games-on-opening-day?yptr=yahoo?src=rss",
        urlToImage:
          "https://images.rivals.com/image/upload/f_auto,q_auto,t_headline_primary/adazgxkhkfuxaiktjcxt",
        publishedAt: "2023-02-18T03:08:06Z",
        content:
          "It was Opening Day for Michigan baseball on Friday as the team began its 2023 season in Mesa, Arizona at the MLB Desert Invitational. Not only was it the debut of a slew of freshmen, but it was also … [+2500 chars]",
      },
      {
        source: {
          id: null,
          name: "Independent.ie",
        },
        author: "Katie Byrne",
        title:
          "The Weekend Hitlist: what we want to see, do, and buy this weekend",
        description:
          "If you want to pick up beautifully designed jewellery at a bargain price, make your way to the Seconds &amp; Sample Sale of the Names jewellery collection in Dublin on February 25. Taking place at the jewellery designers&rsquo; new studio at Central Hotel Cha…",
        url: "https://www.independent.ie/life/health-wellbeing/the-weekend-hitlist-what-we-want-to-see-do-and-buy-this-weekend-42345801.html",
        urlToImage:
          "https://www.independent.ie/life/health-wellbeing/818e4/42345793.ece/AUTOCROP/w1240h700/PINK_LOAF_LANDSCAPE",
        publishedAt: "2023-02-18T02:30:00Z",
        content:
          "If you want to pick up beautifully designed jewellery at a bargain price, make your way to the Seconds &amp; Sample Sale of the Names jewellery collection in Dublin on February 25. Taking place at th… [+3875 chars]",
      },
      {
        source: {
          id: null,
          name: "Minatokobe.com",
        },
        author: "酔いどれ",
        title:
          "Apple、iPhone 14 Proの自撮りカメラとFace IDの故障を簡単に修理できるようになる",
        description:
          "今週から、Apple StoreとApple認定サービスプロバイダは、iPhone全体を交換することなく、Face IDとTrueDepthの問題を修理することができるようになりました 長年、iPhoneのFace IDやフロントカメラが故障した場合、AppleはTrueDepthモジュールの同一個体修理を行う方法を持たなかったため、デバイス全体を交換する必要がありました、 これが昨年、AppleがiPhone XS以降でTrueDepthモジュールの同一個体修理を行うようになったことで、状況が変わりました しか…",
        url: "https://minatokobe.com/wp/apple/post-87808.html",
        urlToImage:
          "https://minatokobe.com/wp/wp-content/uploads/2023/02/iPhone-14-Pro_002-1.jpg",
        publishedAt: "2023-02-18T00:41:27Z",
        content:
          "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]",
      },
      {
        source: {
          id: null,
          name: "Minatokobe.com",
        },
        author: "酔いどれ",
        title:
          "Apple、Betaソフトウェアプログラムのメンバに「macOS Ventura 13.3 Public beta 1」をリリース",
        description:
          "macOS Ventura 13.3 Public beta 1 Appleは昨日、開発者に「macOS Ventura 13.3 Developer beta 1 22E5219e)」をリリースしましたが、Betaソフトウェアプログラムのメンバにもこれに対応する「macOS Ventura 13.3 Public beta 1」をリリースしています 「macOS Ventura Public beta」に興味の有るユーザーは、公式のベータソフトサイトでベータテストプログラムに登録することができます 「macOS…",
        url: "https://minatokobe.com/wp/os-x/macos-ventura/post-87805.html",
        urlToImage:
          "https://minatokobe.com/wp/wp-content/uploads/2023/02/macOS-Ventura-Public-beta_001.jpg",
        publishedAt: "2023-02-18T00:29:02Z",
        content:
          "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]",
      },
      {
        source: {
          id: null,
          name: "Minatokobe.com",
        },
        author: "酔いどれ",
        title: "Appleの AirTagを航空会社が嫌う理由",
        description:
          "Apple のAirTagが2021年4月に初めてリリースされその後の数か月間で、一部の航空会社は追跡装置が航空機のナビゲーションシステムと干渉する可能性の懸念を表明しました FAAは、「0.3グラム以下のリチウム金属セルを搭載した荷物追跡デバイスは、預け入れ荷物に使用できる 」と、それらの根拠のない懸念に終止符を打ちました Apple AirTagのバッテリーはそのサイズの3分の1の大きさで、航空機の運航に何の危険も及ぼしません FOXニュースの報道によると Dorothy R は、AirTags の使用経験に…",
        url: "https://minatokobe.com/wp/apple/post-87816.html",
        urlToImage:
          "https://minatokobe.com/wp/wp-content/uploads/2023/02/2023-02-18_10-34-03.jpg",
        publishedAt: "2023-02-18T01:37:09Z",
        content:
          "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]",
      },
      {
        source: {
          id: null,
          name: "Minatokobe.com",
        },
        author: "酔いどれ",
        title:
          "Apple Studio DisplayのファームウェアアップデートがmacOS Ventura 13.3ベータテスターに提供",
        description:
          "Apple Studio Display 16.4は、今週のmacOSプレリリースを実行するMacに接続されたモニタで利用できます Appleはこのアップデートに関するリリースノートを提供していませんが、以前のファームウェアリリースは内蔵カメラのセンターフレームの改善に焦点を当てていました これは、ウルトラワイドカメラが、全景の特定の部分にズームインすることで、フレーム内の被写体や複数の被写体をフォローできるようにするものです Appleは約1年前にStudio Displayをリリースしましたが、初期レビューで…",
        url: "https://minatokobe.com/wp/apple/post-87820.html",
        urlToImage:
          "https://minatokobe.com/wp/wp-content/uploads/2023/02/Studio-Display-0323.jpg",
        publishedAt: "2023-02-18T02:36:18Z",
        content:
          "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]",
      },
      {
        source: {
          id: null,
          name: "Minatokobe.com",
        },
        author: "酔いどれ",
        title:
          "Apple、Betaソフトウェアプログラムのメンバに「iOS 16.4 Public beta 1」と「iPadOS 16.4 Public beta 1」をリリース",
        description:
          "iOS 16.4 Public beta 1およびiPadOS 16.4 Public beta 1 Appleは昨日、開発者に「iOS 16.4 Developer beta 1 (20E5212f)」および「iPadOS 16.4 Developer beta 1 (20E5212f)」をリリースしましたが、Betaソフトウェアプログラムのメンバにもこれに対応した「iOS 16.4 Public beta 1」、「iPadOS 16.4 Public beta 1」をリリースしています 「iOS 16 Pub…",
        url: "https://minatokobe.com/wp/ios/ios-16/post-87802.html",
        urlToImage:
          "https://minatokobe.com/wp/wp-content/uploads/2023/02/iOSiPadOS-16-Public-Beta.jpg",
        publishedAt: "2023-02-18T00:23:52Z",
        content:
          "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]",
      },
      {
        source: {
          id: null,
          name: "Minatokobe.com",
        },
        author: "酔いどれ",
        title: "AppleのTim Cook CEOが最も高給取りなCEOの一人に選出される",
        description:
          "As You Sowは今週、第9回目の年次調査「最も高給取りのCEO 100人」を発表しました この調査は、年金や金融機関のファンドマネジャーが、過剰な報酬について企業にどのような責任を負わせるかに焦点を当てたものです AppleのTim Cook CEOは、最も高給取りのCEOの一人に挙げられています S&P 500の最高経営責任者の報酬総額は増え続けている このレポートの「最も給与が高いCEO 100人」の平均給与は38,192,249ドルで、昨年の平均29,233,020ドルから30.6%上昇しています 最…",
        url: "https://minatokobe.com/wp/apple/post-87812.html",
        urlToImage:
          "https://minatokobe.com/wp/wp-content/uploads/2023/02/Tim-Cook-0824_02.jpg",
        publishedAt: "2023-02-18T01:10:46Z",
        content:
          "As You Sow9CEO 100\r\nAppleTim Cook CEOCEO\r\nS&amp;P 500\r\nCEO 10038,192,24929,233,02030.6%\r\n23,455,1888%\r\nCEO\r\nAFL-CIO()S&amp;P 50032420202992019264\r\nAmazonCEO6,4741CEOAndrew Jassy21,27032,855\r\nS&amp;P … [+106 chars]",
      },
      {
        source: {
          id: null,
          name: "Hollywood Life",
        },
        author: "Sara Whitman",
        title: "Goldie Hawn, 77, Glows On Makeup Free Walk Around NYC: Photo",
        description:
          "Goldie Hawn braved the rain without a hood or umbrella during her morning stroll through New York City on Friday.",
        url: "https://hollywoodlife.com/2023/02/17/goldie-hawn-makeup-free-walk-nyc-photo/",
        urlToImage:
          "https://hollywoodlife.com/wp-content/uploads/2023/02/Goldie-Hawn-Makeup-Free-Walk-backgrid-ftr1.jpg",
        publishedAt: "2023-02-18T02:58:36Z",
        content:
          "View galleryImage Credit: BrosNYC / BACKGRID\r\nA makeup-free beauty! Actress Goldie Hawn, 77, was spotted walking through the Big Apple on Friday, Feb. 17 without makeup and absolutely shined. She glo… [+2708 chars]",
      },
      {
        source: {
          id: null,
          name: "Seeking Alpha",
        },
        author: "Anuron Mitra",
        title:
          "S&P 500 closes out uncertain week down ~0.3% on inflation worries, Fed concerns",
        description:
          "The S&P 500 (SP500) on Friday slipped 0.28% for the week to end at 4,079.09 points, posting losses in three out of five sessions. Read more on the performance here.",
        url: "https://seekingalpha.com/news/3937871-sp-500-closes-out-uncertain-week-down-03-on-inflation-worries-fed-concerns",
        urlToImage:
          "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/547167450/image_547167450.jpg?io=getty-c-w750",
        publishedAt: "2023-02-18T01:20:46Z",
        content:
          "The S&amp;P 500 (SP500) on Friday slipped 0.28% for the week to end at 4,079.09 points, posting losses in three out of five sessions. Its accompanying SPDR S&amp;P 500 Trust ETF (NYSEARCA:SPY) fell 0… [+4198 chars]",
      },
      {
        source: {
          id: null,
          name: "Biztoc.com",
        },
        author: "yahoo.com",
        title:
          "50+ best Presidents' Day sales from Target, Home Depot, Amazon, more",
        description:
          "Presidents' Day is here, and with this glorious three-day break comes — you guessed it — massive sales at all the major retailers, from Apple to QVC. Expect a lot of great stuff in the mix. \"Presidents' Day weekend is typically a good time to find deals on wi…",
        url: "https://biztoc.com/x/14a6f5235e2f2a02",
        urlToImage: "https://c.biztoc.com/p/14a6f5235e2f2a02/og.webp",
        publishedAt: "2023-02-18T01:40:07Z",
        content:
          "Presidents' Day is here, and with this glorious three-day break comes you guessed it massive sales at all the major retailers, from Apple to QVC. Expect a lot of great stuff in the mix. \"Presidents' … [+304 chars]",
      },
      {
        source: {
          id: null,
          name: "Biztoc.com",
        },
        author: "reuters.com",
        title: "Tech giants from Google to TikTok face tougher EU rules",
        description:
          "Tech giants including Facebook, Google, Twitter and TikTok face stricter online content rules in the European Union due to their huge number of users. The new rules, known as the Digital Services Act (DSA), classify companies with more than 45 million users a…",
        url: "https://biztoc.com/x/3f5d7d9837533020",
        urlToImage: "https://c.biztoc.com/p/3f5d7d9837533020/og.webp",
        publishedAt: "2023-02-18T01:04:07Z",
        content:
          "Tech giants including Facebook, Google, Twitter and TikTok face stricter online content rules in the European Union due to their huge number of users.The new rules, known as the Digital Services Act … [+299 chars]",
      },
      {
        source: {
          id: null,
          name: "Biztoc.com",
        },
        author: "benzinga.com",
        title:
          "Tesla Disputes Firings Over Unionization Claims: Here's What The EV Giant Says Happened - Tesla (NASDAQ:T",
        description:
          "A report that workers for Tesla Inc TSLA in New York were fired after attempting to form a union is false, the automaker said in a Thursday statement. Here are the key details. What Happened: A report from the Union Workers United accused Tesla of firing doze…",
        url: "https://biztoc.com/x/8558bee932b988f1",
        urlToImage: "https://c.biztoc.com/p/8558bee932b988f1/og.webp",
        publishedAt: "2023-02-18T03:32:10Z",
        content:
          "A report that workers for Tesla Inc TSLA in New York were fired after attempting to form a union is false, the automaker said in a Thursday statement. Here are the key details.What Happened: A report… [+312 chars]",
      },
      {
        source: {
          id: null,
          name: "Biztoc.com",
        },
        author: "npr.org",
        title: "Recession, retail, retaliation",
        description:
          "Economic news of the week - from the government's new projections on unemployment and inflation to the latest retail spending numbers. Plus, what's the deal with companies retaliating against union organizers?For sponsor-free episodes of The Indicator from Pl…",
        url: "https://biztoc.com/x/ffd034c94b4b1109",
        urlToImage: "https://c.biztoc.com/p/ffd034c94b4b1109/og.webp",
        publishedAt: "2023-02-18T00:19:03Z",
        content:
          "Economic news of the week from the government's new projections on unemployment and inflation to the latest retail spending numbers. Plus, what's the deal with companies retaliating against union org… [+220 chars]",
      },
      {
        source: {
          id: null,
          name: "Olhardigital.com.br",
        },
        author: "Rodrigo Mozelli",
        title:
          "Receita Federal prepara novos lotes de itens a serem leiloados; confira quais",
        description:
          "Lances mínimos vão de R$ 1 mil a R$ 200 mil\nO post Receita Federal prepara novos lotes de itens a serem leiloados; confira quais apareceu primeiro em Olhar Digital.",
        url: "https://olhardigital.com.br/2023/02/17/reviews/receita-federal-prepara-novos-lotes-de-itens-a-serem-leiloados-confira-quais/",
        urlToImage:
          "https://img.olhardigital.com.br/wp-content/uploads/2023/02/Sem-titulo-3.png",
        publishedAt: "2023-02-18T01:35:52Z",
        content:
          "A partir do dia 27 de fevereiro, a Receita Federal leiloa 66 lotes de vÃ¡rios produtos retidos na alfÃ¢ndega. Abaixo, o Olhar Digital elucida tudo sobre o leilÃ£o, desde itens a atÃ© como participar.… [+1345 chars]",
      },
      {
        source: {
          id: null,
          name: "Hateblo.jp",
        },
        author: "kjx130",
        title:
          "Apple、Apple TV+で3月末から配信する『テトリス』の公式予告編を公開",
        description:
          "2023年2月17日、AppleはYouTube公式チャンネルにおいてApple TV+で配信を始める映画『テトリス』の公式予告編となる約3分の動画を公開しました。 タロン・エガートン主演によるApple Originalの新作映画。KGBを出し抜くために自らの命を危険にさらし、あのテトリスを世界的な現象へと変えた人物の実話に基づく物語。 同作品は2023年3月31日より、Apple TV+にて視聴可能となります。",
        url: "https://ringosuki.hateblo.jp/entry/Apple_Releases_Official_Trailer_for_%22Tetris%2C%22_Available_on_Apple_TV%2B_at_the_End_of_March",
        urlToImage:
          "https://cdn-ak.f.st-hatena.com/images/fotolife/k/kjx130/20230218/20230218111004.jpg",
        publishedAt: "2023-02-18T03:00:00Z",
        content:
          "2023年2月17日、AppleはYouTube公式チャンネルにおいてApple TV+で配信を始める映画『テトリス』の公式予告編となる約3分の動画を公開しました。\n\nタロン・エガートン主演によるApple Originalの新作映画。KGBを出し抜くために自らの命を危険にさらし、あのテトリスを世界的な現象へと変えた人物の実話に基づく物語。\r\n\n\n同作品は2023年3月31日より、Apple T… [+54 chars]",
      },
      {
        source: {
          id: "the-times-of-india",
          name: "The Times of India",
        },
        author: "ETtech",
        title:
          "YouTube's Neal Mohan is the newest Indian-origin CEO in the tech world",
        description:
          "From Google and Microsoft to Cognizant and Adobe, a growing number of technology-focused firms are today led by Indian-origin chief executives. Neal Mohan, who was named the next CEO of streaming service YouTube, is the newest name added to the growing list o…",
        url: "https://economictimes.indiatimes.com/tech/newsletters/ettech-unwrapped/youtubes-neal-mohan-is-the-newest-indian-origin-ceo-in-the-tech-world/articleshow/98031149.cms",
        urlToImage:
          "https://img.etimg.com/thumb/msid-98031149,width-1070,height-580,imgsize-8294,overlay-ettech/photo.jpg",
        publishedAt: "2023-02-18T01:49:04Z",
        content:
          "From Google and Microsoft to Cognizant and Adobe, a growing number of technology-focused firms are today led by Indian-origin chief executives. Neal Mohan, who was named the next CEO of streaming ser… [+8651 chars]",
      },
      {
        source: {
          id: null,
          name: "PRNewswire",
        },
        author: null,
        title:
          "Worldwide Quantified Self in Healthcare Industry 2023: Global Telemedicine will Reach $161.7 Billion by 2028, Stimulating a Boom in DIY Self-care Diagnostic Solutions",
        description:
          'DUBLIN, Feb. 17, 2023 /PRNewswire/ -- The "Quantified Self in Healthcare Market by Technology, Devices and Applications 2023 - 2028" report has been added to ResearchAndMarkets.com\'s offering. This research provides an assessment of the Connected Healthcare m…',
        url: "https://www.prnewswire.com/news-releases/worldwide-quantified-self-in-healthcare-industry-2023-global-telemedicine-will-reach-161-7-billion-by-2028--stimulating-a-boom-in-diy-self-care-diagnostic-solutions-301750072.html",
        urlToImage:
          "https://mma.prnewswire.com/media/539438/Research_and_Markets_Logo.jpg?p=facebook",
        publishedAt: "2023-02-18T03:30:00Z",
        content:
          'DUBLIN, Feb. 17, 2023 /PRNewswire/ -- The "Quantified Self in Healthcare Market by Technology, Devices and Applications 2023 - 2028" report has been added to  ResearchAndMarkets.com\'s offering.\r\nThis… [+6775 chars]',
      },
      {
        source: {
          id: null,
          name: "Techweb.com.cn",
        },
        author: "故渊",
        title: "拜登下周一将决定苹果是否可以继续在美国市场销售 Apple Watch",
        description:
          "2 月 18 日消息，美国国际贸易委员会(ITC)于去年 12 月裁定,苹果公司旗下带有心电图（ECG）功能的 Apple Watch 侵犯了医疗设备制造商 AliveCor Inc 的专利。该禁令最快将于下周生效，意味着苹果的 Apple Watch Series 8 智能手表将无法在美国市场发售。目前苹果唯一的解决方案，就是游说拜登政府来阻止该禁令生效。苹果公司已经聘请了 Covington & Burling 的游说者 Shara Aranoff（她曾担任过 ITC 主席），以确保可以继续销售 Apple …",
        url: "http://www.techweb.com.cn/it/2023-02-18/2920087.shtml",
        urlToImage:
          "http://upload1.techweb.com.cn/s/120/imgs/2023/0218/1676681266980.jpg",
        publishedAt: "2023-02-18T00:48:38Z",
        content:
          "2 18 ITC 12 ECG AppleWatch AliveCor Inc \r\n Apple Watch Series 8 \r\n Covington &amp; Burling Shara Aranoff ITC Apple Watch\r\n ITC \r\nAliveCor KardiaBand KardiaBand Apple Watch ECG \r\n Apple Watch AliveCor… [+126 chars]",
      },
      {
        source: {
          id: "politico",
          name: "Politico",
        },
        author: "By Hailey Fuchs and Brendan Bordelon",
        title: "Google's influencer army",
        description:
          "In January, a number of prominent internet influencers and the nonprofit Authors Alliance filed an amicus brief defending the tech giant in <i>Gonzalez v. Google</i>.",
        url: "https://www.politico.com/newsletters/politico-influence/2023/02/17/googles-influencer-army-00083552",
        urlToImage:
          "https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg",
        publishedAt: "2023-02-18T00:14:00Z",
        content:
          "With Daniel Lippman \r\nPROGRAMMING NOTE: POLITICO Influence will not publish Monday, Presidents Day, but will be back in your inboxes on Tuesday.\r\nSCOTUS INFLUENCE OPERATION: As Google awaits a U.S. S… [+10551 chars]",
      },
      {
        source: {
          id: null,
          name: "UPROXX",
        },
        author: "Alex Gonzalez",
        title:
          "Jean Dawson Shared A Fan-Favorite Song, 'GHOST*' On All Platforms, And Teased More New Music",
        description:
          "The song was originally released as an Apple Music exclusive.",
        url: "https://uproxx.com/indie/jean-dawson-ghost-all-streaming-platforms/",
        urlToImage:
          "https://uproxx.com/wp-content/uploads/2023/02/jean-dawson-GRID.jpg?w=710",
        publishedAt: "2023-02-18T02:10:18Z",
        content:
          "Following a fruitful 2022, with boasted a much-acclaimed album, CHAOS NOW*, Jean Dawson has dropped a fan-favorite song. On his “GHOST*,” Dawson expresses his desire to slow down and bask in the free… [+1370 chars]",
      },
      {
        source: {
          id: null,
          name: "UPROXX",
        },
        author: "Zachary Johnston",
        title:
          "The Very Best Expensive Rye Whiskeys That Are Absolutely Worth Paying For",
        description:
          "iStockphoto/UPROXX\r\n\n\nRye whiskey is easily one of the most interesting categories in whiskey. Here are 20 bottles that are actually worth paying more for.",
        url: "https://uproxx.com/life/best-expensive-rye-whiskey-ranked-2023/",
        urlToImage:
          "https://uproxx.com/wp-content/uploads/2023/02/expensive-grid-uproxx.jpeg?w=710",
        publishedAt: "2023-02-18T00:29:32Z",
        content:
          "It's time to talk about expensive rye whiskeys that are actually worth those hefty price tags. We’ve already covered the cheap stuff under $50 and the pricier bottles under $100. There are gems to be… [+30287 chars]",
      },
      {
        source: {
          id: null,
          name: "Terra.com.br",
        },
        author: "Pipoca Moderna",
        title: "Séries: As 10 melhores estreias da semana",
        description:
          "As séries estreantes da semana compõem uma programação bastante variada, que vai de franquia ...",
        url: "https://www.terra.com.br/diversao/entre-telas/series/series-as-10-melhores-estreias-da-semana,e4dfa1ccd78cdd631c305d2c95f870425ffuosy8.html",
        urlToImage:
          "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/02/18/47342005-star-trek-picard.jpg",
        publishedAt: "2023-02-18T01:16:44Z",
        content:
          "As séries estreantes da semana compõem uma programação bastante variada, que vai de franquia sci-fi aç drama biográfico e produção documental. Mas além de oferecer diversidade de opções, a relação ta… [+10668 chars]",
      },
      {
        source: {
          id: null,
          name: "Techweb.com.cn",
        },
        author: "故渊",
        title:
          "欧盟要求月活跃用户4500万以上的企业每月报告用户规模 苹果积极响应主动披露其数据",
        description:
          "2 月 18 日消息,根据欧盟最新生效的数字服务法(DSA),包括苹果、谷歌、推特在内的大型科技公司在当地时间  2023 年 2 月 17 日之前，必须向欧盟报告其每月用户规模。DSA 新规要求月活跃用户超过 4500 万的公司必须遵守审计、风险管理和与当局的数据共享规则。苹果、谷歌、Meta 和 Twitter 均已确认超过 4500 万用户门槛。苹果公司表示目前只有 iOS App Store 的用户规模超过 4500 万，不过自愿根据 DSA 法规，每月报告 Mac、Apple Watch 和 Apple…",
        url: "http://www.techweb.com.cn/it/2023-02-18/2920098.shtml",
        urlToImage:
          "http://upload1.techweb.com.cn/s/120/imgs/2023/0218/1676683001533.jpg",
        publishedAt: "2023-02-18T01:16:55Z",
        content:
          "2 18 DSA  2023 2 17 \r\nDSA 4500 \r\nMeta Twitter 4500 iOS App Store 4500 DSA MacApple Watch Apple TV \r\n DSA VLOP App Store VLOP DSA \r\nTwitter 1.009 Alphabet Google Maps 2.786 Google Play 2.746 3.32 Shop… [+22 chars]",
      },
      {
        source: {
          id: null,
          name: "Daily Mail",
        },
        author: "Mj Bergin",
        title:
          "Brad Pitt and George Clooney sport comfortable looks while filming their new movie Wolves",
        description:
          "The legendary actors and friends both donned comfortable attire as they filmed scenes together in Chinatown for the upcoming Apple Tv Plus thriller.",
        url: "https://www.dailymail.co.uk/tvshowbiz/article-11765363/Brad-Pitt-George-Clooney-sport-comfortable-looks-filming-new-movie-Wolves.html",
        urlToImage:
          "https://i.dailymail.co.uk/1s/2023/02/18/00/67818791-0-image-a-29_1676678999811.jpg",
        publishedAt: "2023-02-18T02:00:27Z",
        content:
          "Brad Pitt and George Clooney were spotted on the set of their new movie Wolves in New York City on Friday.\r\nThe legendary actors and friends both donned comfortable attire as they filmed scenes toget… [+4124 chars]",
      },
      {
        source: {
          id: null,
          name: "Daily Mail",
        },
        author: "Connie Rusk",
        title:
          "Sam Smith is a far cry from their racy stage costumes on NYC stroll",
        description:
          "Sam Smith looked worlds away from their stage persona as they stepped out in a casual ensemble for a catch up with friends in West Village, New York on Friday.",
        url: "https://www.dailymail.co.uk/tvshowbiz/article-11765175/Sam-Smith-far-cry-racy-stage-costumes-NYC-stroll.html",
        urlToImage:
          "https://i.dailymail.co.uk/1s/2023/02/17/23/67818027-0-image-a-14_1676677107253.jpg",
        publishedAt: "2023-02-18T00:09:21Z",
        content:
          "They have created quite a statement with their racy and eccentric costumes of late. \r\nBut Sam Smith looked worlds away from their stage persona as they stepped out in a casual ensemble for a catch up… [+3371 chars]",
      },
      {
        source: {
          id: null,
          name: "Blognone.com",
        },
        author: "arjin",
        title:
          "Apple TV+ ปล่อยตัวอย่างหนังออริจินัล Tetris เตรียมฉาย 31 มีนาคมนี้",
        description:
          "แอปเปิลปล่อยเทรลเลอร์ของภาพยนตร์ออริจินัลเรื่องใหม่ Tetris ซึ่งระบุว่าได้รับแรงบันดาลใจจากเรื่องจริง ของการพัฒนาวิดีโอเกมคลาสสิกยอดนิยมเกมหนึ่งของโลก ซึ่ง Tetris จะฉายผ่านแพลตฟอร์ม Apple TV+ ทั่วโลกในวันที่ 31 มีนาคมนี้\r\n\nTetris นำแสดงโดย Taron Egerton ในบท H…",
        url: "https://www.blognone.com/node/132683",
        urlToImage: "https://img.youtube.com/vi/-BLM1naCfME/hqdefault.jpg",
        publishedAt: "2023-02-18T02:30:09Z",
        content:
          "Tetris Tetris Apple TV+ 31 \r\nTetris Taron Egerton Henk Rogers 1988 Alexey Pajitnov \r\n Tetris Jon S. Baird Noah Pink\r\n:",
      },
      {
        source: {
          id: null,
          name: "Independent.ie",
        },
        author: "Adrian Weckler",
        title: "Ask Adrian: Advice on a Garmin Swim watch and failing Face ID",
        description:
          "Question I am looking to buy a Garmin Swim watch. What I would like to know is whether it has a motion sensor. For example, if I am doing a 300-metre swim and I have to stop for a minute or two, will the count stop on the watch and restart when I start again?…",
        url: "https://www.independent.ie/business/technology/ask-adrian-advice-on-a-garmin-swim-watch-and-failing-face-id-42345951.html",
        urlToImage:
          "https://www.independent.ie/business/technology/f0725/42345950.ece/AUTOCROP/w1240h700/ir%20garmin%20swim",
        publishedAt: "2023-02-18T02:30:00Z",
        content:
          "Question I am looking to buy a Garmin Swim watch. What I would like to know is whether it has a motion sensor. For example, if I am doing a 300-metre swim and I have to stop for a minute or two, will… [+2112 chars]",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "BeauHD",
        title: "Google Gives Apple Cut of Chrome iOS Search Revenue",
        description:
          "According to The Register, Google has been paying Apple a portion of search revenue generated by people using Google Chrome on iOS. From the report: This is one of the aspects of the relationship between the two tech goliaths that currently concerns the UK's …",
        url: "https://tech.slashdot.org/story/23/02/17/2315244/google-gives-apple-cut-of-chrome-ios-search-revenue",
        urlToImage: "https://a.fsdn.com/sd/topics/topicgoogle_fb.gif",
        publishedAt: "2023-02-18T00:45:00Z",
        content:
          "This is one of the aspects of the relationship between the two tech goliaths that currently concerns the UK's Competition and Markets Authority (CMA). Though everyone knows Google pays Apple, Samsung… [+2563 chars]",
      },
      {
        source: {
          id: null,
          name: "Digital Trends",
        },
        author: "Alex Welch",
        title: "Hello Tomorrow! review: a trivial retrofuturistic dramedy",
        description:
          "Hello Tomorrow! is a charming, if shallow, retrofuturistic sci-fi dramedy series. Its first three episodes are available to stream now on Apple TV+.",
        url: "https://www.digitaltrends.com/movies/hello-tomorrow-review/",
        urlToImage:
          "https://www.digitaltrends.com/wp-content/uploads/2023/02/Billy-Crudup-stands-near-a-Brightside-poster-in-Hello-Tomorrow.jpg?resize=1200%2C630&p=1",
        publishedAt: "2023-02-18T00:01:34Z",
        content:
          "Jack Billings is a smooth talker. The opening scene of Apple TV+s latest sci-fi original series,Hello Tomorrow!, makes that explicitly clear. The traveling salesman (as played by Billy Crudup) has th… [+5729 chars]",
      },
      {
        source: {
          id: null,
          name: "Excite.co.jp",
        },
        author: "MAC お宝鑑定団 blog（羅針盤）",
        title: "Apple、メディア向けにゲーム体験会を開催",
        description:
          "CNNUnderscored：TheMediumCNNUnderscoredやTom'sGuideが、Appleが2023年2月15日にメディアをニューヨークオフィスに招待して開催したゲーム体験会の様...",
        url: "https://www.excite.co.jp/news/article/Macotakara_44352/",
        urlToImage:
          "https://s.eximg.jp/exnews/logo/noimg_1200x630_trend-topic.jpg",
        publishedAt: "2023-02-18T00:49:00Z",
        content:
          "CNN UnderscoredThe Medium\r\nCNN UnderscoredTom's GuideApple2023215\r\niPhone 14 Pro MaxMac mini (2023)MacBook Pro (16-inch, 2023)Apple TV 4K (3)Call of Duty: Warzone MobileLego Starwars castawaysRun Leg… [+42 chars]",
      },
      {
        source: {
          id: null,
          name: "Disneyfashionista.com",
        },
        author: "Alison",
        title: "Snow White ColourPop is Fairest of Them All!",
        description:
          "Once upon a time, there was a princess named Snow White who was so beautiful! She had skin as white as snow and lips as red as a rose. Snow White was the fairest in the land. As she is my favorite princess, I’m over the moon about the newest Disney x Colourpo…",
        url: "https://disneyfashionista.com/snow-white-colourpop-is-fairest-of-them-all/",
        urlToImage: null,
        publishedAt: "2023-02-18T00:11:34Z",
        content:
          "Please note, some posts on Disney Fashionista may collect a share of sales, if you decide to shop through our linksOnce upon a time, there was a princess named Snow White who was so beautiful! She ha… [+2412 chars]",
      },
      {
        source: {
          id: null,
          name: "Libertaddigital.com",
        },
        author: "Es Cine",
        title:
          "Es Cine: Marvel inicia su nuevo universo y Pol Monen, Milena Smit y Cecilia Freire",
        description:
          "Arconada y Sergio Pérez hablan de la nueva de Ant-Man, El triángulo de la tristeza... y reciben a Pol Monen y Milena Smit y Especial Goyas.",
        url: "https://esradio.libertaddigital.com/fonoteca/2023-02-18/es-cine-marvel-inicia-su-nuevo-universo-y-pol-monen-milena-smit-y-cecilia-freire-6986925.html",
        urlToImage:
          "https://s.libertaddigital.com/2021/09/08/1500/1500/es-cine-podcast-2021.jpg",
        publishedAt: "2023-02-18T01:01:07Z",
        content:
          "Estrenos en cines\r\nAnt-Man y la Avispa: Quantumanía\r\nScott Lang (Paul Rudd) está disfrutando su vida como Vengador ahora que no hay tantos problemas, es famoso y todo el mundo le agradece su trabajo.… [+7120 chars]",
      },
      {
        source: {
          id: null,
          name: "Jornaldenegocios.pt",
        },
        author: "Nightrader",
        title: "Forum Geral • Re: Nighttrading on the Big Apple",
        description: "",
        url: "http://caldeiraodebolsa.jornaldenegocios.pt/viewtopic.php?t=89360&p=1781503#p1781503",
        urlToImage: null,
        publishedAt: "2023-02-18T02:21:13Z",
        content:
          "Procedendo à actualização das análises às empresas que analisei no final do ano passado.C3.AI (AI)Foi a primeira empresa analisada a 10 e 11 de Outubro do ano passado, há pouco mais de 4 meses portan… [+2336 chars]",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "feedfeeder",
        title:
          "Sorry Windows users, Boot Camp is never coming to Apple silicon Macs - Macworld",
        description:
          "Sorry Windows users, Boot Camp is never coming to Apple silicon MacsMacworld Microsoft will support Windows 11 on newer Macs through ParallelsEngadget Microsoft officially supports running Windows 11 on M1 and M2 MacsTechRepublic Microsoft officially blesses …",
        url: "https://slashdot.org/firehose.pl?op=view&amp;id=170367275",
        urlToImage: null,
        publishedAt: "2023-02-18T00:53:19Z",
        content:
          "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "feedfeeder",
        title:
          "Everything worth buying at Walmart's Presidents' Day sale: Apple, LG, Shark and more - Yahoo Life",
        description:
          "Everything worth buying at Walmart's Presidents' Day sale: Apple, LG, Shark and moreYahoo Life Presidents Day Sales 2023: 50 best deals on appliances, tech and moreTODAY Best Lenovo Presidents' Day dealsWePC - PC Tech & PC Gaming News The Best Deals Buy Side …",
        url: "https://slashdot.org/firehose.pl?op=view&amp;id=170367713",
        urlToImage: null,
        publishedAt: "2023-02-18T02:52:31Z",
        content:
          "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "H Swerg",
        title: "DropBox cripples functionality on MacOS",
        description:
          "I tried to come up with a snarky title for this story but settled for a basic description. I've used Dropbox for 10 years now, it's not perfect but it's good enough. Several days ago I dutifully upgraded my MacBook Pro to a new version which was supposed to p…",
        url: "https://slashdot.org/submission/17187045/dropbox-cripples-functionality-on-macos",
        urlToImage: null,
        publishedAt: "2023-02-18T02:39:55Z",
        content:
          "I tried to come up with a snarky title for this story but settled for a basic description. I've used Dropbox for 10 years now, it's not perfect but it's good enough. Several days ago I dutifully upgr… [+3340 chars]",
      },
      {
        source: {
          id: null,
          name: "Cult of Mac",
        },
        author: "Adel Neal",
        title:
          "Enter to win a sturdy, folding iPad stand that rotates 360 degrees [Cult of Mac giveaway]",
        description:
          "This week’s giveaway will let five lucky winners get their hands on a convenient 360 Rotating Universal Tablet Stand from Lululook.\n(via Cult of Mac - Tech and culture through an Apple lens)",
        url: "https://www.cultofmac.com/806396/enter-to-win-a-foldable-stand-with-a-360-degree-rotation-cult-of-mac-giveaway/",
        urlToImage:
          "https://www.cultofmac.com/wp-content/uploads/2023/02/3713EBEF-AE39-481F-8D51-ED74B5766122-e1676582573102.jpeg",
        publishedAt: "2023-02-18T01:30:16Z",
        content:
          "This weeks giveaway will let five lucky winners get their hands on a convenient 360 Rotating Universal Tablet Stand from Lululook. Available in two sleek colors, space gray and silver, this rock-soli… [+1900 chars]",
      },
      {
        source: {
          id: null,
          name: "Ixbt.com",
        },
        author: "jin@ixbt.com (Jin)",
        title:
          "Лидеров Alphabet, Amazon, Apple, Meta* и Microsoft вызывают в суд по делу о сговоре правительства с крупными технологическими компаниями",
        description:
          "Генеральный директор Apple Тим Кук и несколько других руководителей технологических компаний получили повестки в суд от Джима Джордана, председателя юридического комитета Палаты представителей. Вызов в суд является частью расследования комитета по «заявленном…",
        url: "https://www.ixbt.com/news/2023/02/18/alphabet-amazon-apple-meta-microsoft.html",
        urlToImage:
          "https://www.ixbt.com/img/n1/news/2023/1/6/9to5mac_large.png",
        publishedAt: "2023-02-18T03:29:00Z",
        content:
          "Apple , . « ».\r\n , Alphabet, Amazon, Meta* Microsoft: , , . , « 23 2023 ».\r\n - :\r\n . , .\r\n , , , . — .\r\nThe Wall Street Journal, , « , Covid-19, ».\r\n Apple , , , , App Store. , Twitter .\r\n* Meta  .",
      },
      {
        source: {
          id: null,
          name: "Kvraudio.com",
        },
        author: null,
        title:
          "Do you hate the looks Windows 10/11 - WindowBlinds might be the solution, look like Mac or anything (in: Computer Setup and S...)",
        description:
          "By: audiojunkie 18 Feb 00:24 More info: https://www.zdnet.com/article/microsoft-finally-authorizes-windows-11-on-apple-m1-and-m2-macs/Go to this post Go to first unread post in this topic",
        url: "https://www.kvraudio.com/forum/viewtopic.php?t=593114&amp;start=165",
        urlToImage:
          "https://static.kvraudio.com/i/b/kvraudio-300x300-grey-eeeeee.png",
        publishedAt: "2023-02-18T00:24:56Z",
        content:
          "kperry wrote: Thu Feb 16, 2023 10:22 amzerocrossing wrote: Thu Feb 16, 2023 1:29 am\r\nIt might be worth it just so I know where windows overlap. The thing I hate about Windows is that you can often ha… [+359 chars]",
      },
      {
        source: {
          id: null,
          name: "Tech Times",
        },
        author: "Urian B.",
        title: "iPhone 15 Pro Render Reveals Potential Design",
        description:
          "The iPhone 15 Pro renders reveal certain designs and specs of the upcoming phone. Learn more.",
        url: "https://www.techtimes.com/articles/287853/20230217/iphone-15-pro-render-reveals-potential-design.htm",
        urlToImage:
          "https://1734811051.rsc.cdn77.org/data/images/full/421510/iphone-15-pro-render-reveals-potential-design.jpg",
        publishedAt: "2023-02-18T01:30:00Z",
        content:
          "Apple's highly anticipated iPhone 15 series is just around the corner, and rumors have been circulating online regarding its design. Leaked renders of the iPhone 15 Pro have recently become available… [+2957 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Amanda Capritto",
        title: "Heart Health: 4 Ways to Check if Your Heart Rate Is Normal",
        description: "When's the last time you measured your pulse?",
        url: "https://www.cnet.com/health/fitness/heart-health-4-ways-to-check-if-your-heart-rate-is-normal/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/502874b5fd6658139b181c71fb2e8d7a36d55186/hub/2018/09/19/34f476e7-686a-473b-9ac6-0f909c8f8cef/11-apple-watch-series-4-larger-44mm.jpg?auto=webp&fit=crop&height=630&width=1200",
        publishedAt: "2023-02-18T01:00:07Z",
        content:
          "Your heart rate, also known as your pulse, refers to how many times your heart beats per minute. While seemingly basic, your heart rate can actually offer a phenomenal amount of insight into your ove… [+9572 chars]",
      },
      {
        source: {
          id: null,
          name: "Nep123.com",
        },
        author: "Nepalnews.com",
        title: "Want to run Windows 11 on your latest MacBook?",
        description:
          "If you have ever wanted to run Windows 11 on your M1 and M2-powered MacBook models, powered by Apple&rsquor;s ARM silicon, the latest version of the Parallels Desktop can now do just that with the help of Microsoft. According to GSM Arena, a tech news-related…",
        url: "https://nep123.com/news/nepal-news/want-to-run-windows-11-on-your-latest-macbook/",
        urlToImage:
          "https://web.nepalnews.com/storage/story/1024/ANI_202302180218181676690158_1024.jpg",
        publishedAt: "2023-02-18T03:19:42Z",
        content:
          "If you have ever wanted to run Windows 11 on your M1 and M2-poweredMacBook models, powered by Apple&amp;rsquor;s ARM silicon, the latest version of the Parallels Desktop can now do just that with the… [+208 chars]",
      },
    ],
  }];
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News - Top Headlines</h2>
        <div className="row">
         {this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0, 45)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.newsUrl} />
          </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
