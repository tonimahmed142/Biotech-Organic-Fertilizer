let isBangla = true;

function toggleLanguage() {
  isBangla = !isBangla;

  // Update header elements
  document.querySelector(".nav-link").innerText = isBangla
    ? "Home"
    : "Home";

  document.querySelector(".lang-btn").innerText = isBangla
    ? "Switch to English"
    : "বাংলায় দেখুন";

  // Update main content
  document.getElementById("title").innerText = isBangla
    ? "জৈব সার ও ভার্মি কম্পোস্ট"
    : "Organic Fertilizer and Vermicompost";

  document.getElementById("organic-fertilizer-what").innerHTML = isBangla
    ? `<h2>জৈব সার কী?</h2>
      <p>
        জৈব সার এমন একটি প্রাকৃতিক সার, যা উদ্ভিদ, প্রাণী বা অন্যান্য জীবন্ত উপাদান থেকে তৈরি হয়। এটি কোনো রাসায়নিক প্রক্রিয়া বা কৃত্রিম উপাদানের মাধ্যমে তৈরি নয়। বরং এটি গাছের পাতা, গৃহস্থালির জৈব বর্জ্য, প্রাণীর মল-মূত্র, খামারের আবর্জনা, পচা খাবার ইত্যাদি থেকে প্রাকৃতিকভাবে তৈরি হয়।
        <br><br>
        জৈব সার ব্যবহারের ফলে মাটি যেমন উর্বর হয়, তেমনি উদ্ভিদও পুষ্টি পায়। এটি শুধু উদ্ভিদকেই খাদ্য জোগায় না, বরং মাটির স্বাস্থ্যও বজায় রাখে। মাটির ভেতরে থাকা উপকারী জীবাণুগুলোর কার্যক্রমকে উৎসাহ দেয় এবং মাটির গঠন উন্নত করে। ফলে উদ্ভিদ আরও ভালোভাবে শিকড় বিস্তার করতে পারে, পানি ধরে রাখতে পারে, এবং রোগ প্রতিরোধ ক্ষমতা পায়।
      </p>`
    : `<h2>What is Organic Fertilizer?</h2>
      <p>
        Organic fertilizer is a type of natural fertilizer that is derived from living or once-living materials such as plants, animals, or organic waste. Unlike synthetic fertilizers, organic fertilizers are not chemically manufactured. Instead, they come from natural sources like decomposed plant matter, animal waste, household organic waste, and farm residues.
        <br><br>
        Organic fertilizers nourish the plants while simultaneously improving the health of the soil. They feed beneficial microorganisms in the soil, which in turn enhance soil structure, increase water retention, and support the healthy development of plant roots. This natural process allows plants to grow more efficiently and build greater resistance to diseases and environmental stress.
      </p>`;


   document.getElementById("organic-fertilizer-examples").innerHTML = isBangla
   ? `<h2>জৈব সারের বৈশিষ্ট্যসমূহ:</h2>
      <p>
        1. এটি ধীরে ধীরে উদ্ভিদের শিকড়ে পুষ্টি সরবরাহ করে, ফলে দীর্ঘমেয়াদি ফলাফল দেখা যায়।<br>

        2. মাটির মধ্যে হিউমাস তৈরিতে সাহায্য করে, যা মাটিকে ঝুরঝুরে ও বাতাস চলাচলযোগ্য রাখে।<br>
        
        3. জৈব সার মাটির জৈব-রাসায়নিক গুণমান বৃদ্ধি করে।<br>
        
        4. এর মধ্যে কোনো ক্ষতিকর রাসায়নিক পদার্থ থাকে না, ফলে পরিবেশ দূষণের সম্ভাবনা থাকে না।<br>
        
        5. এটি জমির উৎপাদনশীলতা দীর্ঘকাল ধরে ধরে রাখতে সাহায্য করে।<br>
      </p>`
   : `<h2>Key Characteristics of Organic Fertilizers:</h2>
      <p>
        1. They release nutrients slowly, offering a long-lasting supply of nutrition to plants.<br>

        2.They enhance the formation of humus, which keeps the soil loose and allows better airflow and water absorption.<br>
        
        3. Organic fertilizers improve the biological and chemical properties of soil.<br>
        
        4. They are free from harmful synthetic chemicals, making them safe for the environment.<br>
        
        5. They support long-term soil fertility and sustainability.<br>
      </p>`;
  
   document.getElementById("organic-fertilizer-benefits").innerHTML = isBangla
   ? `<h2>জৈব সার ব্যবহারের উপকারিতা:</h2>
      <p>
        <b>পরিবেশবান্ধব:</b> কোনো ধরণের রাসায়নিক পদার্থ ব্যবহার না করায় এটি পরিবেশ ও জীববৈচিত্র্যের জন্য নিরাপদ।<br>

        <b>মাটির উর্বরতা বৃদ্ধি:</b> মাটির কাঠামো এবং জীববৈচিত্র্যের উন্নয়ন ঘটায়।<br>
        
        <b>টেকসই কৃষি ব্যবস্থা গড়ে তোলে:</b> কৃষকদের রাসায়নিক সারের উপর নির্ভরশীলতা কমায়।<br>
        
        <b>উৎপাদনের গুণগত মান বৃদ্ধি করে:</b> জৈব সার ব্যবহারে ফলন যেমন নিরাপদ হয়, তেমনি স্বাদ ও পুষ্টিমানেও উন্নত হয়।<br>
      </p>`
   : `<h2>Benefits of Using Organic Fertilizers:</h2>
      <p>
        <b>Eco-Friendly:</b> As they are made from natural materials, they pose no harm to the environment or biodiversity.<br>

        <b>Improves Soil Fertility:</b> They enhance both the physical and biological properties of the soil.<br>
        
        <b>Supports Sustainable Farming:</b> Reduces dependency on chemical fertilizers and fosters environmentally conscious agriculture.<br>
        
        <b>Enhances Quality of Crops:</b> Crops grown with organic fertilizers tend to have better taste, nutritional value, and safety for human consumption.<br>
      </p>`;

  document.getElementById("organic-fertilizer-need").innerHTML = isBangla
    ? `<h2>মাটির জন্য কেন জৈব সার গুরুত্বপূর্ণ?</h2>
      <p>
        বর্তমান সময়ে অধিক রাসায়নিক সার ব্যবহার মাটির উর্বরতা ধ্বংস করছে। মাটিতে হঠাৎ করে পুষ্টি যোগ করা হলে তা শিকড়ে পৌঁছানোর আগেই ধুয়ে যেতে পারে অথবা মাটির জীবাণু মরে যেতে পারে। জৈব সার ধীরে ধীরে পুষ্টি সরবরাহ করে বলে এটি মাটির জৈবিক কার্যকলাপকে দীর্ঘমেয়াদে সজীব রাখে।
      </p>`
    : `<h2>Why Organic Fertilizer is Important for Soil:</h2>
      <p>
        In modern agriculture, the excessive use of chemical fertilizers has led to a decline in soil fertility. Synthetic fertilizers may provide instant nutrients, but they often harm the microbes in the soil and degrade its quality over time. Organic fertilizers, on the other hand, provide nutrients gradually and promote healthy biological activity in the soil, ensuring its fertility is preserved for future use.
      </p>`;

  document.getElementById("organic-fertilizer-table").innerHTML = isBangla
    ? `<h2>জৈব সারের পুষ্টি উপাদান ও তাদের গড় পরিমাণ</h2>
      <table>
        <tr>
          <th>পুষ্টি উপাদান (Nutrient)</th>
          <th>সংক্ষিপ্ত রূপ</th>
          <th>গড় পরিমাণ (প্রতি ১০০ কেজি জৈব সার)</th>
        </tr>
        <tr>
          <td>নাইট্রোজেন</td>
          <td>N</td>
          <td>১.০% - ২.৫%</td>
        </tr>
        <tr>
          <td>ফসফরাস</td>
          <td>P</td>
          <td>০.৫% - ১.৫%</td>
        </tr>
        <tr>
          <td>পটাশিয়াম</td>
          <td>K</td>
          <td>০.৫% - ১.৫%</td>
        </tr>
        <tr>
          <td>ক্যালসিয়াম</td>
          <td>Ca</td>
          <td>১.০% - ৩.০%</td>
        </tr>
        <tr>
          <td>ম্যাগনেসিয়াম</td>
          <td>Mg</td>
          <td>০.৩% - ১.০%</td>
        </tr>
        <tr>
          <td>সালফার</td>
          <td>S</td>
          <td>০.২% - ১.০%</td>
        </tr>
        <tr>
          <td>জিঙ্ক</td>
          <td>Zn</td>
          <td>২০-৫০ মিলিগ্রাম (mg/kg)</td>
        </tr>
        <tr>
          <td>বোরন</td>
          <td>B</td>
          <td>১৫-৪০ মিলিগ্রাম (mg/kg)</td>
        </tr>
        <tr>
          <td>লৌহ (আয়রন)</td>
          <td>Fe</td>
          <td>২০০-১০০০ মিলিগ্রাম (mg/kg)</td>
        </tr>
        <tr>
          <td>ম্যাঙ্গানিজ</td>
          <td>Mn</td>
          <td>১০০-৫০০ মিলিগ্রাম (mg/kg)</td>
        </tr>
        <tr>
          <td>কপার (তামা)</td>
          <td>Cu</td>
          <td>৫-৩০ মিলিগ্রাম (mg/kg)</td>
        </tr>
      </table>`
    : `<h2>Nutrients in Organic Fertilizer & Their Approximate Amounts</h2>
      <table>
        <tr>
          <th>Nutrient</th>
          <th>Symbol</th>
          <th>Approximate Content (per 100 kg organic fertilizer)</th>
        </tr>
        <tr>
          <td>Nitrogen</td>
          <td>N</td>
          <td>1.0% – 2.5%</td>
        </tr>
        <tr>
          <td>Phosphorus</td>
          <td>P</td>
          <td>০.5% - 1.5%</td>
        </tr>
        <tr>
          <td>Potassium</td>
          <td>K</td>
          <td>0.5% – 1.5%</td>
        </tr>
        <tr>
          <td>Calcium</td>
          <td>Ca</td>
          <td>1.0% – 3.0%</td>
        </tr>
        <tr>
          <td>Magnesium</td>
          <td>Mg</td>
          <td>0.3% – 1.0%</td>
        </tr>
        <tr>
          <td>Sulfur</td>
          <td>S</td>
          <td>0.2% – 1.0%</td>
        </tr>
        <tr>
          <td>Zinc</td>
          <td>Zn</td>
          <td>20 – 50 mg/kg</td>
        </tr>
        <tr>
          <td>Boron</td>
          <td>B</td>
          <td>15 – 40 mg/kg</td>
        </tr>
        <tr>
          <td>Iron</td>
          <td>Fe</td>
          <td>200 – 1000 mg/kg</td>
        </tr>
        <tr>
          <td>Manganese</td>
          <td>Mn</td>
          <td>100 – 500 mg/kg</td>
        </tr>
        <tr>
          <td>Copper</td>
          <td>Cu</td>
          <td>5 – 30 mg/kg</td>
        </tr>
      </table>`;

  document.getElementById("Vermicompost-what").innerHTML = isBangla
    ? `<h2>ভার্মিকম্পোস্ট কী?</h2>
      <p>
        বিভিন্ন জৈব পদার্থ পঁচিয়ে কেঁচোর মাধ্যমে প্রাকৃতিক উপায়ে যে জৈব সার তৈরি করা হয় তাকে ভার্মিকম্পোস্ট বা কেঁচো সার বলে। ভার্মিকম্পোস্ট তৈরিতে ব্যবহৃত জৈব পদার্থ বায়ু শূন্য প্রক্রিয়ায় গাজন বা পচানো হয়। কেঁচো এগুলো খেয়ে মলত্যাগ করে এবং দেহ হতে এক ধরনের রাসায়নিক পদার্থ বের হয় যার দরুন জৈব পদার্থের পুষ্টিমান বেড়ে যায়। আমাদের মনে রাখতে হবে, শুধু কেঁচোই আবর্জনা পচাতে কাজ করে না, আবর্জনা পচানোর কাজটি মূলত করে থাকে অণুজীব সমূহ (ব্যাকটেরিয়া, ছত্রাক, এ্যাকটিনোমাইসিস, ইত্যাদি)।
        <br><br>
        কেঁচো যে সকল আবর্জনা ভক্ষণ করে, সেসব আবর্জনা কেঁচোর অন্ত্রনালী দিয়ে বাহিত হয়ে বিষ্ঠাকারে ভার্মিকম্পোস্ট রূপে বেরিয়ে আসে। আবর্জনাকে ভার্মিকম্পোস্টে রূপান্তরিত করতে কার্যকর ভূমিকা রাখে কেঁচোর অন্ত্রে অবস্থিত অণুজীবসমূহ। উপযুক্ত পরিবেশে ভার্মি কম্পোস্ট তৈরিতে ৩০-৪০ দিন সময় লাগে।
      </p>`
    : `<h2>What is Vermicompost?</h2>
      <p>
        Vermicompost, or worm compost, is a type of organic fertilizer produced naturally by decomposing various organic materials through the digestive process of earthworms. The organic substances used in vermicomposting are decomposed in an anaerobic process. Earthworms consume these materials and excrete them, and their bodies also release certain chemical substances that increase the nutritional value of the organic matter.

        <br><br>
        It’s important to remember that earthworms are not solely responsible for decomposing waste; the decomposition is primarily carried out by microorganisms such as bacteria, fungi, and actinomycetes.

        <br><br>
        The waste consumed by earthworms passes through their intestines and is excreted as vermicompost. The microorganisms present in the worm's gut play a crucial role in converting waste into vermicompost. Under suitable conditions, it takes about 30–40 days to produce vermicompost.
      </p>
      `;
    document.getElementById("Vermicompost-examples").innerHTML = isBangla
    ? `<h2>কেঁচো সারের বৈশিষ্ট্যসমূহ:</h2>
      <p>
        1. <b>জৈব উপাদানে সমৃদ্ধ:</b> কেঁচো সার বিভিন্ন ধরণের পচনশীল জৈব পদার্থ থেকে তৈরি হয়, যেমন: সবজির খোসা, শুকনো পাতা, গোবর ইত্যাদি।<br>

        2. <b>সুক্ষ্ম ও দানাদার গঠন:</b> এটি দেখতে মিহি মাটির মতো এবং হাতে নিলেই বোঝা যায় যে এটি দানাদার ও সহজে ছড়িয়ে যায়।<br>
        
        3. <b>গন্ধহীন ও পরিবেশবান্ধব:</b> কেঁচো সার সম্পূর্ণ প্রাকৃতিক ও গন্ধহীন হওয়ায় এটি পরিবেশে কোনো দূষণ সৃষ্টি করে না।<br>
        
        4. <b>জীবাণুবিহীন:</b> প্রাকৃতিক প্রক্রিয়ায় প্রস্তুত হওয়ার কারণে এতে রোগজীবাণু বা ক্ষতিকর ব্যাকটেরিয়া থাকে না।<br>
        
        5. <b>উন্নত পানি ধারণক্ষমতা:</b> মাটির আর্দ্রতা ধরে রাখতে সাহায্য করে, ফলে গাছ দীর্ঘ সময় পানি পায়।<br>
        
        6. <b>পিএইচ (pH) সুষম:</b> কেঁচো সার সাধারণত নিরপেক্ষ বা সামান্য অম্লীয় পিএইচ মানসম্পন্ন হয়, যা অধিকাংশ গাছের জন্য উপযোগী।<br>
      </p>`
    : `<h2>Characteristics of Vermicompost:</h2>
      <p>
        1. <b>Rich in Organic Matter:</b> Vermicompost is made from biodegradable organic materials like vegetable peels, dry leaves, cow dung, etc.<br>

        2. <b>Fine and Granular Texture:</b> It has a soft, crumbly, and granular structure that makes it easy to apply to soil.<br>
        
        3. <b>Odorless and Eco-Friendly:</b> Vermicompost is completely natural and odorless, making it safe for the environment.<br>
        
        4. <b>Free from Pathogens:</b> It’s produced through a natural process and is free from harmful bacteria or pathogens.<br>
        
        5. <b>Improves Water Retention:</b> Helps soil retain moisture for longer, ensuring plants have access to water over time.<br>
        
        6. <b>Balanced pH:</b> Vermicompost usually has a neutral or slightly acidic pH, ideal for most plant types.<br>
      </p>`;
    document.getElementById("Vermicompost-benefits").innerHTML = isBangla
    ? `<h2>কেঁচো সার ব্যবহারের উপকারিতা</h2>
      <p>
        1. <b>উৎপাদন বৃদ্ধি:</b> কেঁচো সার ব্যবহারে গাছের বৃদ্ধি দ্রুত হয় এবং ফলনও বাড়ে।

        2. <b>মাটির গঠন উন্নত করে:</b> মাটিকে আরও ঝুরঝুরে ও উর্বর করে তোলে।
        
        3. <b>গাছের রোগ প্রতিরোধ ক্ষমতা বাড়ায়:</b> এতে থাকা হরমোন ও মাইক্রোবস গাছকে বিভিন্ন রোগ থেকে রক্ষা করে।
        
        4. <b>দীর্ঘমেয়াদী পুষ্টি প্রদান:</b> এটি ধীরে ধীরে পুষ্টি ছাড়ে, ফলে দীর্ঘ সময় গাছ পুষ্টি পায়।
        
        5. <b>রাসায়নিক সার কম ব্যবহার করা যায়:</b> কেঁচো সার ব্যবহারে রাসায়নিক সারের উপর নির্ভরতা কমে যায়।
        
        6. <b>পরিবেশ রক্ষা করে:</b> এটি বর্জ্য পদার্থকে কাজে লাগিয়ে পরিবেশবান্ধব সার তৈরি করে।
      </p>`
    : `<h2>Benefits of Using Vermicompost</h2>
      <p>
        1. <b>Boosts Crop Yield:</b> Promotes faster plant growth and increases yield significantly.

        2. <b>Improves Soil Structure:</b> Makes soil more fertile and crumbly, enhancing root growth.
        
        3. <b>Enhances Plant Immunity:</b> The presence of beneficial microbes and enzymes helps fight off plant diseases.
        
        4. <b>Provides Long-Term Nutrition:</b> Releases nutrients slowly, allowing sustained nourishment for plants.
        
        5. <b>Reduces Chemical Fertilizer Use:</b> Lessens dependency on chemical fertilizers by offering a natural alternative.
        
        6. <b>Supports Environmental Sustainability:</b> Converts organic waste into a valuable resource, reducing pollution.
      </p>`;
    document.getElementById("Vermicompost-important").innerHTML = isBangla
    ? `<h2>মাটির জন্য কেন কেঁচো সার গুরুত্বপূর্ণ? </h2>
      <p>
        মাটি হলো গাছপালার জীবনভিত্তি। কিন্তু দিনের পর দিন রাসায়নিক সার আর কীটনাশক ব্যবহারে মাটির গুণমান নষ্ট হয়ে যায়। ঠিক এই জায়গাটিতে কেঁচো সার একটি দারুণ প্রাকৃতিক সমাধান হিসেবে কাজ করে।<br><br>

        প্রথমত, কেঁচো সার মাটিকে “জীবন্ত” করে তোলে। এর মধ্যে অনেক উপকারী জীবাণু ও এনজাইম থাকে, যা মাটির ভেতরে থাকা জীববৈচিত্র্যকে সচল রাখে। মাটিতে যত বেশি জীববৈচিত্র্য থাকবে, গাছ ততটাই শক্তিশালীভাবে বেড়ে উঠবে।<br><br>
        
        দ্বিতীয়ত, কেঁচো সার মাটির উর্বরতা বাড়ায়। এতে নাইট্রোজেন, ফসফরাস, পটাশিয়াম সহ প্রয়োজনীয় পুষ্টি উপাদান থাকে, যা গাছের খাদ্য হিসেবে কাজ করে। এই পুষ্টিগুলো ধীরে ধীরে মাটিতে ছড়িয়ে পড়ে, ফলে গাছ দীর্ঘ সময় পুষ্টি পেতে থাকে।<br><br>
        
        তৃতীয়ত, কেঁচো সার মাটির পানি ধরে রাখার ক্ষমতা অনেক বাড়িয়ে দেয়। ফলে গরমকালেও মাটি শুকিয়ে যায় না সহজে, আর গাছও পানির অভাবে শুকিয়ে যায় না।
        <br><br>
        চতুর্থত, এটা মাটির অম্লতা বা ক্ষারীয়তা নিয়ন্ত্রণে সহায়তা করে। অনেক সময় দেখা যায়, বেশি রাসায়নিক ব্যবহারে মাটির pH ভারসাম্য নষ্ট হয়— কেঁচো সার সেই ভারসাম্য ফেরাতে সাহায্য করে।
        <br><br>
        সবচেয়ে বড় কথা হলো, এটি সম্পূর্ণ প্রাকৃতিক এবং দীর্ঘমেয়াদীভাবে মাটির গুণগত মান বজায় রাখে। অর্থাৎ, শুধু এক মৌসুম নয়, বছরের পর বছর ধরে মাটিকে সুস্থ রাখে।<br>
      </p>`
    : `<h2>Why is Vermicompost Important for Soil?</h2>
      <p>
        Soil is the foundation for all plant life, but overuse of chemical fertilizers often ruins its natural quality. That’s where vermicompost comes in as a powerful natural remedy.<br><br>

        Firstly, vermicompost brings the soil back to life. It contains beneficial microbes and enzymes that maintain biodiversity in the soil. The more active the soil life, the healthier the plants grow.<br><br>
        
        Secondly, it enhances fertility. Vermicompost is full of essential nutrients like nitrogen, phosphorus, and potassium that act as natural food for plants. These nutrients are released slowly over time, which means the plants receive a steady supply instead of a sudden burst.<br><br>
        
        Thirdly, it improves the soil's water-holding capacity. So even during dry seasons, the soil retains moisture longer, helping plants survive with less frequent watering.
        <br><br>
        Fourth, vermicompost helps balance the pH of the soil. Chemical fertilizers can make soil too acidic or too alkaline, but vermicompost keeps the pH in check, which is ideal for most crops.
        <br><br>
        Most importantly, it’s sustainable. It doesn’t just give results for one season—it keeps the soil healthy year after year.<br>
      </p>`;
    document.getElementById("organic-fertilizer-application-table").innerHTML = isBangla
    ? `<h2>ফসল অনুযায়ী জৈব সার প্রয়োগের মাএা</h2>
      <table>
        <tr>
          <th>ফসলের নাম</th>
          <th>প্রয়োগ মাত্রা (জৈব সার)</th>
          <th>প্রয়োগ পদ্ধতি</th>
        </tr>
        <tr>
          <td>ধান, গম, ভূট্টা, পাট</td>
          <td>৫-৮ কেজি/শতক</td>
          <td>জমি তৈরির সময়</td>
        </tr>
        <tr>
          <td>আলু, কচু, পেঁয়াজ, মরিচ, হলুদ, শাকসবজি</td>
          <td>৮-১২ কেজি/শতক</td>
          <td>জমি তৈরির সময়</td>
        </tr>
        <tr>
          <td>ফলজ বা বনজ বৃক্ষ</td>
          <td>২-৩ কেজি/গাছ</td>
          <td>গাছের গোড়ায় পরিখা করে মিশিয়ে দিতে হবে</td>
        </tr>
        <tr>
          <td>কলা, পেঁপে</td>
          <td>৩-৪ কেজি/গাছ</td>
          <td>গাছের চারপাশে মাটির সাথে মিশিয়ে দিতে হবে</td>
        </tr>
        <tr>
          <td>লাউ, কুমড়া, চিচিঙ্গা, শসা, করলা ইত্যাদি</td>
          <td>২-৩ কেজি/মাদা</td>
          <td>মাদা তৈরির সময়</td>
        </tr>
        <tr>
          <td>পান বরজ</td>
          <td>৫-৭ কেজি/শতক</td>
          <td>মাটি দেওয়ার সময় মিশিয়ে দিতে হবে</td>
        </tr>
        <tr>
          <td>মৌসুমী ফুল</td>
          <td>১৫-২০ কেজি/শতক</td>
          <td>জমি তৈরির সময়</td>
        </tr>
      </table>`
    : `<h2>Organic Fertilizer Application Rate According to Crop</h2>
      <table>
        <tr>
          <th>Crop Name</th>
          <th>Application Rate (Organic Fertilizer)</th>
          <th>Application Method</th>
        </tr>
        <tr>
          <td>Rice, Wheat, Maize, Jute</td>
          <td>5–8 kg per decimal</td>
          <td>During land preparation</td>
        </tr>
        <tr>
          <td>Potato, Arum, Onion, Chili, Turmeric, Leafy Vegetables</td>
          <td>8–12 kg per decimal</td>
          <td>During land preparation</td>
        </tr>
        <tr>
          <td>Fruit or Forest Trees</td>
          <td>2–3 kg per plant</td>
          <td>Mix into soil by digging around the base of the tree</td>
        </tr>
        <tr>
          <td>Banana, Papaya</td>
          <td>3–4 kg per plant</td>
          <td>Mix into soil around the plant</td>
        </tr>
        <tr>
          <td>Bottle gourd, Pumpkin, Snake gourd, Cucumber, Bitter gourd, etc.</td>
          <td>2–3 kg per pit</td>
          <td>During pit preparation</td>
        </tr>
        <tr>
          <td>Betel Leaf Garden</td>
          <td>5–7 kg per decimal</td>
          <td>Mix with soil while adding earth</td>
        </tr>
        <tr>
          <td>Seasonal Flowers</td>
          <td>15–20 kg per decimal</td>
          <td>During land preparation</td>
        </tr>
      </table>
      `;
    document.getElementById("Vermicompost-nutrient-table").innerHTML = isBangla
    ? `<h2>কেঁচো সারের পুষ্টি উপাদান ও তাদের গড় পরিমাণ:</h2>
      <table>
        <tr>
          <th>পুষ্টি উপাদান</th>
          <th>সংক্ষিপ্ত রূপ</th>
          <th>গড় পরিমাণ (প্রতি ১০০ কেজি কেঁচো সার)</th>
        </tr>
        <tr>
          <th>জৈব পদার্থ</th>
          <th></th>
          <th>২৮.৩২ %</th>
        </tr>
        <tr>
          <th>নাইট্রোজেন </th>
          <th>N</th>
          <th>১.৫৭ %</th>
        </tr>
        <tr>
          <th>ফসফরাস </th>
          <th>P</th>
          <th>১.২৬ %</th>
        </tr>
        <tr>
          <th>পটাশিয়াম </th>
          <th>K</th>
          <th>২.৬০ %</th>
        </tr>
        <tr>
          <th>সালফার </th>
          <th>S</th>
          <th>০.৭৪ %</th>
        </tr>
        <tr>
          <th>ক্যালসিয়াম </th>
          <th>Ca</th>
          <th>২.০০ %</th>
        </tr>
        <tr>
          <th>বোরন </th>
          <th>Br</th>
          <th>০.০৬ %</th>
        </tr>
        <tr>
          <th>ম্যাগনেসিয়াম </th>
          <th>Mg</th>
          <th>০.৬৬ %</th>
        </tr>
        <tr>
          <th>আয়রন </th>
          <th>Fe</th>
          <th>৯৭৫ PPM</th>
        </tr>
        <tr>
          <th>জিঙ্ক </th>
          <th>Zn</th>
          <th>৪০০ PPM</th>
        </tr>
        <tr>
          <th>ম্যাংগানিজ </th>
          <th>Mn</th>
          <th>৭১২ PPM</th>
        </tr>
        <tr>
          <th>কপার </th>
          <th>Cu</th>
          <th>২০ PPM</th>
        </tr>
      </table>`
    : `<h2>Nutrients in vermicompost and their average amounts:</h2>
      <table>
        <tr>
          <th>Nutritional content</th>
          <th>Abbreviation</th>
          <th>Average amount (per 100 kg of vermicompost)</th>
        </tr>
        <tr>
          <th>Organic matter</th>
          <th></th>
          <th>28.32 %</th>
        </tr>
        <tr>
          <th>Nitrogen </th>
          <th>N</th>
          <th>1.57 %</th>
        </tr>
        <tr>
          <th>Phosphorus </th>
          <th>P</th>
          <th>1.26 %</th>
        </tr>
        <tr>
          <th>Potassium </th>
          <th>K</th>
          <th>2.60 %</th>
        </tr>
        <tr>
          <th>Sulfur </th>
          <th>S</th>
          <th>0.74 %</th>
        </tr>
        <tr>
          <th>Calcium </th>
          <th>Ca</th>
          <th>2.00 %</th>
        </tr>
        <tr>
          <th>Boron </th>
          <th>Br</th>
          <th>0.06 %</th>
        </tr>
        <tr>
          <th>Magnesium </th>
          <th>Mg</th>
          <th>0.66 %</th>
        </tr>
        <tr>
          <th>Iron </th>
          <th>Fe</th>
          <th>975 PPM</th>
        </tr>
        <tr>
          <th>Zinc </th>
          <th>Zn</th>
          <th>400 PPM</th>
        </tr>
        <tr>
          <th>Manganese </th>
          <th>Mn</th>
          <th>712 PPM</th>
        </tr>
        <tr>
          <th>Copper </th>
          <th>Cu</th>
          <th>20 PPM</th>
        </tr>
      </table>`;
    document.getElementById("Vermicompost-Application-table").innerHTML = isBangla
    ? `<h2>ফসল অনুযায়ী কেঁচো সার ব্যবহারের পরিমাণ নির্দেশনা</h2>
      <table>
        <tr>
          <th>ফসলের নাম</th>
          <th>প্রয়োগ মাত্রা</th>
          <th>প্রয়োগ পদ্ধতি</th>
        </tr>
        <tr>
          <td>ধান, গম, ভুট্টা, পাট</td>
          <td>৩-৫ কেজি/শতক</td>
          <td>জমি তৈরির সময়</td>
        </tr>
        <tr>
          <td>আলু, ফুল, পেঁয়াজ, মরিচ, হলুদ, শাকসবজি</td>
          <td>৮-১০ কেজি/শতক</td>
          <td>জমি তৈরির সময়</td>
        </tr>
        <tr>
          <td>ফলজ বা বনজ বৃক্ষ</td>
          <td>১-২ কেজি/গাছ</td>
          <td>জমি তৈরির সময়</td>
        </tr>
        <tr>
          <td>কলা, পেঁপে</td>
          <td>২-৩ কেজি/গাছ</td>
          <td>গাছের চারপাশে পরিখা করে মাটির সাথে মিশিয়ে দিতে হবে</td>
        </tr>
        <tr>
          <td>লাউ, কুমড়া, চিচিঙ্গা, শসা, রিজলা, উচ্ছে, করলা, শীম, ঝিঙে, রণডোরন</td>
          <td>২-৩ কেজি/মাদা</td>
          <td>মাদা তৈরির সময়</td>
        </tr>
        <tr>
          <td>পান বরজ</td>
          <td>৫-৬ কেজি/শতক</td>
          <td>মাটি দেওয়ার সময় মাটির সাথে মিশিয়ে দিতে হবে</td>
        </tr>
        <tr>
          <td>মৌসুমী ফুল</td>
          <td>১০-১৫ কেজি/শতক</td>
          <td>জমি তৈরির সময়</td>
        </tr>
      </table>`
    : `<h2>Recommended Vermicompost Application Rate by Crop</h2>
      <table>
        <tr>
          <th>Crop Name</th>
          <th>Application Rate</th>
          <th>Application Method</th>
        </tr>
        <tr>
          <td>Rice, Wheat, Maize, Jute</td>
          <td>3–5 kg/decimal</td>
          <td>During land preparation</td>
        </tr>
        <tr>
          <td>Potato, Flower, Onion, Chili, Turmeric, Leafy Vegetables</td>
          <td>8–10 kg/decimal</td>
          <td>During land preparation</td>
        </tr>
        <tr>
          <td>Fruit or Forest Trees</td>
          <td>1–2 kg/tree</td>
          <td>During land preparation</td>
        </tr>
        <tr>
          <td>Banana, Papaya</td>
          <td>2–3 kg/tree</td>
          <td>Mix into soil around the tree by digging a trench</td>
        </tr>
        <tr>
          <td>Bottle Gourd, Pumpkin, Snake Gourd, Cucumber, Ridge Gourd, Bitter Gourd, Flat Beans, Sponge Gourd, RonDoron</td>
          <td>2–3 kg/pit</td>
          <td>During pit preparation</td>
        </tr>
        <tr>
          <td>Betel Leaf Garden</td>
          <td>5–6 kg/decimal</td>
          <td>Mix with soil while adding it</td>
        </tr>
        <tr>
          <td>Seasonal Flowers</td>
          <td>10–15 kg/decimal</td>
          <td>During land preparation</td>
        </tr>
      </table>
      `;

  // Update footer bottom
  document.querySelector('.footer-bottom p').innerHTML = isBangla
    ? "&copy; 2024 Rongdhonu Varmi Compost. All rights reserved."
    : "&copy; 2024 Rongdhonu Varmi Compost. All rights reserved.";
}