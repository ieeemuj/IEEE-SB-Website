import BentoGrid from "./bento";
import achievementsData from "../Data/achievementsData";

function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-ieee-blue dark:text-white">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">
            Celebrating our milestones and accomplishments over the years.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="w-full overflow-hidden">
          <BentoGrid items={achievementsData} />
        </div>
      </div>
    </section>
  );
}

export default Achievements;
