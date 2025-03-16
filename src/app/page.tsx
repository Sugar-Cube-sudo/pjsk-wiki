import { Header } from "@/components/wiki/Header";
import { Sidebar } from "@/components/wiki/Sidebar";
import { Banner } from "@/components/wiki/Banner";
import { EventsList } from "@/components/wiki/EventsList";
import { GameInfo } from "@/components/wiki/GameInfo";
import { InfoLinks } from "@/components/wiki/InfoLinks";
import { Footer } from "@/components/wiki/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container py-6">
          <Banner />

          <div className="flex flex-col md:flex-row gap-6">
            <Sidebar />

            <div className="flex-1 space-y-6">
              <EventsList />
              <GameInfo />
              <InfoLinks />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
