import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Attractions() {
  return (
      <section className=" ">
          <h5 className="text-base md:text-lg text-indigo-700 mb-4 mt-5 text-center"> History | Beaches | Water Sports | Wildlife | Sites </h5>
                  <h1 className="text-3xl md:text-4xl text-gray-700 font-semibold text-center mb-5">Discover Sri Lanka</h1>
          
          <div className=' '>
            <div className="container px-1 py-1 mx-auto">
                <div className=" ">
                    <div className="p-1">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div className='flex'>
                                <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                src="/will2.JPG" alt="Wilpattu" width={450} height={100} />
                                <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                      src="/will3.jpg" alt="Willpattu" width={450} height={100} />
                                  <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                      src="/will4.JPG" alt="Willpattu" width={450} height={100} />
                                <div className="p-3 text-justify">
                                
                                        <div className="flex items-center flex-wrap ">
                                        </div>
                                </div>
                            
                            </div>
                              <div className='p-3 text-justify'>
                                  <h2 className="text-base font-medium text-indigo-300 mb-1">Nochiagama</h2>
                                    <h1 className="text-xl font-semibold mb-1">Wilpattu National Park</h1>
                                <p className="leading-relaxed mb-2">Wilpattu National Park, Sri Lanka`s largest national park, is a wildlife enthusiast`s paradise. This vast sanctuary is home to a diverse array of fauna, including majestic elephants, elusive Sri Lankan leopards, sloth bears, and a vibrant bird population. The park`s unique ecosystem, characterized by its numerous `willus` (natural lakes), provides a stunning backdrop for unforgettable safari experiences.
                                </p>
                                <p className="leading-relaxed mb-2">Visitors can immerse themselves in the park`s natural wonders through full-day tours, running from 6 am to 6 pm, or opt for half-day adventures from 2 pm to 6 pm. Many nearby hotels cater to safari-goers, offering packed meals to ensure you`re well-fueled for your wildlife expedition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-1 py-1 mx-auto">
                <div className="flex ">
                    <div className="flex p-2 mb-2 ">
                        <div className="flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image className="lg:h-72 md:h-60 w-full object-cover object-center pr-1"
                                src="/weli1.jpg" alt="Koneswaram Kovil" width={450} height={100} />
                            <div></div>
                            <div className="p-3 text-justify">
                                <h2 className="text-base font-medium text-indigo-300 mb-1">Matara</h2>
                                <h1 className="text-xl font-semibold mb-1">Weligama Bay</h1>
                                  <p className="leading-relaxed mb-2 text-justify">Nestled along Sri Lanka`s southern coast, Weligama Bay is a surfer`s paradise, especially renowned for its beginner-friendly waves.
                                      This picturesque bay, located in Matara district, is approximately a 2.5-hour drive from Katunayake International Airport, making it an accessible retreat for both local and
                                      international visitors seeking sun, sand, and surf.</p>
                                  <p className="leading-relaxed mb-2">The bay boasts a thriving surf culture, with numerous surf schools dotting its golden shores. Whether you prefer structured lessons or one-on-one
                                      guidance, Weligama caters to all preferences with its mix of established surf schools and skilled local instructors. As you progress from wobbly first attempts to confident rides,
                                      you`ll find the warm waters and gentle swells of Weligama to be the perfect training ground for aspiring surfers.</p>
                                  <p className="leading-relaxed mb-2">Complementing its aquatic allure, Weligama offers a diverse range of accommodation options to suit every traveler`s needs and budget. From the
                                      luxurious comforts of the 5-star Marriott to charming boutique hotels and budget-friendly hostels, ther`s a perfect stay for everyone. After a day of riding the waves, unwind
                                      at popular hangouts like Kurum Bay or Kai-Beach, where you can take a refreshing dip in the pool, sip on tropical cocktails, and savor both Sri Lankan delicacies and international cuisine.
                                      As the sun sets, these spots offer the perfect vantage point to enjoy the mesmerizing sea breeze and reflect on your surfing adventures.</p>

                                    <div className="flex items-center flex-wrap ">
                                
                                    </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
          </div>

          <div className=''>
                <div className="container px-1 py-1 mx-auto">
                    
                    <div className="flex">
                        <div className="flex  p-2">
                            <div className=" flex h-full flex-col lg:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image className="lg:h-60 md:h-48 w-full object-cover object-center pr-3"
                                src="/naga.jpg" alt="Nagadeepa temple" width={450} height={100} />
                            
                                
                                <div className="p-3 text-justify">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">Jaffna</h2>
                                    <h1 className="text-xl font-semibold mb-1">Nagadeepa</h1>
                                <p className="leading-relaxed mb-2">Nagadeepa is one of the islands off the Jaffna Peninsula in Sri Lanka. It is a sacred site that
houses a Buddhist temple, Nagadeepa Rajamaha Vihara, which holds immense historical and
religious significance. The place is believed to have been visited by the Buddha himself during
his second visit to Sri Lanka. Legend has it that the Buddha resolved a dispute between two
kings of the Naga tribe: Chulodhara and Mahodhara. 
To reach Nagadeepa, visitors need to embark on a boat journey, that offers glimpses of serene
surrounding. As visitors approach the temple, they are greeted by a peaceful atmosphere and the
rich scent of incense. Devotees and pilgrims from all walks of life visit the temple to pay their
respects and seek blessings and guidance.
                                </p>
                                
                                        <div className="flex items-center flex-wrap ">
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-1 py-1 mx-auto">
                    
                    <div className="flex ">
                        <div className="flex p-1 ">
                            <div className="flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image className="lg:h-72 md:h-60 w-full object-cover object-center pr-1"
                                    src="/kones.jpg" alt="Koneswaram Kovil" width={450} height={100} />
                                <div></div>
                                <div className="p-3 text-justify">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">Trincomalee</h2>
                                    <h1 className="text-xl font-semibold mb-1">Koneswaram Kovil</h1>
                                <p className="leading-relaxed mb-2 text-justify">Koneshwaram Kovil, nestled in Trincomalee along eastern coast of Sri Lanka, is a Hindu temple dedicated to Lord Shiva, known here as Konesar. This ancient temple holds deep spiritual significance for devotees seeking blessings and solace. It is rightly located on the summit of   Swami Rock overlooking the Indian Ocean.  The Kovil offers breathtaking panoramic views, adding to its allure as a sacred sanctuary.
                                </p>
                                <p className="leading-relaxed mb-2">Trincomalee is  renowned for its pristine beaches and stunning coastal stretches in Sri Lanka. Nilaveli Beach with its miles of soft golden sands and crystal-clear turquoise waters, offers a perfect place for sunbathing, swimming, and water sports. Pigeon Island National Park located nearby, presents a haven for snorkelers and divers. It showcases vibrant coral reefs teeming with marine life.
                                </p>
                                
                                        <div className="flex items-center flex-wrap ">
                                    
                                        </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
          </div>

          <div className=''>
            <div className="container px-1 py-1 mx-auto">
                <div className="">
                    <div className=" p-1">
                        <div className=" h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div className='flex'>
                                <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                src="/kitesurf.jpg" alt="Kite Surfing" width={450} height={100} />
                                <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                            src="/kitesurf1.jpg" alt="Kite Surfing" width={450} height={100} />
                                <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                    src="/kitesurf2.jpg" alt="Kite Surfing" width={450} height={100} />
                            </div>
                            <div className="p-3 text-justify">
                                <h2 className="text-base font-medium text-indigo-300 mb-1">Kalpitiya</h2>
                                <h1 className="text-xl font-semibold mb-1">Kite Surfing</h1>
                            <p className="leading-relaxed mb-2">Kitesurfing is a thrilling and exciting water sport drawing enthusiasts to a paradise with pristine beaches and ideal wind conditions. Kalapitiya, in the North West coast on the peninsula of Puttalam, is ladened with pristine flat lagoons and consistent seasonal wind and  creates a haven for kite surfing and many other water sports. With its shallow lagoons and expansive sandy shores, the west coast provides an ideal setting for both beginners and experienced kite surfers.
                                                                    
                                </p>
                                    <div className="flex items-center flex-wrap ">
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="container px-1 py-1 mx-auto">
                    <div className="">
                        <div className=" container px-1 py-2 mx-auto">
                            <div className=''>
                                <div className="p-2 ">
                                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                      <div className='flex'>
                                          <Image className="lg:h-60 md:h-48 w-full object-cover object-center pr-1"
                                    src="/sigiriya.jpg" alt="Sigiriya Lion's rock" width={450} height={100} />
                                    <Image className="lg:h-60 md:h-48 w-full object-cover object-center pr-1"
                                        src="/sigi1.jpg" alt="Sigiriya Lion's rock" width={450} height={100} />
                                      </div>
                                      <div className="p-3 text-justify">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Damdulla</h2>
                                        <h1 className="text-xl font-semibold mb-1">Sigiriya </h1>
                                    <p className="leading-relaxed mb-2">Sigiriya, designated as a UNESCO world heritage site is an ancient rock fortress, nestled in the forests of central Sri Lanka. Famed as the Lion’s Rock, Sigiriya showcases the wonder of ancient engineering and rich cultural heritage. The fortress was built  in the 5th century AD by King Kashyapa, as his royal palace when  establishing his kingdom. As the story says, King Kashyapa, driven by his ambition and desire for power, usurped the throne by killing his father, King Dathusena. The fortress is surrounded by elaborate gardens and water features.
                                    </p>
                                    <p className="leading-relaxed mb-2">The main attraction of the place is its sophisticated and extraordinary water technology, which allowed for the channeling of water to the summit of the rock, and colorful frescoes: maidens with beautiful flowers.  This engineering marvel and exquisite artworks offer a glimpse into the fortress’s grandeur, aesthetic appeal , artistic prowess and cultural sophistication of the ancient inhabitants of Sigiriya.
                                    </p>
                                            <div className="flex items-center flex-wrap ">
                                            </div>
                                          </div>
                                        <div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>

          <div className=''>
            <div className="container px-1 py-2 mx-auto">
                <div className="">
                    <div className=" p-1">
                        <div className=" h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div className='flex'>
                            <Image className="lg:h-96 md:h-72 sm:h-48 w-full object-cover object-center pr-1"
                            src="/dalada.jpg" alt="Kandy Dalada Maligawa" width={450} height={100} />
                            <Image className="lg:h-96 md:h-72 sm:h-48 w-full object-cover object-center pr-1"
                                src="/elep.JPG" alt="Kandy Dalada Maligawa" width={450} height={100}/>
                            </div>
                            <div className="p-3 text-justify">
                                <h2 className="text-base font-medium text-indigo-300 mb-1">Kandy</h2>
                                <h1 className="text-xl font-semibold mb-1">Dalada Maligawa</h1>
                            <p className="leading-relaxed mb-2">Nestled in the heart of Sri Lanka and surrounded by magnificent mountains, Kandy is steeped in tradition and history and is home to some of the most iconic attractions of the country. Temple of the Tooth Relic, known as Sri Dalada Maligawa houses the sacred tooth relic of the Lord Buddha, an object of veneration for Buddhists all over the world. The presence of the sacred tooth relic is believed to bring blessings, protection, and prosperity to the country and its people. The temple premises showcase exquisite Sri Lankan architecture, with intricate wood carvings, beautiful paintings, and grand halls. It is not only a religious site but also a cultural and historical treasure that showcases the rich heritage of Sri Lanka.
                            </p>
                            <p className="leading-relaxed mb-2">The most spectacular event in Kandy is the Esala Perahara, a grand procession that showcases Sri Lanka`s rich heritage and vibrant culture. The Perahara takes place annually to honor the sacred Tooth Relic and parade through the streets of the city in a magnificent display featuring a variety of traditional dancers, elaborately adorned elephants, festively dressed Kandyan drummers and fire performers.
                            </p>
                                    <div className="flex items-center flex-wrap ">
                                
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="">
                            <div className="flex p-1">
                                <div className=" h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <div className='flex'>
                                  <Image className="lg:h-96 md:h-72 sm:h-48 w-full object-cover object-center pr-1"
                                  src="/ad_bridge.jpg" alt="Adam's Bridge Mannar" width={450} height={100} />
                              <Image className="lg:h-96 md:h-72 sm:h-48 w-full object-cover object-center pr-1"
                                  src="/boab_tree.jpg" alt="Mannar Baobab tree" width={450} height={100} />
                             
                                    </div>
                                    <div className="p-3 text-justify">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Mannar</h2>
                                        <h1 className="text-xl font-semibold mb-1">Adam`s Bridge</h1>
                                      <p className="leading-relaxed mb-2">It is a chain of limestone shoals that connects the northern end of country`s Mannar island to the South eastern coast of Pamban Island, India. According to Hindu mythology, the bridge is said to have been created by an army of worrier monkeys (Vanara) to aid Rama on his request to reach Kingdom of Lanka to  reclaim his wife. The place holds historical, religious and cultural importance.
                                      </p>
                                      <p className="leading-relaxed mb-2">Mannar is a large island with a rich history. It was once at the center of the Island`s prosperous pearling industry during the time of Portuguese and Arab traders. The remnants of colonial past can still be seen today, offering a glimpse into its vibrant history. The famed Baobab tree, which is believed to be 700 years old not only enhances the island`s beauty but also serves as a testament  to its enduring legacy.
                                      </p>
                                      <p className="leading-relaxed mb-2">The sacred Catholic church, the shrine of our lady of Madhu, ancient Thanthirimale temple and Thesawalamai Shiva Kovil are key points of interest  in Mannar that enrich its cultural landscape. These sites hold a deep significance to Buddhist, Catholic and Hindu devotees showcasing the rich multicultural heritage  and spiritual diversity.
                                      </p>
                                      <p className="leading-relaxed mb-2">Mannar is a paradise of adventure and wonderment and renowned for rich bio-diversity. It is a sanctuary for mighty migrant birds like flamingos, herons, and pelicans among others.  The mangrove forests, salt pans, and lagoons in the island creates an ideal habitat for those mighty  birds making it a haven for nature enthusiasts and bird watchers.
                                      </p>
                                            <div className="flex items-center flex-wrap ">
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
          </div>

          <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="">
                            <div className="flex p-1">
                                <div className=" h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                     <div className='flex'>
                                            <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                            src="/sripada.jpg" alt="SriPada Adam's Peak" width={450} height={100} />
                                            <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                                src="/sripada1.jpg" alt="SriPada Adam's Peak" width={450} height={100} />
                                            <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                                src="/sripada2.jpg" alt="SriPada Adam's Peak" width={450} height={100} />
                              
                                    </div>
                                    <div className="p-3 text-justify ">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Hatton</h2>
                                        <h1 className="text-xl font-semibold mb-1">Sripada</h1>
                                  <p className="leading-relaxed mb-2">Sri Pada also known as Adam`s Peak holds profound religious significance, attracting  thousands of pilgrims of multiple faiths including Buddhism, Hinduism, Christianity and Islam.
The mountain is located in the southern reaches of the Central Highlands soaring up to 2243 meters (7359 feet) above the sea level. 
                                      <p>The mountain is visited by thousands of pilgrims to pay homage to the “Sacred Footprint” at its summit believed by Buddhists as the footprint of the Buddha and Hindus, Christians and Muslims as the footprint of Lord Shiva, Adam and the Muslim prophet Ismail.</p>
                                      
                                      The pilgrim season to the holy mountain Sri Pada begins annually from December to May. This pilgrimage site and the trek to its summit involves ascending a steep staircase with over 5,000 steps. Pilgrims, hikers, and nature enthusiasts are drawn to Sripada not only for its religious importance but also for the breathtaking views from the top. The devotees climb the mountain to invoke blessings  while the trekkers enjoy an exhilarating hike through different access routes to the summit. The journey to Sripada is a blend of physical challenge, cultural exploration and spiritual experience.
                                     </p>
                                            <div className="flex items-center flex-wrap ">
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
              </div>
              
              <div className="container px-1 py-1 mx-auto">
                        
                        <div className="flex">
                            <div className="flex p-1">
                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <Image className="lg:h-60 md:h-48 w-full object-cover object-center pr-1"
                                        src="/ella.jpg" alt="Ella" width={450} height={100} />
                                    <div className="p-3 text-justify">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Haputale</h2>
                                        <h1 className="text-xl font-semibold mb-1">Ella</h1>
                                  <p className="leading-relaxed mb-2">Tucked into Badulla District, Ella is a charming town in country`s highlands with lush green tea plantations, mountain jungles and a cool climate.
                                      The town is most famous for its iconic Nine Arch Bridge which is a fine example of colonial-era construction in Sri Lanka. A trek down the railway track to the bridge is a popular
                                      activity, especially around the time the train arrives.  The stunning views of the surrounding landscape makes it a popular spot for photographers and sightseers.
                                  </p>
                                  <p className="leading-relaxed mb-2">Ella is a city steeped in history with several sites associated with the ancient epic Ramayana. Little Adam`s Peak named so due to its striking
                                      similarity to the sacred mountain Adam`s Peak (Sri Pada)  offers a relatively easy hike with panoramic views of the Ella Gap and surrounding mountains. The Ravana falls cascade
                                      gracefully down a series of rock formations providing a gorgeous view of the neighboring nature reserve.
                                  </p>
                                            <div className="flex items-center flex-wrap ">
                                        
                                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="">
                            <div className="flex p-1">
                                <div className=" h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <div className='flex'>
                                  <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                  src="/aruga.jpg" alt="Arugambay food" width={450} height={100} />
                              <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                  src="/aru.JPG" alt="Arugambay beach" width={450} height={100} />
                              <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/arug_ele.JPG" alt="Elephant" width={450} height={100} />
                                    </div>
                                    <div className="p-3 text-justify">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Potuvil</h2>
                                        <h1 className="text-xl font-semibold mb-1">Arugambay</h1>
                                          <p className="leading-relaxed mb-2">Arugam Bay is famed as a world-class surfing destination.
                                              It offers several surfing points with waves of different rhythms
                                              to suit the preferences of a variety of surfers. Located in the Eastern coast of Sri Lanka,
                                              this Surfing Paradise attracts wave enthusiasts from around the globe. The surf season runs
                                              from April to October making it  ideal for surfing, windsurfing, and kite surfing.
                                          </p>
                                          <p className="leading-relaxed mb-2">Arugam Bay is not only a destination of surfers.
                                              There are number of historical and archeological  attractions located in and around of
                                              Arugam Bay. One key attraction is Muhudu Maha Vharaya, an ancient Buddhist temple with 2000
                                              years of history.  This sacred site holds historical and archaeological importance, offering
                                              insights into Sri Lanka`s ancient civilization.
                                          </p>
                                          <p className="leading-relaxed mb-2">The coastline of Arugam Bay is perfect for exploring white
                                              sandy beaches. Elephant Rock, named after the rock`s supposed resemblance to an elephant,
                                              is an extremely popular spot for sunbathing, swimming, and snorkeling. Visitors can also enjoy
                                              beachside activities such as beach volleyball, yoga sessions, and traditional drumming
                                              performances. Besides its natural beauty and water sport, Arugam Bay offers lively atmosphere
                                              with beach bars, seafood restaurants, and local markets in the shore.
                                             </p>
                                            <div className="flex items-center flex-wrap ">
                                       
                                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
          </div>
                    </div>
          </div>

          <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="flex">
                            <div className="flex p-1">
                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/yala.JPG" alt="yala national park" width={450} height={100} />
                                    <div></div>
                                    <div className="p-3 text-justify ">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Tissamaharama</h2>
                                        <h1 className="text-xl font-semibold mb-1">Yala National Park</h1>
                                  <p className="leading-relaxed mb-2">Yala National Park  is the second largest wild sanctuary located
                                      on the southeastern tip of the country. The park is widely known for its incredible bio-diversity
                                      as it hosts a variety of ecosystems ranging from dense forests, vast grasslands, freshwater
                                      wetlands, to marine ecosystems.  It is rich in wildlife and home to a great variety of species
                                      like elephants, leopards, crocodiles, deer and numerous birds  and offers a unique safari
                                      experience for wildlife enthusiasts.  With picturesque landscapes and a variety of habitats,
                                      Yala National Park promises an unforgettable adventure into the heart of Sri Lanka`s wildlife
                                      and  natural beauty.
                                  </p>
                                            <div className="flex items-center flex-wrap ">
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container px-1 py-1 mx-auto">

                        <div className="flex">
                            <div className="flex p-1">

                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                   
                              <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                      src="/mirissa.jpg" alt="Mirissa" width={450} height={100} />
                                   
                                    <div className="p-3 text-justify ">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1"> Matara</h2>
                                        <h1 className="text-xl font-semibold mb-1">Mirissa</h1>
                                  <p className="leading-relaxed mb-2">Mirissa is one of the most popular beach destinations
                                      in southern Sri Lanka.  With soft white sand, palm trees, hot sun and safe swimming
                                      conditions the place is renowned for its relaxed vibes. The beach stretches far along
                                      the coast and is the perfect place to soak up the sun  and to watch sunset. The number
                                      of cafes and restaurants back onto the beach serves fresh seafood. Mirissa is not only
                                      a haven for beach lovers but also island`s main whale watching spot. Visitors can enjoy
                                      a whale watching excursion to spot blue whales or dolphins. With its laid-back charm,
                                      Mirissa is a sanctuary of peace letting the travelers experience  the softness of sand
                                      while witnessing the mesmerizing sunset.
                                  </p>
                                  <p className="leading-relaxed mb-2">The beaches of Mirissa has  everything a traveler desires,
                                      both local and foreign vendors offering an array of goods and services. From beachside cafes
                                      serving up fresh seafood dishes to souvenir shops selling handmade crafts and clothing,
                                      there`s something for everyone to enjoy.
                                  </p>
                                            <div className="flex items-center flex-wrap ">
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          </div>

          <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="">
                            <div className="flex p-1">
                                <div className=" h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <div className='flex'>
                                  <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                  src="/fort2.jpg" alt="Galle Dutch Fort" width={450} height={100} />
                              <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                  src="/fort.jpg" alt="Galle Dutch Fort" width={450} height={100} />
                              <Image className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/fort3.jpg" alt="Galle Dutch Fort" width={450} height={100} />
                                    </div>
                                    <div className="p-3 text-justify">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Galle</h2>
                                        <h1 className="text-xl font-semibold mb-1">Dutch Fort</h1>
                                  <p className="leading-relaxed mb-2">Galle Dutch Fort, located in south-west of Sri
                                      Lanka is  one of the best-preserved forts in South Asia. The historic fortress
                                      which epitomizes Dutch colonial architecture was constructed by the Dutch in the
                                      17th century and later fortified by the British and stands as a UNESCO World Heritage
                                      Site. Well-preserved features of the Fort like ramparts, bastions and cobblestone
                                      streets showcases a blend of Dutch and Portuguese architectural influence. Trendy
                                      cafes, boutique shops, and museums within the fort walls add a unique character to
                                      the atmosphere of the fort`s colonial streets. Visitors can spend an entire day
                                      exploring the beauty of Galle Fort by shopping, watching sunset and exploring the
                                      history. The Galle Dutch Fort is  a testament to Sri Lanka`s colonial past and also
                                      a captivating destination that attracts tourists with its picturesque surroundings.
                                  </p>
                                            <div className="flex items-center flex-wrap ">
                                        
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    
          </div>

    </section>
  )
}

export default Attractions
