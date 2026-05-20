"use client";

import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintableGuide() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Download Bar - Hidden when printing */}
      <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 print:hidden">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="font-serif font-semibold text-foreground">
              21-Day Anti-Inflammation Program
            </h1>
            <p className="text-sm text-muted-foreground">
              Your printable guide is ready
            </p>
          </div>
          <Button onClick={handlePrint} size="lg" className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20 print:hidden" />

      {/* Printable Content */}
      <div className="print:m-0 print:p-0">
        {/* Page 1: Cover */}
        <section className="page-break min-h-screen flex items-center justify-center bg-secondary/30 print:bg-white print:min-h-0 print:h-[100vh]">
          <div className="text-center px-8 py-16">
            <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6">
              THE 21-DAY
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-semibold text-primary mb-2">
              Anti-Inflammation
            </h1>
            <h1 className="text-5xl md:text-6xl font-serif font-semibold text-primary mb-8">
              Program
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-foreground mb-4 max-w-md mx-auto text-pretty">
              Stop Feeling Old. Reduce Inflammation.
              <br />
              Feel Lighter in 14 Days. Lock It In By Day 21.
            </p>
            <div className="mt-12">
              <p className="text-muted-foreground">A Beginner-Friendly Guide</p>
            </div>
            <p className="text-muted-foreground mt-16 text-sm">
              By Daryl Stubbs, RMT, CAT(C), C.H.N.C.
            </p>
          </div>
        </section>

        {/* Page 2: Daily Game Plan (KEY HIGHLIGHT PAGE) */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                KEY PAGE
              </span>
            </div>
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Your Daily Game Plan
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              This is your go-to page. Print it. Put it on your fridge.
            </p>

            {/* 4 Daily Essentials */}
            <div className="bg-secondary/50 border-l-4 border-primary p-5 rounded-r-lg mb-6 print:bg-gray-50">
              <h3 className="font-semibold text-foreground mb-3">
                Do These 4 Things Every Day
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>Take your 4 supplements (see next page for details)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Eat 3 meals. No snacks. 12-hour overnight fast.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>Walk 10 minutes after lunch and after dinner.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>Sleep 7+ hours. Stop eating 2-3 hours before bed.</span>
                </li>
              </ul>
            </div>

            {/* Meal Structure */}
            <h3 className="font-semibold text-primary mb-3">Meal Structure</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <MealCard
                title="Breakfast"
                subtitle="Protein + Fat"
                description="No starches. No sugar. Keeps insulin flat."
                examples="Eggs, salmon, chia yogurt bowl"
              />
              <MealCard
                title="Lunch"
                subtitle="Protein + Resistant Starch + Cooked Veg"
                description="Use cooled-then-reheated rice or potato."
                examples="Feeds gut bacteria like fibre"
              />
              <MealCard
                title="Dinner"
                subtitle="Protein + Carbs + Cooked Veg"
                description="Carbs at night raise melatonin, deepen sleep."
                examples="Stops 3 AM cortisol spikes"
              />
            </div>

            {/* Fibre Ramp Schedule */}
            <h3 className="font-semibold text-primary mb-3">
              Fibre Ramp Schedule
            </h3>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50 print:bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-primary w-24">
                      Days
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Add This
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <FibreRow days="1-3" item="Cooled rice/potato at lunch + cooked carrots & zucchini" />
                  <FibreRow days="4-6" item="1 tsp ground flax or chia at breakfast" />
                  <FibreRow days="7-9" item="1 green kiwi/day + cooked spinach" />
                  <FibreRow days="10-12" item="10 blueberries or strawberries" />
                  <FibreRow days="13-15" item="½ tsp psyllium husk in water at bedtime" />
                  <FibreRow days="16-21" item="Increase psyllium to 1 tsp; add one new cooked veg" />
                </tbody>
              </table>
            </div>

            {/* What You Will Feel */}
            <div className="bg-accent/10 border-l-4 border-accent p-5 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">
                What You Will Feel By Day 21
              </h3>
              <p className="text-sm text-muted-foreground">
                Less bloating • clearer head • steadier mood • deeper sleep •
                easier mornings • looser clothes • brighter skin • fewer sugar
                cravings • less joint stiffness
              </p>
            </div>

            <PageFooter page={2} />
          </div>
        </section>

        {/* Page 3: Supplements */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              The 4 Supplements
            </h2>
            <p className="text-muted-foreground mb-6">
              These supplements work together to heal your gut, reduce
              inflammation, and restore energy.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <SupplementCard
                number={1}
                name="BodyBio Sodium Butyrate"
                dose="1 cap with breakfast + 1 cap with dinner"
                why="Fuels colon cells. Repairs gut lining. Reduces leaky gut and inflammation."
                feelBy="Day 7-10 — Less bloating, calmer gut, clearer head"
              />
              <SupplementCard
                number={2}
                name="Seeking Health Zinc Carnosine"
                dose="1 cap with breakfast + 1 cap at bedtime"
                why="Sticks to inflamed gut tissue and slow-releases zinc. Reverses leaky gut in 14 days."
                feelBy="Day 5-7 — Reflux drops, food reactivity softens"
              />
              <SupplementCard
                number={3}
                name="NOW Foods Super Enzymes"
                dose="1 tablet with first bite of every meal"
                why="Covers acid, protein, fat, and starch digestion. Stops fermentation and bloating."
                feelBy="Day 2-4 — Less heaviness after meals, more energy"
              />
              <SupplementCard
                number={4}
                name="Pure Encapsulations NAC + Glycine"
                dose="1 scoop in water, between meals (mid-morning)"
                why="Restores glutathione (master antioxidant). Drops inflammation, improves energy."
                feelBy="Day 10-14 — Steady energy, better mood, clearer skin"
              />
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6 print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">
                Important Notes
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>
                  • Take NAC + Glycine on an empty stomach — food protein
                  competes for absorption
                </li>
                <li>
                  • Skip Super Enzymes if: active ulcer, on blood thinners,
                  pineapple/papaya allergy
                </li>
                <li>
                  • Sodium Butyrate has 156mg sodium per capsule — reduce if on
                  salt restriction
                </li>
              </ul>
            </div>

            {/* Daily Schedule */}
            <h3 className="font-semibold text-primary mb-3">
              Daily Supplement Schedule
            </h3>
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50 print:bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-primary w-32">
                      Time
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Take This
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <ScheduleRow time="Breakfast" items="1 Butyrate + 1 Zinc Carnosine + 1 Super Enzyme" />
                  <ScheduleRow time="Mid-Morning" items="1 scoop NAC + Glycine in water" />
                  <ScheduleRow time="Lunch" items="1 Super Enzyme" />
                  <ScheduleRow time="Dinner" items="1 Butyrate + 1 Super Enzyme" />
                  <ScheduleRow time="Bedtime" items="1 Zinc Carnosine" />
                </tbody>
              </table>
            </div>

            <PageFooter page={3} />
          </div>
        </section>

        {/* Page 4: Week 1 */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Week 1: Days 1-7
            </h2>
            <p className="text-muted-foreground mb-4">
              Focus: Reset your eating patterns, start supplements, and let your
              gut begin to calm.
            </p>

            <div className="bg-secondary/50 border-l-4 border-primary p-4 rounded-r-lg mb-6 print:bg-gray-50">
              <h3 className="font-semibold text-foreground mb-2">
                Week 1 Focus: The Reset Begins
              </h3>
              <p className="text-sm text-muted-foreground">
                Days 1-3: Possible mild fatigue, sugar cravings flaring then
                easing
                <br />
                Days 4-7: Stool normalizing, reflux quieting, morning stiffness
                easing
              </p>
            </div>

            {/* Checklist */}
            <h3 className="font-semibold text-primary mb-3">
              Daily Checklist — Week 1
            </h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              <ChecklistItem>Take all 4 supplements per schedule</ChecklistItem>
              <ChecklistItem>Walk 10 min after lunch</ChecklistItem>
              <ChecklistItem>Eat protein + fat breakfast (no starch)</ChecklistItem>
              <ChecklistItem>Walk 10 min after dinner</ChecklistItem>
              <ChecklistItem>Lunch: protein + cooled rice/potato + veg</ChecklistItem>
              <ChecklistItem>Stop eating 3 hours before bed</ChecklistItem>
              <ChecklistItem>Dinner: protein + carbs + cooked veg</ChecklistItem>
              <ChecklistItem>Drink 2.5-3L water</ChecklistItem>
            </div>

            {/* Fibre Additions */}
            <h3 className="font-semibold text-primary mb-3">
              Fibre Additions This Week
            </h3>
            <div className="grid md:grid-cols-3 gap-3 mb-6">
              <DayCard
                days="Days 1-3"
                content="Start with cooled-then-reheated rice or potato at lunch + cooked carrots and zucchini"
              />
              <DayCard
                days="Days 4-6"
                content="Add 1 tsp ground flax or chia seeds to your breakfast"
              />
              <DayCard
                days="Day 7"
                content="Add 1 green kiwi per day + introduce cooked spinach to meals"
              />
            </div>

            {/* Sample Day */}
            <h3 className="font-semibold text-primary mb-3">
              Sample Day — Week 1
            </h3>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <tbody>
                  <SampleDayRow
                    time="7:00 AM"
                    activity="2 eggs + ½ avocado + sautéed spinach. Take: Butyrate, Zinc Carnosine, Enzyme"
                  />
                  <SampleDayRow time="10:00 AM" activity="NAC + Glycine in water" />
                  <SampleDayRow
                    time="12:30 PM"
                    activity="Chicken thigh + cooled rice + roasted carrots. Take: Enzyme. Walk after."
                  />
                  <SampleDayRow
                    time="6:30 PM"
                    activity="Salmon + sweet potato + zucchini. Take: Butyrate, Enzyme. Walk after."
                  />
                  <SampleDayRow
                    time="9:30 PM"
                    activity="Take Zinc Carnosine. Stop eating by now."
                  />
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-1">
                If You Feel Tired Days 2-3
              </h3>
              <p className="text-sm text-muted-foreground">
                This is normal — your body is shifting from morning carbs to
                stable fat-burning. Add ¼ tsp sea salt to 500ml water
                mid-morning. It resolves by Day 4-5.
              </p>
            </div>

            <PageFooter page={4} />
          </div>
        </section>

        {/* Page 5: Week 2 */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Week 2: Days 8-14
            </h2>
            <p className="text-muted-foreground mb-4">
              Focus: Build momentum. Your gut is calming, brain fog is lifting,
              and energy is rising.
            </p>

            <div className="bg-secondary/50 border-l-4 border-primary p-4 rounded-r-lg mb-6 print:bg-gray-50">
              <h3 className="font-semibold text-foreground mb-2">
                Week 2 Focus: Things Shift
              </h3>
              <p className="text-sm text-muted-foreground">
                Brain fog visibly lifts • Skin brighter, less puffy • Clothes
                loosen at waist • Mood steadier • Sugar cravings noticeably
                weaker
              </p>
            </div>

            {/* Checklist */}
            <h3 className="font-semibold text-primary mb-3">
              Daily Checklist — Week 2
            </h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              <ChecklistItem>Continue all supplements</ChecklistItem>
              <ChecklistItem>Both post-meal walks (non-negotiable)</ChecklistItem>
              <ChecklistItem>Keep meal structure consistent</ChecklistItem>
              <ChecklistItem>7+ hours sleep</ChecklistItem>
              <ChecklistItem>Add fibre per schedule below</ChecklistItem>
              <ChecklistItem>2.5-3L water daily</ChecklistItem>
              <ChecklistItem>Maintain 12-hour overnight fast</ChecklistItem>
              <ChecklistItem>Note energy & mood improvements</ChecklistItem>
            </div>

            {/* Fibre Additions */}
            <h3 className="font-semibold text-primary mb-3">
              Fibre Additions This Week
            </h3>
            <div className="grid md:grid-cols-3 gap-3 mb-6">
              <DayCard
                days="Days 8-9"
                content="Continue: 1 green kiwi/day + cooked spinach. Maintain flax/chia at breakfast."
              />
              <DayCard
                days="Days 10-12"
                content="Add 10 blueberries or strawberries per day (at breakfast or as dessert)."
              />
              <DayCard
                days="Days 13-14"
                content="Start ½ tsp psyllium husk in 8-10 oz water at bedtime. Follow with another glass of water."
              />
            </div>

            {/* Sample Day */}
            <h3 className="font-semibold text-primary mb-3">
              Sample Day — Week 2
            </h3>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <tbody>
                  <SampleDayRow
                    time="7:00 AM"
                    activity="Chia yogurt bowl + 1 tsp flax + 10 blueberries. Supplements as usual."
                  />
                  <SampleDayRow
                    time="10:00 AM"
                    activity="NAC + Glycine in water + 1 green kiwi"
                  />
                  <SampleDayRow
                    time="12:30 PM"
                    activity="Tinned salmon + cooled potato + cucumber + olives + olive oil. Walk after."
                  />
                  <SampleDayRow
                    time="6:30 PM"
                    activity="Steak + roasted potato wedges + cooked spinach. Walk after."
                  />
                  <SampleDayRow
                    time="9:00 PM"
                    activity="Zinc Carnosine + ½ tsp psyllium in water (from Day 13)."
                  />
                </tbody>
              </table>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-1">
                Psyllium Tips
              </h3>
              <p className="text-sm text-muted-foreground">
                Stir into 8-10 oz water and drink immediately (it gels fast).
                Follow with another full glass. With constipation: more water.
                With loose stools: less water (4-6 oz).
              </p>
            </div>

            <PageFooter page={5} />
          </div>
        </section>

        {/* Page 6: Week 3 */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Week 3: Days 15-21
            </h2>
            <p className="text-muted-foreground mb-4">
              Focus: Lock it in. Your new patterns are becoming habits. Maximize
              results.
            </p>

            <div className="bg-secondary/50 border-l-4 border-primary p-4 rounded-r-lg mb-6 print:bg-gray-50">
              <h3 className="font-semibold text-foreground mb-2">
                Week 3 Focus: It Locks In
              </h3>
              <p className="text-sm text-muted-foreground">
                Waking refreshed, often before alarm • Food reactivity dropping
                fast • Steady energy 9 AM → 9 PM • Joint aches reduced • People
                around you start commenting on how you look • Sugar no longer
                runs your day
              </p>
            </div>

            {/* Checklist */}
            <h3 className="font-semibold text-primary mb-3">
              Daily Checklist — Week 3
            </h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              <ChecklistItem>Continue all supplements</ChecklistItem>
              <ChecklistItem>Keep both post-meal walks</ChecklistItem>
              <ChecklistItem>Increase psyllium to 1 tsp (Day 16)</ChecklistItem>
              <ChecklistItem>Notice: how do you feel vs Day 1?</ChecklistItem>
              <ChecklistItem>Add one new cooked vegetable</ChecklistItem>
              <ChecklistItem>Plan your post-Day 21 strategy</ChecklistItem>
              <ChecklistItem>Maintain all meal structures</ChecklistItem>
              <ChecklistItem>Celebrate your progress!</ChecklistItem>
            </div>

            {/* Fibre Additions */}
            <h3 className="font-semibold text-primary mb-3">
              Fibre Additions This Week
            </h3>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              <DayCard
                days="Days 15-16"
                content="Continue ½ tsp psyllium. If no bloating, increase to 1 tsp on Day 16."
              />
              <DayCard
                days="Days 17-21"
                content="Add one new cooked vegetable you haven't tried yet: asparagus, bok choy, butternut squash, or green beans."
              />
            </div>

            <div className="h-px bg-border my-6" />

            {/* After Day 21 */}
            <h3 className="font-semibold text-primary mb-3">
              After Day 21: What Next?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">
                  If You Feel Great
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Reintroduce one food group every 4 days</li>
                  <li>• Start with oats, then fruit, then sourdough</li>
                  <li>• Keep 12-hour overnight fast forever</li>
                  <li>• Keep post-meal walks (non-negotiable)</li>
                  <li>• Continue supplements 6-8 more weeks</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">
                  If You&apos;re Stalled
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Consider GI-MAP stool test</li>
                  <li>• Consider SIBO breath test</li>
                  <li>• Track which foods still trigger symptoms</li>
                  <li>• Consult with a practitioner</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-1">Remember</h3>
              <p className="text-sm text-muted-foreground">
                The habits you&apos;ve built are more important than the supplements.
                The 12-hour fast, post-meal walks, protein-forward breakfasts,
                and reduced processed foods will serve you for life. The
                supplements are training wheels — eventually your gut will do
                the work on its own.
              </p>
            </div>

            <PageFooter page={6} />
          </div>
        </section>

        {/* Page 7: Build Your Own Meal */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Build Your Own Meal
            </h2>
            <p className="text-muted-foreground mb-6">
              You don&apos;t need rigid meal plans. Pick one item from each column to
              build a balanced anti-inflammatory meal.
            </p>

            {/* Breakfast */}
            <h3 className="font-semibold text-primary mb-3">
              Breakfast Formula: Protein + Fat
            </h3>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50 print:bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Pick a Protein
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Pick a Fat
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Optional Add-On
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MealRow items={["2-3 eggs", "½ avocado", "Sautéed spinach"]} />
                  <MealRow items={["Wild salmon (3-4 oz)", "1 tbsp olive oil", "Cucumber slices"]} />
                  <MealRow items={["Greek yogurt (½ cup)", "2 tbsp chia seeds", "10 berries"]} />
                  <MealRow items={["Turkey slices (3-4 oz)", "Handful of walnuts", "1 tsp flax seeds"]} />
                </tbody>
              </table>
            </div>

            {/* Lunch */}
            <h3 className="font-semibold text-primary mb-3">
              Lunch Formula: Protein + Resistant Starch + Cooked Veg
            </h3>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50 print:bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Pick a Protein
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Pick a Starch
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Pick a Vegetable
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MealRow items={["Chicken thigh", "Cooled rice (1 cup)", "Roasted carrots"]} />
                  <MealRow items={["Tinned salmon", "Cooled potato", "Cooked zucchini"]} />
                  <MealRow items={["Grass-fed beef", "Cooled sweet potato", "Green beans"]} />
                  <MealRow items={["Sardines", "Green plantain", "Cooked spinach"]} />
                </tbody>
              </table>
            </div>

            {/* Dinner */}
            <h3 className="font-semibold text-primary mb-3">
              Dinner Formula: Protein + Carbs + Cooked Veg
            </h3>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50 print:bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Pick a Protein
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Pick a Carb
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-primary">
                      Pick a Vegetable
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MealRow items={["Wild salmon (5-6 oz)", "Baked sweet potato", "Cooked kale"]} />
                  <MealRow items={["Chicken thighs (2)", "Jasmine rice (¾ cup)", "Roasted red pepper"]} />
                  <MealRow items={["Steak (4-6 oz)", "Roasted potato wedges", "Cooked spinach"]} />
                  <MealRow items={["Turkey breast", "Butternut squash", "Asparagus"]} />
                </tbody>
              </table>
            </div>

            {/* Flavor Boosters */}
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-4 print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">
                Flavor Boosters (Use Freely)
              </h3>
              <p className="text-sm text-muted-foreground">
                Extra-virgin olive oil • Sea salt • Black pepper • Fresh
                lemon/lime • Fresh ginger • Turmeric (with pepper + fat) • Fresh
                herbs (basil, cilantro, parsley) • Garlic-infused oil (early
                weeks)
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">
                Key Reminders
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>
                  • Always drizzle olive oil on your meals (2-4 tbsp/day total)
                </li>
                <li>
                  • Cook-then-cool your rice/potato the day before for resistant
                  starch
                </li>
                <li>
                  • No raw vegetables in Week 1-2 (they&apos;re harder to digest)
                </li>
              </ul>
            </div>

            <PageFooter page={7} />
          </div>
        </section>

        {/* Page 8: Shopping Lists */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Shopping Lists
            </h2>
            <p className="text-muted-foreground mb-6">
              Stock your kitchen with these anti-inflammatory essentials. Check
              off as you shop.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <ShoppingCategory title="Proteins">
                  <ShoppingItem>Wild salmon (fresh or tinned)</ShoppingItem>
                  <ShoppingItem>Sardines (tinned)</ShoppingItem>
                  <ShoppingItem>Pasture-raised eggs (2 dozen)</ShoppingItem>
                  <ShoppingItem>Chicken thighs (organic)</ShoppingItem>
                  <ShoppingItem>Grass-fed beef or steak</ShoppingItem>
                  <ShoppingItem>Turkey breast</ShoppingItem>
                  <ShoppingItem>Bone broth (32 oz)</ShoppingItem>
                </ShoppingCategory>

                <ShoppingCategory title="Fats & Oils">
                  <ShoppingItem>Extra-virgin olive oil (large bottle)</ShoppingItem>
                  <ShoppingItem>Avocados (4-6)</ShoppingItem>
                  <ShoppingItem>Avocado oil</ShoppingItem>
                  <ShoppingItem>Ghee or pasture butter</ShoppingItem>
                  <ShoppingItem>Raw walnuts</ShoppingItem>
                  <ShoppingItem>Raw almonds</ShoppingItem>
                  <ShoppingItem>Tahini</ShoppingItem>
                </ShoppingCategory>

                <ShoppingCategory title="Dairy (Lactose-Free)">
                  <ShoppingItem>Greek yogurt (plain, lactose-free)</ShoppingItem>
                  <ShoppingItem>Kefir (plain, if tolerated)</ShoppingItem>
                  <ShoppingItem>Almond milk (unsweetened)</ShoppingItem>
                </ShoppingCategory>
              </div>

              <div>
                <ShoppingCategory title="Vegetables">
                  <ShoppingItem>Carrots</ShoppingItem>
                  <ShoppingItem>Zucchini</ShoppingItem>
                  <ShoppingItem>Spinach (for cooking)</ShoppingItem>
                  <ShoppingItem>Kale (for cooking)</ShoppingItem>
                  <ShoppingItem>Cucumber</ShoppingItem>
                  <ShoppingItem>Red bell pepper</ShoppingItem>
                  <ShoppingItem>Green beans</ShoppingItem>
                  <ShoppingItem>Asparagus</ShoppingItem>
                  <ShoppingItem>Butternut squash</ShoppingItem>
                  <ShoppingItem>Olives</ShoppingItem>
                </ShoppingCategory>

                <ShoppingCategory title="Starches">
                  <ShoppingItem>Jasmine or basmati rice</ShoppingItem>
                  <ShoppingItem>White potatoes</ShoppingItem>
                  <ShoppingItem>Sweet potatoes</ShoppingItem>
                  <ShoppingItem>Green plantains</ShoppingItem>
                </ShoppingCategory>

                <ShoppingCategory title="Fruits">
                  <ShoppingItem>Green kiwis (7-14)</ShoppingItem>
                  <ShoppingItem>Blueberries</ShoppingItem>
                  <ShoppingItem>Strawberries</ShoppingItem>
                  <ShoppingItem>Raspberries</ShoppingItem>
                  <ShoppingItem>Lemons/Limes</ShoppingItem>
                </ShoppingCategory>
              </div>
            </div>

            <div className="h-px bg-border my-6" />

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <ShoppingCategory title="Seeds & Fibre">
                <ShoppingItem>Chia seeds</ShoppingItem>
                <ShoppingItem>Ground flax seeds</ShoppingItem>
                <ShoppingItem>Psyllium husk (whole)</ShoppingItem>
                <ShoppingItem>Hemp seeds</ShoppingItem>
                <ShoppingItem>Pumpkin seeds</ShoppingItem>
              </ShoppingCategory>

              <ShoppingCategory title="Pantry">
                <ShoppingItem>Garlic-infused olive oil</ShoppingItem>
                <ShoppingItem>Fresh ginger</ShoppingItem>
                <ShoppingItem>Turmeric powder</ShoppingItem>
                <ShoppingItem>Black pepper</ShoppingItem>
                <ShoppingItem>Sea salt</ShoppingItem>
                <ShoppingItem>Cinnamon</ShoppingItem>
                <ShoppingItem>Herbal teas</ShoppingItem>
              </ShoppingCategory>
            </div>

            {/* Supplements */}
            <div className="bg-secondary/50 border-l-4 border-primary p-4 rounded-r-lg print:bg-gray-50">
              <h3 className="font-semibold text-foreground mb-3">
                The 4 Supplements (Order These)
              </h3>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                <ShoppingItem>BodyBio Sodium Butyrate (600mg)</ShoppingItem>
                <ShoppingItem>NOW Foods Super Enzymes</ShoppingItem>
                <ShoppingItem>Seeking Health Zinc Carnosine</ShoppingItem>
                <ShoppingItem>Pure Encapsulations NAC + Glycine</ShoppingItem>
              </div>
            </div>

            <PageFooter page={8} />
          </div>
        </section>

        {/* Page 9: Troubleshooting */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Quick Troubleshooting
            </h2>
            <p className="text-muted-foreground mb-6">
              Common issues and their fixes. Reference this page when something
              feels off.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Column 1 */}
              <div>
                <h3 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wide">
                  Gut Issues
                </h3>
                <TroubleshootItem
                  problem="Bloating"
                  fix="Increase chewing, take enzyme with first bite, reduce portions slightly"
                />
                <TroubleshootItem
                  problem="Constipation"
                  fix="More water (3L minimum), add 1 tsp olive oil at bedtime, increase psyllium"
                />
                <TroubleshootItem
                  problem="Loose stools"
                  fix="Reduce psyllium, cook vegetables softer, add more resistant starch"
                />
                <TroubleshootItem
                  problem="Gas"
                  fix="Normal in Week 1-2 as gut adjusts. Reduce fibre additions, slow the ramp"
                />
                <TroubleshootItem
                  problem="Reflux"
                  fix="Stop eating 3+ hours before bed, elevate head, ensure Zinc Carnosine is consistent"
                />

                <h3 className="font-semibold text-primary mb-3 mt-6 text-sm uppercase tracking-wide">
                  Supplement Issues
                </h3>
                <TroubleshootItem
                  problem="Butyrate taste/smell"
                  fix="Take with food, swallow quickly with plenty of water"
                />
                <TroubleshootItem
                  problem="NAC stomach upset"
                  fix="Ensure it&apos;s truly between meals (2+ hours from food)"
                />
                <TroubleshootItem
                  problem="Enzyme heartburn"
                  fix="Try taking at end of meal instead of beginning"
                />
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wide">
                  Energy & Mood
                </h3>
                <TroubleshootItem
                  problem="Tired Days 2-3"
                  fix="Add ¼ tsp sea salt to 500ml water mid-morning. It resolves by Day 4-5."
                />
                <TroubleshootItem
                  problem="Sugar cravings"
                  fix="Increase protein at breakfast, ensure enough fat at each meal"
                />
                <TroubleshootItem
                  problem="Headaches"
                  fix="More water, add electrolytes (salt, magnesium)"
                />
                <TroubleshootItem
                  problem="3 AM wake-ups"
                  fix="Ensure carbs at dinner, stop caffeine by noon, check last meal timing"
                />
                <TroubleshootItem
                  problem="Low energy all day"
                  fix="Check sleep duration (7+ hours), verify you&apos;re eating enough protein"
                />

                <h3 className="font-semibold text-primary mb-3 mt-6 text-sm uppercase tracking-wide">
                  General Tips
                </h3>
                <TroubleshootItem
                  problem="Hungry between meals"
                  fix="Increase fat at previous meal, ensure adequate protein (palm-sized portion minimum)"
                />
                <TroubleshootItem
                  problem="Food reactions"
                  fix="Note the food, skip it for now, retest after Day 21"
                />
                <TroubleshootItem
                  problem="Plateau after Week 2"
                  fix="Stay the course — gut healing takes time. Results often surge in Week 3."
                />
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary/30 rounded-lg text-center print:bg-gray-50">
              <p className="text-sm text-muted-foreground mb-2">
                This guide is educational and not medical advice.
              </p>
              <p className="text-xs text-muted-foreground">
                If you take medication, are pregnant or nursing, or have a
                diagnosed GI condition, check with your practitioner before
                starting.
              </p>
              <p className="text-sm font-medium text-foreground mt-4">
                By Daryl Stubbs, RMT, CAT(C), C.H.N.C.
              </p>
            </div>

            <PageFooter page={9} />
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper Components
function PageFooter({ page }: { page: number }) {
  return (
    <div className="flex justify-between items-center mt-8 pt-4 border-t border-border text-xs text-muted-foreground">
      <span>21-Day Anti-Inflammation Program</span>
      <span>Page {page}</span>
    </div>
  );
}

function MealCard({
  title,
  subtitle,
  description,
  examples,
}: {
  title: string;
  subtitle: string;
  description: string;
  examples: string;
}) {
  return (
    <div className="border border-border rounded-lg p-4">
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-primary font-medium">{subtitle}</p>
      <p className="text-xs text-muted-foreground mt-2">{description}</p>
      <p className="text-xs text-muted-foreground italic">{examples}</p>
    </div>
  );
}

function FibreRow({ days, item }: { days: string; item: string }) {
  return (
    <tr className="border-b border-border last:border-b-0">
      <td className="px-4 py-2 font-medium text-foreground">{days}</td>
      <td className="px-4 py-2 text-muted-foreground">{item}</td>
    </tr>
  );
}

function ScheduleRow({ time, items }: { time: string; items: string }) {
  return (
    <tr className="border-b border-border last:border-b-0">
      <td className="px-4 py-2 font-medium text-foreground">{time}</td>
      <td className="px-4 py-2 text-muted-foreground">{items}</td>
    </tr>
  );
}

function SupplementCard({
  number,
  name,
  dose,
  why,
  feelBy,
}: {
  number: number;
  name: string;
  dose: string;
  why: string;
  feelBy: string;
}) {
  return (
    <div className="border border-border rounded-lg p-4">
      <div className="flex items-start gap-2">
        <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
          {number}
        </span>
        <div>
          <h4 className="font-semibold text-foreground text-sm">{name}</h4>
          <p className="text-accent font-medium text-sm">{dose}</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-2">{why}</p>
      <p className="text-xs text-primary mt-2 font-medium">Feel it by: {feelBy}</p>
    </div>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="w-4 h-4 border-2 border-primary rounded flex-shrink-0 print:border-gray-400" />
      <span className="text-sm text-foreground">{children}</span>
    </label>
  );
}

function DayCard({ days, content }: { days: string; content: string }) {
  return (
    <div className="border border-border rounded-lg p-3">
      <span className="text-xs font-semibold text-primary">{days}</span>
      <p className="text-sm text-muted-foreground mt-1">{content}</p>
    </div>
  );
}

function SampleDayRow({ time, activity }: { time: string; activity: string }) {
  return (
    <tr className="border-b border-border last:border-b-0">
      <td className="px-4 py-2 font-semibold text-foreground w-24">{time}</td>
      <td className="px-4 py-2 text-muted-foreground">{activity}</td>
    </tr>
  );
}

function MealRow({ items }: { items: string[] }) {
  return (
    <tr className="border-b border-border last:border-b-0">
      {items.map((item, i) => (
        <td key={i} className="px-4 py-2 text-muted-foreground">
          {item}
        </td>
      ))}
    </tr>
  );
}

function ShoppingCategory({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold text-primary mb-2 text-sm">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function ShoppingItem({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="w-4 h-4 border-2 border-primary rounded flex-shrink-0 print:border-gray-400" />
      <span className="text-sm text-muted-foreground">{children}</span>
    </label>
  );
}

function TroubleshootItem({ problem, fix }: { problem: string; fix: string }) {
  return (
    <div className="mb-3">
      <p className="font-medium text-foreground text-sm">{problem}</p>
      <p className="text-xs text-muted-foreground">→ {fix}</p>
    </div>
  );
}
