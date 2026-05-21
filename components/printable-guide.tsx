"use client";

import { Download } from "lucide-react";
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

        {/* Page 2: Start Here */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Start Here
            </h2>
            <p className="text-lg text-foreground mb-6">
              Welcome. This is simpler than it looks. Here&apos;s everything you need to know in 30 seconds.
            </p>

            {/* How the Next 21 Days Work */}
            <div className="bg-secondary/50 border-l-4 border-primary p-5 rounded-r-lg mb-6 print:bg-gray-50">
              <h3 className="font-semibold text-foreground mb-3">
                How the Next 21 Days Work
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                You&apos;ll do four things every day: take 4 supplements, eat 3 simple meals, walk 10 minutes after lunch and dinner, and sleep well. That&apos;s it. The rest of this guide just shows you exactly how.
              </p>
              <p className="text-sm text-muted-foreground">
                Most people feel a real difference within the first 7-10 days. By Day 21, the new way of eating feels normal.
              </p>
            </div>

            {/* Do This Before You Start */}
            <h3 className="font-semibold text-primary mb-3">
              Do This Before You Start (10 minutes)
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-border rounded-lg p-4">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mb-2">1</span>
                <h4 className="font-semibold text-foreground text-sm">Order the 4 supplements</h4>
                <p className="text-xs text-muted-foreground mt-1">They&apos;re listed on the Supplements page with exact brands and buy links. Order today so they arrive before you begin. (Total cost is roughly $80-120 and they last 1-2 months.) Yes, these are a bit expensive - but in my decade of experience they will have the most impact on how you feel. This isn&apos;t a lifelong supplement routine, just a short stint to make you noticeably feel better.</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mb-2">2</span>
                <h4 className="font-semibold text-foreground text-sm">Do one grocery shop</h4>
                <p className="text-xs text-muted-foreground mt-1">Use the Shopping List page. One trip covers most of the week.</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mb-2">3</span>
                <h4 className="font-semibold text-foreground text-sm">Pick your start day</h4>
                <p className="text-xs text-muted-foreground mt-1">Monday works best for most people. Cook a batch of rice and potatoes the day before (see Sunday Prep).</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mb-2">4</span>
                <h4 className="font-semibold text-foreground text-sm">Read two pages</h4>
                <p className="text-xs text-muted-foreground mt-1">&quot;Your Daily Game Plan&quot; and &quot;The 4 Supplements.&quot; That&apos;s all you need to begin.</p>
              </div>
            </div>

            {/* The Three Rules */}
            <h3 className="font-semibold text-primary mb-3">
              The Three Rules That Matter Most
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 items-start">
                <span className="text-primary font-bold text-lg">1.</span>
                <div>
                  <p className="font-semibold text-foreground">Breakfast = protein + fat. No bread, no cereal, no sugar.</p>
                  <p className="text-sm text-muted-foreground">This one change does most of the work.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-primary font-bold text-lg">2.</span>
                <div>
                  <p className="font-semibold text-foreground">Cook your rice and potatoes the day before, then reheat.</p>
                  <p className="text-sm text-muted-foreground">Cooling them creates resistant starch - the fibre that heals your gut.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-primary font-bold text-lg">3.</span>
                <div>
                  <p className="font-semibold text-foreground">Walk 10 minutes after lunch and dinner.</p>
                  <p className="text-sm text-muted-foreground">Boring, but it&apos;s the single biggest lever for steady energy and blood sugar.</p>
                </div>
              </div>
            </div>

            {/* What If I Slip Up */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6 print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">What If I Slip Up?</h3>
              <p className="text-sm text-muted-foreground">
                You won&apos;t do this perfectly. Nobody does. If you miss a supplement, eat off-plan, or skip a walk - just pick it back up at the next meal. Progress beats perfection every time.
              </p>
            </div>

            {/* One Page to Rule */}
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg print:bg-amber-50">
              <p className="font-semibold text-foreground">
                One page to rule them all:
              </p>
              <p className="text-sm text-muted-foreground">
                If you only read one page, make it &quot;Your Daily Game Plan.&quot; Print it. Stick it on your fridge. Everything else supports that page.
              </p>
            </div>

            <PageFooter page={2} />
          </div>
        </section>

        {/* Page 3: Daily Game Plan (KEY HIGHLIGHT PAGE) */}
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

            {/* 5 Daily Essentials */}
            <div className="bg-secondary/50 border-l-4 border-primary p-5 rounded-r-lg mb-6 print:bg-gray-50">
              <h3 className="font-semibold text-foreground mb-3">
                Do These 5 Things Every Day
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span><strong>Take your supplements</strong> (4 supplements + 1 tbsp psyllium husk - see schedule)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span><strong>Eat breakfast one of two ways:</strong> chia pudding OR protein + fat. That&apos;s the only breakfast decision you make.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span><strong>Eat 3 meals. No snacks. 12-hour overnight fast.</strong></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span><strong>Walk 10 minutes after lunch and after dinner.</strong></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">5.</span>
                  <span><strong>Sleep 7+ hours. Stop eating 2-3 hours before bed.</strong></span>
                </li>
              </ul>
            </div>

            {/* Two-choice breakfast note */}
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-6 print:bg-amber-50">
              <p className="text-sm text-muted-foreground">
                <strong>The two-choice breakfast:</strong> Every morning is either a chia pudding (made the night before) or eggs/salmon with fat. You never have to wonder &quot;what&apos;s for breakfast&quot; again. Both keep your blood sugar flat and your energy steady till lunch.
              </p>
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
            <h3 className="font-semibold text-primary mb-2">
              Your Fibre Ramp — Building To 30-38g A Day
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Fibre is the single most powerful lever for your gut, your inflammation, and how young you feel.</strong> Fibre is the food your good gut bacteria eat. When they&apos;re fed, they produce butyrate — the fatty acid that heals your gut lining and calms inflammation across your whole body.
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              <strong>Targets:</strong> Women: ~30g/day | Men: ~38g/day | Everyone: aim for 30 different plants per week
            </p>
            <div className="bg-secondary/30 p-3 rounded-lg mb-4 print:bg-gray-50">
              <p className="text-xs text-muted-foreground">
                <strong>The 30-plants rule:</strong> Variety feeds variety. Different fibres feed different bacteria, so a diverse plate builds a diverse, resilient gut. Plants count generously — nuts, seeds, herbs, spices, even coffee and dark chocolate all count toward your 30.
              </p>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              <strong>Why we ramp slowly:</strong> If your gut isn&apos;t used to fibre, going from 12g to 35g overnight will bloat you and make you quit. We add it in stages so your bacteria multiply to match the supply. Your daily <strong>1 tbsp of psyllium husk</strong> is the anchor — it runs through this whole ramp on top of the food below.
            </p>
            <div className="border border-border rounded-lg overflow-hidden mb-4">
              <table className="w-full text-xs">
                <thead className="bg-secondary/50 print:bg-gray-100">
                  <tr>
                    <th className="text-left px-3 py-2 font-semibold text-primary w-16">Days</th>
                    <th className="text-left px-3 py-2 font-semibold text-primary">What To Add</th>
                    <th className="text-left px-3 py-2 font-semibold text-primary w-16">Adds</th>
                    <th className="text-left px-3 py-2 font-semibold text-primary w-20">Total*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground">1-3</td>
                    <td className="px-3 py-2 text-muted-foreground">Psyllium 1 tsp + 1 cup cooled rice/potato at lunch + cooked carrots & zucchini at dinner</td>
                    <td className="px-3 py-2 text-muted-foreground">~8-10g</td>
                    <td className="px-3 py-2 text-muted-foreground">~15-18g</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground">4-6</td>
                    <td className="px-3 py-2 text-muted-foreground">Move psyllium to full 1 tbsp + 1 tbsp ground flax or chia at breakfast</td>
                    <td className="px-3 py-2 text-muted-foreground">~5g</td>
                    <td className="px-3 py-2 text-muted-foreground">~20-23g</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground">7-9</td>
                    <td className="px-3 py-2 text-muted-foreground">1 green kiwi + a big handful of cooked spinach daily</td>
                    <td className="px-3 py-2 text-muted-foreground">~5g</td>
                    <td className="px-3 py-2 text-muted-foreground">~24-27g</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground">10-12</td>
                    <td className="px-3 py-2 text-muted-foreground">1 cup berries + 1 tbsp mixed seeds (pumpkin, hemp, sunflower)</td>
                    <td className="px-3 py-2 text-muted-foreground">~5g</td>
                    <td className="px-3 py-2 text-muted-foreground">~28-31g</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground">13-15</td>
                    <td className="px-3 py-2 text-muted-foreground">A second cooked veg at dinner (broccoli, green beans, squash)</td>
                    <td className="px-3 py-2 text-muted-foreground">~4g</td>
                    <td className="px-3 py-2 text-muted-foreground">~30-34g</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-foreground">16-21</td>
                    <td className="px-3 py-2 text-muted-foreground">Add 1/4 cup nuts/day + reach 30 different plants this week</td>
                    <td className="px-3 py-2 text-muted-foreground">~4g</td>
                    <td className="px-3 py-2 font-semibold text-primary">~34-38g</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mb-4 italic">*Totals include the fibre already in your normal meals. Individual fibre counts vary — these are working estimates, not lab numbers.</p>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg mb-4 print:bg-amber-50">
              <p className="text-xs text-muted-foreground">
                <strong>The bloating rule:</strong> If any step makes you uncomfortably bloated, don&apos;t push to the next stage — hold where you are for 3 extra days, then continue. And drink more water as your fibre climbs: aim for 2.5-3L a day. Fibre without water is what causes the discomfort, not the fibre itself.
              </p>
            </div>

            {/* What You Will Feel */}
            <div className="bg-accent/10 border-l-4 border-accent p-5 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">
                What You Will Feel By Day 21
              </h3>
              <p className="text-sm text-muted-foreground">
                Less bloating - clearer head - steadier mood - deeper sleep -
                easier mornings - looser clothes - brighter skin - fewer sugar
                cravings - less joint stiffness
              </p>
            </div>

            <PageFooter page={3} />
          </div>
        </section>

        {/* Page 4: Supplements */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              The 4 Supplements
            </h2>
            <p className="text-muted-foreground mb-6">
              These four work as a team. Here&apos;s what each one does inside your body - and exactly how you&apos;ll feel it.
            </p>

            {/* Supplement 1: Butyrate */}
            <div className="border border-border rounded-lg p-4 mb-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-foreground">BodyBio Sodium Butyrate</h4>
                    <p className="text-accent font-medium text-sm">Take: 1 cap with breakfast + 1 cap with dinner</p>
                    <p className="text-xs text-muted-foreground">50 servings per bottle</p>
                  </div>
                </div>
                <a href="https://ca.iherb.com/pr/bodybio-sodium-butyrate-100-capsules/105881?rcode=IQE9230" target="_blank" rel="noopener noreferrer" className="print:hidden bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors flex-shrink-0">
                  Buy
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>What it does in your body:</strong> Butyrate is the fuel your gut lining runs on. It seals up the &quot;leaky&quot; gaps between gut cells that let inflammation spill into your bloodstream. Less leak means less body-wide inflammation.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>How you&apos;ll feel:</strong> Calmer digestion, less bloating, and a clearer head. Many people notice their thinking feels sharper and their gut feels &quot;quiet&quot; for the first time in years.
              </p>
              <p className="text-xs text-primary font-medium">Timeline: Day 7-10.</p>
            </div>

            {/* Supplement 2: Zinc Carnosine */}
            <div className="border border-border rounded-lg p-4 mb-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Seeking Health Zinc Carnosine</h4>
                    <p className="text-accent font-medium text-sm">Take: 1 cap with breakfast + 1 cap at bedtime</p>
                    <p className="text-xs text-muted-foreground">60 servings per bottle</p>
                  </div>
                </div>
                <a href="https://ca.iherb.com/pr/seeking-health-zinc-carnosine-75-mg-60-capsules/122670?rcode=IQE9230" target="_blank" rel="noopener noreferrer" className="print:hidden bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors flex-shrink-0">
                  Buy
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>What it does in your body:</strong> It physically coats and heals inflamed, irritated tissue in your stomach and gut - it was originally a prescription ulcer treatment in Japan. As the gut lining calms down, the low-grade inflammation that&apos;s been quietly traveling through your body settles too.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>How you&apos;ll feel:</strong> Reflux and that &quot;raw&quot; stomach feeling fade first. Then something people don&apos;t expect - <strong>the chronic tension in your neck and shoulders starts to ease, and general aches and stiffness lift.</strong> That&apos;s not a coincidence: a lot of everyday muscle tension and achiness is driven by low-grade gut inflammation. Calm the gut, and the body stops bracing.
              </p>
              <p className="text-xs text-primary font-medium">Timeline: Day 5-7 for the gut; aches and tension often by Week 2.</p>
            </div>

            {/* Supplement 3: Super Enzymes */}
            <div className="border border-border rounded-lg p-4 mb-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-foreground">NOW Foods Super Enzymes</h4>
                    <p className="text-accent font-medium text-sm">Take: 1 tablet with the first bite of every meal (see &quot;When to Cut Back&quot; below)</p>
                    <p className="text-xs text-muted-foreground">90 capsules per bottle</p>
                  </div>
                </div>
                <a href="https://ca.iherb.com/pr/now-foods-super-enzymes-90-capsules/51072?rcode=IQE9230" target="_blank" rel="noopener noreferrer" className="print:hidden bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors flex-shrink-0">
                  Buy
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>What it does in your body:</strong> As we age and as the gut gets inflamed, we make less stomach acid and fewer digestive enzymes. Food then sits half-digested, ferments, feeds the wrong bacteria, and creates gas, bloating, and that heavy, tired feeling after meals. These enzymes do the breakdown work your gut is struggling to do, so food actually gets digested and absorbed.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>How you&apos;ll feel:</strong> This is the fastest win. Less heaviness and bloating after eating, more energy in the 2-3 hours after a meal, and - like the zinc carnosine - <strong>less of the achiness and tension that comes from a body fighting poorly-digested food.</strong> You absorb more of your protein and nutrients, so you&apos;re better fed at the cellular level.
              </p>
              <p className="text-xs text-primary font-medium mb-2">Timeline: Day 2-4.</p>
              <p className="text-xs text-muted-foreground italic">
                <strong>When to cut back:</strong> Take with every meal for the first 3-4 weeks while your gut heals. After that, your own digestion will have recovered enough that you only need them with bigger or heavier meals (a steak dinner, eating out, a protein-rich plate). Light meals won&apos;t need them anymore. That&apos;s a sign of progress - your gut is doing its own job again.
              </p>
            </div>

            {/* Supplement 4: NAC + Glycine */}
            <div className="border border-border rounded-lg p-4 mb-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Pure Encapsulations NAC + Glycine</h4>
                    <p className="text-accent font-medium text-sm">Take: 1 scoop in water, between meals (mid-morning is ideal)</p>
                    <p className="text-xs text-muted-foreground">30 servings per container</p>
                  </div>
                </div>
                <a href="https://amzn.to/42MLAJA" target="_blank" rel="noopener noreferrer" className="print:hidden bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors flex-shrink-0">
                  Buy
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>What it does in your body:</strong> These two amino acids rebuild glutathione - your body&apos;s master antioxidant and main detox molecule. By midlife, glutathione can be half what it was at 25, which is a big reason things feel harder, slower, and more inflamed. This refills the tank.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>How you&apos;ll feel:</strong> Steadier, more even energy through the day. A less reactive, more level mood. Clearer, brighter skin. It&apos;s the most &quot;background&quot; of the four - you feel it as a general lift rather than one dramatic change.
              </p>
              <p className="text-xs text-primary font-medium">Timeline: Day 10-14.</p>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4 print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">
                Important Notes
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>- Take NAC + Glycine on an empty stomach - food protein competes for absorption.</li>
                <li>- Skip Super Enzymes if you have an active ulcer, take blood thinners, or have a pineapple/papaya allergy. Check with your practitioner.</li>
                <li>- Sodium Butyrate has ~156 mg sodium per capsule (~313 mg for both daily caps). Reduce if you&apos;re on salt restriction or have high blood pressure.</li>
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
                  <ScheduleRow time="Bedtime" items="1 Zinc Carnosine + 1 tbsp psyllium husk in a big glass of water" />
                </tbody>
              </table>
            </div>

            {/* Psyllium Note */}
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mt-4 print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">Psyllium Every Single Day</h3>
              <p className="text-sm text-muted-foreground mb-2">
                This is non-negotiable - it&apos;s the daily fibre that firms your stool, feeds your gut, steadies blood sugar, and binds the junk your body is clearing out. Stir 1 tbsp into 8-10 oz of water, drink it fast (it gels), then chase it with another full glass.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>First 3 days:</strong> start with 1 tsp instead of 1 tbsp so your gut adjusts without bloating. Move up to the full tablespoon on Day 4.
              </p>
            </div>

            <PageFooter page={4} />
          </div>
        </section>

        {/* Page 5: Butyrate - Why It Matters */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Butyrate: Why It Matters
            </h2>
            <p className="text-muted-foreground mb-6">
              One of the supplements you&apos;re taking is butyrate. Here&apos;s why it&apos;s the quiet hero of this whole program.
            </p>

            <div className="bg-secondary/50 border-l-4 border-primary p-5 rounded-r-lg mb-6 print:bg-gray-50">
              <p className="text-sm text-foreground">
                Butyrate is a fatty acid your gut bacteria make when they ferment fibre. It&apos;s the <strong>number one fuel for your colon cells</strong> - they get 70% of their energy from it. When you&apos;re low on butyrate, the gut lining gets weak, leaky, and inflamed. Top it back up and the whole system starts to repair.
              </p>
            </div>

            <h3 className="font-semibold text-primary mb-3">What Butyrate Does For You</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">For Your Gut</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>- Repairs the gut lining and seals up &quot;leaky gut&quot;</li>
                  <li>- Calms IBS - works for both constipation and diarrhea type</li>
                  <li>- In a recent study, butyrate cleared SIBO in 54% of people vs just 5% on placebo</li>
                  <li>- Doubles the remission rate of ulcerative colitis alongside standard treatment</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">For Your Weight</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>- Boosts GLP-1 - the same &quot;I&apos;m full&quot; hormone that drugs like Ozempic target</li>
                  <li>- Helps steady blood sugar</li>
                  <li>- Supports gentle, sustainable weight loss</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">For Your Brain</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>- Feeds BDNF, your brain&apos;s own growth factor (think fertilizer for brain cells)</li>
                  <li>- Lowers brain inflammation</li>
                  <li>- Linked to better mood, less anxiety, and sharper memory</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Everywhere Else</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>- Lowers the bacterial toxins that leak from an inflamed gut and drive body-wide inflammation</li>
                </ul>
              </div>
            </div>

            <h3 className="font-semibold text-primary mb-3">Foods That Build Butyrate</h3>
            <p className="text-sm text-muted-foreground mb-3">You&apos;re taking a supplement, but these foods feed your gut to make its own - without the bloating:</p>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50 print:bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-primary">Food Group</th>
                    <th className="text-left px-4 py-2 font-semibold text-primary">Best Choices</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium text-foreground">Resistant starch (biggest lever)</td>
                    <td className="px-4 py-2 text-muted-foreground">Cooled-then-reheated white rice, cooled potato, cooled sweet potato, green plantain. Aim for ~1 cup/day at lunch.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium text-foreground">Low-sugar fruit</td>
                    <td className="px-4 py-2 text-muted-foreground">Green (unripe) bananas, blueberries, strawberries, raspberries, green kiwi</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium text-foreground">Nuts & seeds</td>
                    <td className="px-4 py-2 text-muted-foreground">Walnuts, pecans, chia seeds, ground flax</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-4 print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">Why Two Forms Exist</h3>
              <p className="text-sm text-muted-foreground">
                Sodium butyrate (what you&apos;re taking) targets the gut. Tributyrin is a different form that reaches the brain - a good upgrade later if your gut feels great but you still want sharper focus and mood.
              </p>
            </div>

            <div className="bg-secondary/30 p-4 rounded-lg print:bg-gray-50">
              <p className="text-sm text-muted-foreground">
                <strong>Butyrate is one of the safest supplements there is</strong> - your body makes it naturally. A little nausea or loose stool in the first few days is normal and settles quickly.
              </p>
            </div>

            <PageFooter page={5} />
          </div>
        </section>

        {/* Page 6: Why We Eat Breakfast This Way */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Why We Eat Breakfast This Way
            </h2>
            <p className="text-muted-foreground mb-6">
              <strong>Every breakfast on this plan is one of two things: protein + fat, or a chia pudding. Both are built on the same goal — keep your morning insulin flat.</strong> Here&apos;s why that one decision drives so much of how you&apos;ll feel.
            </p>

            {/* The Problem */}
            <h3 className="font-semibold text-primary mb-3">The Problem With A Normal Breakfast</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Toast, cereal, oats, a muffin, juice, a sweet coffee — these flood your blood with sugar first thing in the morning. Your body answers with a big surge of <strong>insulin</strong> to clear it. An hour or two later you crash: tired, foggy, and hungry again, reaching for another quick carb. That spike-and-crash runs all day, and it does two things you don&apos;t want.
            </p>

            {/* Why Flat Insulin Matters */}
            <h3 className="font-semibold text-primary mb-3">Why Flat Insulin Matters So Much</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-secondary/50 border-l-4 border-primary p-4 rounded-r-lg print:bg-gray-50">
                <p className="font-semibold text-foreground mb-2">1. Insulin is your &quot;store fat, stop burning fat&quot; switch.</p>
                <p className="text-sm text-muted-foreground">
                  When insulin is high, your body locks away fat and burns sugar instead. When insulin stays <em>low and steady</em>, your body can finally reach into its fat stores and burn them for fuel. A protein-and-fat breakfast keeps insulin low — so your morning becomes a fat-burning window instead of a fat-storing one.
                </p>
              </div>
              <div className="bg-secondary/50 border-l-4 border-primary p-4 rounded-r-lg print:bg-gray-50">
                <p className="font-semibold text-foreground mb-2">2. Chronically high insulin fuels inflammation.</p>
                <p className="text-sm text-muted-foreground">
                  Repeated insulin and blood-sugar spikes are themselves inflammatory — they stress your cells, drive oxidation, and keep your body in a low-grade &quot;alarm&quot; state. Flattening those spikes is one of the most direct ways to lower the inflammation that&apos;s making you feel old, stiff, and tired. Steady blood sugar = a calmer, less inflamed body.
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-6 print:bg-amber-50">
              <p className="text-sm text-muted-foreground">
                So a protein + fat breakfast gives you: <strong>steady energy with no crash, fewer cravings all day, an open fat-burning window, and lower inflammation.</strong> One small change, a lot of payoff.
              </p>
            </div>

            {/* Option 1 */}
            <h3 className="font-semibold text-primary mb-3">Option 1: Protein + Fat</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Eggs and avocado. Salmon and olive oil. Leftover meat with greens cooked in butter. Protein keeps you full and feeds your muscles; fat gives you slow, steady energy with zero blood-sugar spike. This is the simplest way to keep insulin flat for the whole morning.
            </p>

            {/* Option 2 */}
            <h3 className="font-semibold text-primary mb-3">Option 2: The Chia Pudding (and why chia is special)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Chia isn&apos;t just a low-sugar carb swap — it actively works on your gut. Here&apos;s what it does:
            </p>
            <div className="space-y-3 mb-4">
              <div className="border border-border rounded-lg p-3">
                <p className="text-sm text-muted-foreground">
                  <strong>It soothes and protects your gut lining.</strong> When chia soaks overnight, it forms a thick gel (called mucilage). That gel is mostly soluble fibre, and it behaves like a soft, soothing coat as it moves through you — supporting your gut&apos;s own protective mucus layer and calming irritation along the lining.
                </p>
              </div>
              <div className="border border-border rounded-lg p-3">
                <p className="text-sm text-muted-foreground">
                  <strong>It feeds the bacteria that calm your whole body.</strong> Lower down, that same fibre becomes food for your good gut bacteria, who turn it into <strong>butyrate</strong> — the exact gut-healing, inflammation-calming fatty acid from the butyrate section. So your breakfast is literally feeding the repair process.
                </p>
              </div>
              <div className="border border-border rounded-lg p-3">
                <p className="text-sm text-muted-foreground">
                  <strong>It keeps you full and steady.</strong> The gel slows digestion, so a chia breakfast releases its energy gently — no spike, no crash — and keeps you satisfied to lunch.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Add a scoop of protein powder or a spoon of hemp hearts and you&apos;ve got the best of both options: the gut-soothing fibre of chia <em>plus</em> the steady, insulin-flat fullness of protein. (Recipe variations are on the Easy Recipes page.)
            </p>

            <div className="bg-secondary/30 p-4 rounded-lg print:bg-gray-50">
              <p className="text-sm text-muted-foreground">
                <strong>The takeaway:</strong> Both breakfasts do the same job — flat insulin, steady energy, lower inflammation, and an open fat-burning window. The chia version adds a daily dose of gut-lining repair on top. Pick whichever fits your morning. There&apos;s no wrong choice between the two.
              </p>
            </div>

            <PageFooter page={6} />
          </div>
        </section>

        {/* Page 7: Week 1 */}
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
              Daily Checklist - Week 1
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
              Sample Day - Week 1
            </h3>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <tbody>
                  <SampleDayRow
                    time="7:00 AM"
                    activity="2 eggs + 1/2 avocado + sauteed spinach. Take: Butyrate, Zinc Carnosine, Enzyme"
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
                This is normal - your body is shifting from morning carbs to
                stable fat-burning. Add 1/4 tsp sea salt to 500ml water
                mid-morning. It resolves by Day 4-5.
              </p>
            </div>

            <PageFooter page={7} />
          </div>
        </section>

        {/* Page 8: Week 2 */}
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
                Brain fog visibly lifts - Skin brighter, less puffy - Clothes
                loosen at waist - Mood steadier - Sugar cravings noticeably
                weaker
              </p>
            </div>

            {/* Checklist */}
            <h3 className="font-semibold text-primary mb-3">
              Daily Checklist - Week 2
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
                content="Start 1/2 tsp psyllium husk in 8-10 oz water at bedtime. Follow with another glass of water."
              />
            </div>

            {/* Sample Day */}
            <h3 className="font-semibold text-primary mb-3">
              Sample Day - Week 2
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
                    activity="Zinc Carnosine + 1/2 tsp psyllium in water (from Day 13)."
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

            <PageFooter page={8} />
          </div>
        </section>

        {/* Page 9: Week 3 */}
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
                Waking refreshed, often before alarm - Food reactivity dropping
                fast - Steady energy 9 AM to 9 PM - Joint aches reduced - People
                around you start commenting on how you look - Sugar no longer
                runs your day
              </p>
            </div>

            {/* Checklist */}
            <h3 className="font-semibold text-primary mb-3">
              Daily Checklist - Week 3
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
                content="Continue 1/2 tsp psyllium. If no bloating, increase to 1 tsp on Day 16."
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
                  <li>- Reintroduce one food group every 4 days</li>
                  <li>- Start with oats, then fruit, then sourdough</li>
                  <li>- Keep 12-hour overnight fast forever</li>
                  <li>- Keep post-meal walks (non-negotiable)</li>
                  <li>- Continue supplements 6-8 more weeks</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">
                  If You&apos;re Stalled
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>- Consider GI-MAP stool test</li>
                  <li>- Consider SIBO breath test</li>
                  <li>- Track which foods still trigger symptoms</li>
                  <li>- Consult with a practitioner</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-1">Remember</h3>
              <p className="text-sm text-muted-foreground">
                The habits you&apos;ve built are more important than the supplements.
                The 12-hour fast, post-meal walks, protein-forward breakfasts,
                and reduced processed foods will serve you for life. The
                supplements are training wheels - eventually your gut will do
                the work on its own.
              </p>
            </div>

            <PageFooter page={9} />
          </div>
        </section>

        {/* Page 10: Eat Freely / Evening Only / Pause For Now */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                KEY PAGE
              </span>
            </div>
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Eat Freely / Evening Only / Pause For Now
            </h2>
            <p className="text-muted-foreground mb-6">
              <strong>This is the whole diet on one page. Three lists. No counting, no measuring.</strong> It&apos;s built on a simple idea backed by Swedish research (Lund University): when you pull back on starchy carbs and sugar - especially earlier in the day - your gut calms, bloating drops, and sugar cravings fade fast.
            </p>

            {/* Eat Freely */}
            <div className="bg-secondary/50 border-l-4 border-primary p-5 rounded-r-lg mb-6 print:bg-gray-50">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-primary">EAT FREELY</span> <span className="text-sm font-normal text-muted-foreground">(any time, any amount)</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-3">These are your foundation. Build every meal around them.</p>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground">Proteins</p>
                  <p className="text-muted-foreground">Eggs, wild salmon, sardines, mackerel, chicken, turkey, grass-fed beef, bone broth, lactose-free Greek yogurt</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Fats</p>
                  <p className="text-muted-foreground">Olive oil (use generously), avocado, ghee, butter, tahini, walnuts, pecans, almonds, chia, hemp hearts, flax</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Vegetables (cooked first)</p>
                  <p className="text-muted-foreground">Carrots, zucchini, spinach, kale, bok choy, green beans, cucumber, red pepper, asparagus, 1 small tomato, olives</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Low-sugar fruit</p>
                  <p className="text-muted-foreground">Green kiwi, blueberries, strawberries, raspberries, lemon, lime</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-semibold text-foreground">Drinks</p>
                  <p className="text-muted-foreground">Water, green tea, black coffee (before noon), herbal tea, bone broth, sparkling water</p>
                </div>
              </div>
            </div>

            {/* Evening Only */}
            <div className="bg-accent/10 border-l-4 border-accent p-5 rounded-r-lg mb-6 print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">EVENING ONLY</span> <span className="text-sm font-normal text-muted-foreground">(with dinner, after your day of movement)</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-3">Your body handles carbs best at night - they help you sleep and they don&apos;t spike you when you&apos;ve been active all day. Keep these to the evening meal.</p>
              
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>- Rice (jasmine, basmati) - and cooled-then-reheated for lunch is fine too</li>
                <li>- Potatoes and sweet potatoes</li>
                <li>- Butternut and other winter squash</li>
                <li>- Plantain, cassava</li>
                <li>- A small portion of higher-sugar fruit (1/2 banana, a few grapes) if you want dessert</li>
              </ul>
              
              <p className="text-xs text-muted-foreground mt-3 italic">
                <strong>The one daytime exception:</strong> cooled-then-reheated rice or potato at lunch. Cooling turns it into resistant starch - it acts like a fibre, not a sugar, so it&apos;s gut-healing rather than blood-sugar-spiking.
              </p>
            </div>

            {/* Pause For Now */}
            <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-6 print:bg-red-50">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-red-600">PAUSE FOR NOW</span> <span className="text-sm font-normal text-muted-foreground">(first 21 days)</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-3">These are the worst offenders for inflammation, bloating, and cravings. Not forever - just while you heal. You&apos;ll reintroduce some after Day 21.</p>
              
              <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>- <strong>Sugar and sweets</strong> - candy, baked goods, anything with added sugar</div>
                <div>- <strong>Bread, pasta, flour foods, cereal, oats</strong> (at breakfast and lunch especially)</div>
                <div>- <strong>High-sugar fruit early in the day</strong> - apple, pear, banana, mango, dried fruit, fruit juice</div>
                <div>- <strong>Seed oils</strong> - canola, soybean, corn, sunflower, &quot;vegetable oil&quot;</div>
                <div>- <strong>Alcohol</strong> - disrupts the gut barrier and drains your antioxidants</div>
                <div>- <strong>Ultra-processed food and fast food</strong></div>
                <div>- <strong>Regular dairy with lactose</strong> (lactose-free hard cheese, butter, and ghee are fine)</div>
                <div>- <strong>Onion and raw garlic</strong> early (use garlic-infused olive oil instead)</div>
              </div>
            </div>

            <div className="bg-secondary/30 p-4 rounded-lg print:bg-gray-50">
              <p className="text-sm text-muted-foreground">
                <strong>The freeing part:</strong> you are never hungry on this plan. Anything in the green list, any time, as much as you want. You&apos;re not cutting calories - you&apos;re changing <em>which</em> foods, and <em>when</em>.
              </p>
            </div>

            <PageFooter page={10} />
          </div>
        </section>

        {/* Page 11: How To Eat With Your Family */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              How To Eat With Your Family
            </h2>
            <p className="text-muted-foreground mb-6">
              <strong>You do not need to cook two dinners.</strong> The biggest reason people quit a program like this is the hassle of feeding everyone else. Here&apos;s how to eat this way while your family eats with you - often without them even noticing.
            </p>

            {/* The Core Trick */}
            <div className="bg-secondary/50 border-l-4 border-primary p-5 rounded-r-lg mb-6 print:bg-gray-50">
              <h3 className="font-semibold text-foreground mb-3">The Core Trick: Cook One Meal, Add Their Extras</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Your anti-inflammatory dinner - <strong>protein + cooked veg + a starch</strong> - is just... dinner. It&apos;s already family food. The only difference is what gets <em>added</em> at the table.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground">Cook the shared base everyone eats:</p>
                  <ul className="text-muted-foreground mt-1 space-y-1">
                    <li>- A protein (roast chicken, salmon, beef, turkey)</li>
                    <li>- A cooked vegetable or two</li>
                    <li>- A starch (rice, potatoes, squash)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Then let the family add what they want:</p>
                  <ul className="text-muted-foreground mt-1 space-y-1">
                    <li>- Bread or rolls (you skip them)</li>
                    <li>- Pasta (or swap in <strong>Rummo GF pasta</strong> for the whole family)</li>
                    <li>- A sauce or dessert you&apos;re pausing</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 italic">You ate the same meal. They added a couple of extras. Nobody cooked twice.</p>
            </div>

            {/* Real Family Dinners */}
            <h3 className="font-semibold text-primary mb-3">Real Family Dinners That Work As-Is</h3>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50 print:bg-gray-100">
                  <tr>
                    <th className="text-left px-3 py-2 font-semibold text-primary">Family Meal</th>
                    <th className="text-left px-3 py-2 font-semibold text-primary">Your Version</th>
                    <th className="text-left px-3 py-2 font-semibold text-primary">Their Add-On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 text-foreground">Roast chicken night</td>
                    <td className="px-3 py-2 text-muted-foreground">Chicken + roast potatoes + carrots + olive oil</td>
                    <td className="px-3 py-2 text-muted-foreground">Bread, gravy</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 text-foreground">Taco night</td>
                    <td className="px-3 py-2 text-muted-foreground">Beef/chicken + rice + peppers in a bowl</td>
                    <td className="px-3 py-2 text-muted-foreground">Tortillas, cheese, chips</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 text-foreground">Salmon dinner</td>
                    <td className="px-3 py-2 text-muted-foreground">Salmon + sweet potato + green beans</td>
                    <td className="px-3 py-2 text-muted-foreground">Dinner rolls</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 text-foreground">Spaghetti night</td>
                    <td className="px-3 py-2 text-muted-foreground"><strong>Rummo GF pasta</strong> + meat sauce + side salad</td>
                    <td className="px-3 py-2 text-muted-foreground">Garlic bread</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 text-foreground">Steak night</td>
                    <td className="px-3 py-2 text-muted-foreground">Steak + roasted potato wedges + spinach</td>
                    <td className="px-3 py-2 text-muted-foreground">Onion rings, sauce</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-foreground">Stir-fry</td>
                    <td className="px-3 py-2 text-muted-foreground">Chicken + veg over rice (no sugary sauce)</td>
                    <td className="px-3 py-2 text-muted-foreground">Extra noodles, sweet sauce</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Kids and Picky Eaters */}
            <h3 className="font-semibold text-primary mb-3">Feeding Kids and Picky Eaters</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              <div className="border border-border rounded-lg p-3">
                <p className="text-sm text-muted-foreground"><strong>Rummo gluten-free pasta</strong> genuinely tastes like normal pasta - switch the whole household and save yourself a separate pot.</p>
              </div>
              <div className="border border-border rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Kids love <strong>cooled-then-reheated rice</strong> the same as fresh - your resistant-starch lunch base doubles as their dinner.</p>
              </div>
              <div className="border border-border rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Roasted potato wedges in olive oil beat fries, and kids don&apos;t complain.</p>
              </div>
              <div className="border border-border rounded-lg p-3">
                <p className="text-sm text-muted-foreground"><strong>Hidden win:</strong> cooking with olive oil and butter instead of seed oils upgrades the whole family&apos;s meals with zero pushback.</p>
              </div>
            </div>

            {/* Breakfast and Lunch */}
            <h3 className="font-semibold text-primary mb-3">Breakfast and Lunch With a Busy Household</h3>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>- <strong>Your breakfast is separate and fast</strong> - chia pudding (made the night before) or eggs. It doesn&apos;t interfere with whatever the kids are eating.</li>
              <li>- Make a <strong>double batch of chia pudding</strong> - kids often love it with berries, and it&apos;s a far better breakfast than cereal.</li>
              <li>- <strong>Your lunch is built from last night&apos;s leftovers</strong> (the cooled rice + protein bowl), so you&apos;re not making a separate thing.</li>
            </ul>

            {/* Social Stuff */}
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-4 print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">The Social Stuff: Eating Out, Parties, Holidays</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><strong>Restaurants:</strong> Order protein + cooked veg + rice or potato + olive oil. Skip the bread basket. Ask them to cook in butter or olive oil if you can. Most kitchens will.</li>
                <li><strong>Parties and BBQs:</strong> Fill your plate with the grilled meats, salads, and veg. Skip the buns, chips, and sugary drinks. Bring sparkling water with lime so you&apos;ve always got a drink in hand.</li>
                <li><strong>Holidays:</strong> Eat the turkey, the vegetables, the potatoes. Pass on the bread, the sugary sides, and the dessert (or take three bites and stop). One indulgent meal won&apos;t undo your progress - just return to the plan at the next meal.</li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-4 rounded-lg print:bg-gray-50">
              <p className="text-sm text-muted-foreground">
                <strong>The mindset that makes this stick:</strong> You&apos;re not on a restrictive diet that excludes you from family life. You&apos;re eating <em>real food</em> - meat, vegetables, rice, potatoes, good fats - that happens to be what humans thrived on for thousands of years. Your family can eat exactly what you eat. The only thing you&apos;re skipping is the processed stuff that wasn&apos;t doing any of you any favours.
              </p>
            </div>

            <PageFooter page={11} />
          </div>
        </section>

        {/* Page 12: Build Your Own Meal */}
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
                  <MealRow items={["2-3 eggs", "1/2 avocado", "Sauteed spinach"]} />
                  <MealRow items={["Wild salmon (3-4 oz)", "1 tbsp olive oil", "Cucumber slices"]} />
                  <MealRow items={["Greek yogurt (1/2 cup)", "2 tbsp chia seeds", "10 berries"]} />
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
                  <MealRow items={["Chicken thighs (2)", "Jasmine rice (3/4 cup)", "Roasted red pepper"]} />
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
                Extra-virgin olive oil - Sea salt - Black pepper - Fresh
                lemon/lime - Fresh ginger - Turmeric (with pepper + fat) - Fresh
                herbs (basil, cilantro, parsley) - Garlic-infused oil (early
                weeks)
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">
                Key Reminders
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>
                  - Always drizzle olive oil on your meals (2-4 tbsp/day total)
                </li>
                <li>
                  - Cook-then-cool your rice/potato the day before for resistant
                  starch
                </li>
                <li>
                  - No raw vegetables in Week 1-2 (they&apos;re harder to digest)
                </li>
              </ul>
            </div>

            <PageFooter page={12} />
          </div>
        </section>

        {/* Page 13: Easy Recipes */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Easy Recipes
            </h2>
            <p className="text-muted-foreground mb-6">
              Named, step-by-step, beginner-proof. Start with these, then branch out using the Build Your Own Meal page.
            </p>

            {/* Breakfast Recipes */}
            <h3 className="font-semibold text-primary mb-3">Breakfast</h3>
            
            <div className="border border-border rounded-lg p-4 mb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-foreground">The Classic - Eggs, Avocado & Greens</h4>
                <span className="text-xs text-accent font-medium">6 minutes</span>
              </div>
              <ol className="text-sm text-muted-foreground space-y-1 mb-2">
                <li>1. Heat 1 tbsp olive oil in a pan on medium.</li>
                <li>2. Add a handful of spinach, stir until wilted (1 min).</li>
                <li>3. Crack in 2 eggs, cook to your liking.</li>
                <li>4. Plate with 1/2 a sliced avocado. Salt, pepper, squeeze of lemon.</li>
              </ol>
              <p className="text-xs text-primary font-medium">Take with this meal: 1 butyrate + 1 zinc carnosine + 1 enzyme.</p>
            </div>

            <div className="border border-border rounded-lg p-4 mb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-foreground">The Chia Yogurt Bowl - 4 Ways</h4>
                <span className="text-xs text-accent font-medium">2 min (night before)</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Base (make it the night before):</strong> 1/2 cup plain lactose-free Greek yogurt + 2 tbsp chia seeds + 1/2 cup unsweetened almond milk + 1/4 tsp cinnamon. Stir, cover, refrigerate overnight.
              </p>
              <p className="text-sm text-muted-foreground mb-2">In the morning, pick one:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-2">
                <li><strong>Berry-Almond:</strong> 10 blueberries or strawberries + 1 tbsp sliced almonds</li>
                <li><strong>Coconut-Lime:</strong> 1 tbsp shredded coconut + squeeze of lime + 10 raspberries</li>
                <li><strong>Cocoa-Walnut:</strong> 1 tsp cocoa powder + 1 tbsp chopped walnuts + 5 strawberries</li>
                <li><strong>Lemon-Kiwi:</strong> zest of 1/2 lemon + 1 green kiwi, sliced on top</li>
              </ul>
              <p className="text-xs text-muted-foreground italic">Tip: Add 1 scoop of vanilla protein powder to the base for steadier energy. Add 1/2 tsp psyllium (from Day 13) for extra fibre.</p>
            </div>

            <div className="border border-border rounded-lg p-4 mb-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-foreground">The Quick Protein Bowl</h4>
                <span className="text-xs text-accent font-medium">3 minutes</span>
              </div>
              <p className="text-sm text-muted-foreground">Leftover salmon or chicken from last night + 1/2 avocado + sliced cucumber + olive oil + sea salt. Done.</p>
            </div>

            {/* Lunch Recipes */}
            <h3 className="font-semibold text-primary mb-3">Lunch</h3>
            
            <div className="border border-border rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-foreground mb-2">The Resistant-Starch Bowl (your daily default)</h4>
              <ol className="text-sm text-muted-foreground space-y-1 mb-2">
                <li>1. 1 grilled or leftover chicken thigh.</li>
                <li>2. 1 cup of cooled-then-reheated rice (cooked yesterday).</li>
                <li>3. A handful of roasted carrots.</li>
                <li>4. Drizzle olive oil, add 1/2 a green kiwi on the side.</li>
              </ol>
              <p className="text-xs text-primary font-medium">Take with this meal: 1 enzyme. Walk 10 min after.</p>
            </div>

            <div className="border border-border rounded-lg p-4 mb-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-foreground">The 5-Minute Salmon Plate (no cooking)</h4>
                <span className="text-xs text-accent font-medium">5 minutes</span>
              </div>
              <p className="text-sm text-muted-foreground">1 tin of wild salmon + cooled boiled potato (from prep) + cucumber + a few olives + lemon + olive oil.</p>
            </div>

            {/* Dinner Recipes */}
            <h3 className="font-semibold text-primary mb-3">Dinner</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-foreground text-sm">Salmon, Sweet Potato & Greens</h4>
                  <span className="text-xs text-accent font-medium">25 min</span>
                </div>
                <ol className="text-xs text-muted-foreground space-y-1 mb-2">
                  <li>1. Heat oven to 400F. Bake a sweet potato (or microwave 6-8 min).</li>
                  <li>2. Pan-sear salmon in olive oil, ~4 min per side.</li>
                  <li>3. Saute zucchini in olive oil until tender.</li>
                  <li>4. Plate, drizzle olive oil, sea salt.</li>
                </ol>
                <p className="text-xs text-primary font-medium">Take: 1 butyrate + 1 enzyme. Walk 10 min after.</p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-foreground text-sm">Chicken Thighs, Rice & Roast Veg</h4>
                  <span className="text-xs text-accent font-medium">30 min</span>
                </div>
                <ol className="text-xs text-muted-foreground space-y-1 mb-2">
                  <li>1. Roast 2 chicken thighs at 400F for ~25 min.</li>
                  <li>2. Cook 3/4 cup jasmine rice (make a double batch - cool the extra for lunch).</li>
                  <li>3. Roast carrots and red pepper alongside the chicken.</li>
                  <li>4. Olive oil, salt.</li>
                </ol>
              </div>

              <div className="border border-border rounded-lg p-4 md:col-span-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-foreground text-sm">Steak, Potato Wedges & Spinach</h4>
                  <span className="text-xs text-accent font-medium">25 min</span>
                </div>
                <ol className="text-xs text-muted-foreground space-y-1">
                  <li>1. Cut a potato into wedges, toss in olive oil + salt, roast at 425F for ~20 min.</li>
                  <li>2. Pan-sear steak to your liking, rest 5 min.</li>
                  <li>3. Wilt spinach in the pan with a little butter.</li>
                </ol>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">The Resistant-Starch Rule</h3>
              <p className="text-sm text-muted-foreground">
                For lunch and dinner starches, <strong>cook them the day before and refrigerate.</strong> Reheating the next day is fine - the gut-healing resistant starch stays. This is the whole trick. See Sunday Prep.
              </p>
            </div>

            <PageFooter page={13} />
          </div>
        </section>

        {/* Page 14: Sunday Prep */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Sunday Prep - 45 Minutes For An Easy Week
            </h2>
            <p className="text-muted-foreground mb-6">
              The secret to actually finishing this program: do a little prep once, coast all week. None of this is fancy.
            </p>

            <h3 className="font-semibold text-primary mb-3">The 45-Minute Sunday Routine</h3>
            <div className="space-y-3 mb-6">
              <div className="flex gap-4 items-start border border-border rounded-lg p-4">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-foreground">Cook a big batch of rice (3-4 cups cooked)</p>
                  <p className="text-sm text-muted-foreground">Cool it, store in the fridge. This is your resistant starch for lunches all week.</p>
                  <p className="text-xs text-accent">10 min hands-on</p>
                </div>
              </div>
              <div className="flex gap-4 items-start border border-border rounded-lg p-4">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-foreground">Boil or bake 4-5 potatoes / sweet potatoes</p>
                  <p className="text-sm text-muted-foreground">Cool and refrigerate.</p>
                  <p className="text-xs text-accent">5 min hands-on</p>
                </div>
              </div>
              <div className="flex gap-4 items-start border border-border rounded-lg p-4">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-foreground">Hard-boil 6 eggs</p>
                  <p className="text-sm text-muted-foreground">Instant breakfast or snack.</p>
                  <p className="text-xs text-accent">10 min</p>
                </div>
              </div>
              <div className="flex gap-4 items-start border border-border rounded-lg p-4">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold text-foreground">Wash and chop your cooking greens and veg</p>
                  <p className="text-sm text-muted-foreground">Spinach, kale, carrots, zucchini. Store in containers.</p>
                  <p className="text-xs text-accent">15 min</p>
                </div>
              </div>
              <div className="flex gap-4 items-start border border-border rounded-lg p-4">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                <div>
                  <p className="font-semibold text-foreground">Make 2 chia yogurt bowls</p>
                  <p className="text-sm text-muted-foreground">For the first two mornings.</p>
                  <p className="text-xs text-accent">5 min</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-foreground font-medium mb-6">That&apos;s it. You&apos;ve now removed every excuse for the first half of the week.</p>

            <div className="bg-secondary/50 border-l-4 border-primary p-4 rounded-r-lg mb-6 print:bg-gray-50">
              <h3 className="font-semibold text-foreground mb-2">Why Cooling The Starch Matters</h3>
              <p className="text-sm text-muted-foreground">
                When you cook rice or potato and then cool it, some of the starch transforms into <strong>resistant starch</strong> - a fibre your gut bacteria turn into butyrate (the gut-healing fatty acid from earlier). Reheating it the next day keeps that benefit. Fresh, hot rice doesn&apos;t have it. <strong>Cooked-then-cooled does.</strong> This is why batch cooking on Sunday isn&apos;t just convenient - it&apos;s part of the protocol.
              </p>
            </div>

            <h3 className="font-semibold text-primary mb-3">Keep These On Hand At All Times</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">A dozen eggs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Pre-washed greens</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Tinned wild salmon and sardines (zero-effort protein)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Frozen berries</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Olive oil (use it on everything)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Your 4 supplements, in a visible spot</span>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">Pro Tip</h3>
              <p className="text-sm text-muted-foreground">
                Put your supplements next to your coffee maker or kettle. You&apos;ll never miss the morning dose if it&apos;s sitting where your hands already go.
              </p>
            </div>

            <PageFooter page={14} />
          </div>
        </section>

        {/* Page 15: Swap This For That */}
        <section className="page-break px-6 py-8 md:px-12 md:py-12 print:px-8 print:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-primary border-b-2 border-primary pb-3 mb-4">
              Swap This For That
            </h2>
            <p className="text-muted-foreground mb-6">
              You don&apos;t have to give up your favourites. You just trade them for something that loves your gut back.
            </p>

            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50 print:bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-primary">Instead of This</th>
                    <th className="text-left px-4 py-2 font-semibold text-primary">Reach For This</th>
                  </tr>
                </thead>
                <tbody>
                  <SwapRow from="Toast and jam" to="2 eggs + avocado + sauteed spinach" />
                  <SwapRow from="Cereal and milk" to="Chia yogurt bowl with berries" />
                  <SwapRow from="Bagel with cream cheese" to="Smoked salmon + cucumber + olive oil" />
                  <SwapRow from="Pasta" to="Cooled-then-reheated jasmine rice" />
                  <SwapRow from="Pasta (for occasional pasta nights)" to="Rummo gluten-free pasta - your family won't know the difference" />
                  <SwapRow from="Sandwich for lunch" to="Chicken thigh + cooled rice + roasted carrots" />
                  <SwapRow from="White bread" to="Skip it - add an extra serving of protein" />
                  <SwapRow from="Pizza" to="Salmon + baked potato + cooked greens" />
                  <SwapRow from="Fries" to="Roasted potato wedges in olive oil + sea salt" />
                  <SwapRow from="Apple, pear, banana" to="Green kiwi, blueberries, strawberries" />
                  <SwapRow from="Orange juice" to="A whole orange, or warm lemon water" />
                  <SwapRow from="Vegetable oil" to="Extra-virgin olive oil or avocado oil" />
                  <SwapRow from="Margarine" to="Pasture butter or ghee" />
                  <SwapRow from="Sugary yogurt" to="Plain lactose-free Greek yogurt + berries + chia" />
                  <SwapRow from="Granola bar" to="Handful of walnuts + 1/2 green kiwi" />
                  <SwapRow from="Diet soda" to="Sparkling water + lemon + pinch of sea salt" />
                  <SwapRow from="Beer or wine" to="Sparkling water + lime + a dash of bitters" />
                  <SwapRow from="Coffee with sugar" to="Coffee with cinnamon + splash of coconut milk" />
                  <SwapRow from="Pretzels, crackers" to="Olives, raw nuts, a hard-boiled egg" />
                  <SwapRow from="Ice cream" to="Frozen berries + Greek yogurt + 1 tsp honey" />
                  <SwapRow from="Onion & garlic (early weeks)" to="Garlic-infused olive oil + green onion tops" />
                </tbody>
              </table>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg print:bg-amber-50">
              <h3 className="font-semibold text-foreground mb-2">The One Swap That Changes Everything</h3>
              <p className="text-sm text-muted-foreground">
                Trade your bread/cereal breakfast for protein + fat. If you do nothing else, do this. It flattens your blood sugar for the whole day and kills the mid-morning crash and cravings.
              </p>
            </div>

            <PageFooter page={15} />
          </div>
        </section>

        {/* Page 16: Shopping Lists */}
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

            <PageFooter page={16} />
          </div>
        </section>

        {/* Page 17: Troubleshooting */}
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
                  fix="Ensure it's truly between meals (2+ hours from food)"
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
                  fix="Add 1/4 tsp sea salt to 500ml water mid-morning. It resolves by Day 4-5."
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
                  fix="Check sleep duration (7+ hours), verify you're eating enough protein"
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
                  fix="Stay the course - gut healing takes time. Results often surge in Week 3."
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

            <PageFooter page={17} />
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

function SwapRow({ from, to }: { from: string; to: string }) {
  return (
    <tr className="border-b border-border last:border-b-0">
      <td className="px-4 py-2 text-muted-foreground">{from}</td>
      <td className="px-4 py-2 text-foreground font-medium">{to}</td>
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
