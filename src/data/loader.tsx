import AboutProfiles from "@/data/pages/about-profiles.json";
import EnglishTests from "@/data/pages/english-test-tests.json";
import EventEvents from "@/data/pages/event-events.json";
import InsightNews from "@/data/pages/insight-news.json";
import ServiceServices from "@/data/pages/service/service-services.json";
import ServiceSteps from "@/data/pages/service/service-steps.json";
import ServiceFaqs from "@/data/pages/service/service-faqs.json";
import Universities from "@/data/pages/study-destination/study-destinations-universities.json";
import Countries from "@/data/pages/study-destination/study-destination-countries.json";
import AchievementSwiper from "@/data/feature/swiper-about-achievement.json";
import CareerSwiper from "@/data/feature/swiper-about-career.json";
import GallerySwiper from "@/data/feature/swiper-about-galleries.json";
import TestimonySwiper from "@/data/feature/swiper-ui-component-testimony.json";

export default function dataLoader() {
  const dataSets = [
    { key: "AboutProfiles", data: AboutProfiles },
    { key: "EnglishTests", data: EnglishTests },
    { key: "EventEvents", data: EventEvents },
    { key: "InsightNews", data: InsightNews },
    { key: "ServiceServices", data: ServiceServices },
    { key: "ServiceSteps", data: ServiceSteps },
    { key: "ServiceFaqs", data: ServiceFaqs },
    { key: "Universities", data: Universities },
    { key: "Countries", data: Countries },
    { key: "AchievementSwiper", data: AchievementSwiper },
    { key: "CareerSwiper", data: CareerSwiper },
    { key: "GallerySwiper", data: GallerySwiper },
    { key: "TestimonySwiper", data: TestimonySwiper },
  ];

  // Loop through each data set
  dataSets.forEach(({ key, data }) => {
    // Check if the data already exists in localStorage
    const existingData = localStorage.getItem(key);

    // If data doesn't exist, set it
    if (!existingData) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  });
}
