import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: Promise<{ blog_id: string }> }) => {
  const { blog_id } = await params;
  const blogDetails = {
    id: "c4d8e7",
    title: "How to Build the Ultimate Gaming Setup",
    subtitle: "Essential gear and accessories for next-level gaming",
    author: "Jake Henderson",
    date: "Sep 22, 2025",
    category: { title: "Tech & Hardware", link: "/category/tech-hardware" },
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1616448626739-6e5e7e217b09",
    content: `
  <h2>Introduction</h2>
  <p>Every gamer dreams of having the perfect setup — that immersive corner where performance meets comfort, and every detail adds to the thrill of gaming. Whether you're building from scratch or upgrading your current space, this guide will walk you through everything you need to know to create the ultimate gaming setup in 2025.</p>

  <div class="admonition note">
    <p><strong>Note:</strong> You don’t need to spend thousands of dollars right away. Start small, plan wisely, and expand your setup over time.</p>
  </div>

  <h2>1. Choose the Right Gaming Desk</h2>
  <p>Your desk is the foundation of your setup. Look for one that’s wide enough for your monitor(s), peripherals, and still leaves room for movement. Cable management features are a big plus.</p>

  <ul>
    <li><strong>Size:</strong> Aim for at least 55 inches in width for a dual-monitor setup.</li>
    <li><strong>Shape:</strong> L-shaped desks maximize corner spaces.</li>
    <li><strong>Material:</strong> MDF or solid wood surfaces offer better durability and aesthetics.</li>
  </ul>

  <div class="admonition tip">
    <p><strong>Pro Tip:</strong> Use adhesive cable clips or a cable tray under your desk to keep things clean and tangle-free.</p>
  </div>

  <h2>2. Pick the Perfect Chair</h2>
  <p>Comfort matters more than you think. A quality ergonomic chair prevents back pain during long gaming sessions and improves focus.</p>
  <ul>
    <li>Adjustable lumbar support</li>
    <li>Headrest and armrest customization</li>
    <li>Breathable mesh or high-density foam materials</li>
  </ul>

  <h2>3. Monitor Setup and Display Quality</h2>
  <p>The display is your window into every world you explore. High refresh rates and resolutions make a massive difference.</p>
  <ol>
    <li><strong>Resolution:</strong> 1440p is the sweet spot for most gamers; 4K for enthusiasts.</li>
    <li><strong>Refresh Rate:</strong> 144Hz or higher for smooth visuals.</li>
    <li><strong>Panel Type:</strong> IPS for color accuracy, VA for contrast, TN for response speed.</li>
  </ol>

  <div class="admonition warning">
    <p><strong>Warning:</strong> Don’t mix monitors with different refresh rates—it can cause screen tearing and inconsistent gameplay feel.</p>
  </div>

  <h2>4. Keyboard, Mouse, and Accessories</h2>
  <p>Your peripherals are where you connect physically with the game. Mechanical keyboards, responsive mice, and good sound can elevate your experience.</p>

  <h3>Keyboard</h3>
  <p>Mechanical keyboards with hot-swappable switches are now mainstream. Choose a switch that fits your preference—tactile (Brown), linear (Red), or clicky (Blue).</p>

  <h3>Mouse</h3>
  <p>A lightweight gaming mouse with a high DPI sensor ensures precision and comfort. Popular choices include Logitech G Pro X Superlight and Razer Viper V2 Pro.</p>

  <h3>Headset & Audio</h3>
  <p>Audio immersion makes or breaks the gaming experience. Go for 7.1 surround sound headsets or invest in studio monitors if you prefer speakers.</p>

  <div class="admonition info">
    <p><strong>Did You Know?</strong> Some gamers use separate microphones (like the Blue Yeti or Elgato Wave) for cleaner voice chat and streaming quality.</p>
  </div>

  <h2>5. Lighting and Aesthetic</h2>
  <p>RGB lighting is more than a trend—it’s a vibe. Use it subtly to highlight your setup, not overwhelm it.</p>

  <ul>
    <li>LED strips behind the desk or monitor</li>
    <li>Smart bulbs to match in-game moods</li>
    <li>Accent lights for figures or wall décor</li>
  </ul>

  <div class="admonition success">
    <p><strong>Pro Setup Tip:</strong> Sync your lights with your games using apps like SignalRGB or Corsair iCUE for next-level immersion.</p>
  </div>

  <h2>6. Optimize Your PC Build</h2>
  <p>If you’re building a gaming PC, balance performance and future-proofing. Here’s a basic modern spec layout for 2025:</p>

  <ul>
    <li><strong>CPU:</strong> AMD Ryzen 7 7800X3D / Intel Core i7-14700K</li>
    <li><strong>GPU:</strong> NVIDIA RTX 4080 / AMD RX 7900 XTX</li>
    <li><strong>RAM:</strong> 32GB DDR5 (6000 MHz)</li>
    <li><strong>Storage:</strong> 1TB NVMe SSD + 2TB HDD for backups</li>
    <li><strong>Cooling:</strong> 360mm AIO or custom loop for enthusiasts</li>
  </ul>

  <div class="admonition note">
    <p><strong>Note:</strong> Investing in a good PSU (Power Supply Unit) is often overlooked. Get at least an 80+ Gold certified one for stability and safety.</p>
  </div>

  <h2>7. Internet and Streaming Setup</h2>
  <p>If you plan to stream or play competitive online games, internet reliability is non-negotiable.</p>
  <ul>
    <li><strong>Connection:</strong> Wired Ethernet > Wi-Fi</li>
    <li><strong>Speed:</strong> Minimum 100 Mbps download, 20 Mbps upload for streaming</li>
    <li><strong>Router:</strong> Dual-band or mesh Wi-Fi for broader coverage</li>
  </ul>

  <h2>8. Personal Touches</h2>
  <p>This is your space — make it reflect you. Add posters, collectibles, a mini plant, or even acoustic foam for aesthetics and sound quality. Don’t forget a cozy ambient light for those long late-night sessions.</p>

  <h2>Conclusion</h2>
  <p>Building your ultimate gaming setup isn’t about how much you spend — it’s about how well it fits your style, needs, and personality. Start with the essentials, keep improving over time, and before you know it, your desk will be your command center for every digital adventure.</p>

  <div class="admonition quote">
    <p><em>“The ultimate setup isn’t built overnight — it’s crafted over time.”</em></p>
  </div>
  `,
  };

  return (
    <div className="min-h-screen flex justify-center max-w-[1150px] mx-auto px-5 py-10">
      <div className="flex-1">
        <div className="flex max-sm:flex-col max-sm:gap-2 justify-between">
          <div className="flex gap-2">
            <Link
              href={`blog${blogDetails.category.link}`}
              className="text-purple-400"
            >
              {blogDetails.category.title}
            </Link>
            <div className=" text-gray-400">{blogDetails.date}</div>
          </div>
          <div className="text-gray-500">{blogDetails.readingTime}</div>
        </div>
        <div className="text-4xl mt-2">{blogDetails.title}</div>
        <div className="md:text-2xl text-lg mt-2 text-gray-400">
          {blogDetails.subtitle}
        </div>
        <div className="mt-5"></div>
        <div className="flex max-lg:flex-col lg:gap-10 gap-0">
          <article className="flex-1">
            <div
              className="mt-5 blog-content"
              dangerouslySetInnerHTML={{ __html: blogDetails.content }}
            ></div>
          </article>

          <div className="border  max-lg:-order-1  dark:border-border border-gray-300 h-fit rounded-md p-5 lg:sticky top-24">
            <div className="text-purple-300 font-medium">POSTED BY</div>
            <div className="flex items-center gap-2">
              <User />
              <div className="flex flex-col mt-2">
                <div className="text-lg">{blogDetails.author}</div>
                <div className="text-gray-400">Sr. Software engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
