"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register fonts (using built-in Helvetica for simplicity)
Font.register({
  family: "Helvetica",
  fonts: [
    { src: "Helvetica" },
    { src: "Helvetica-Bold", fontWeight: "bold" },
  ],
});

// Color palette
const colors = {
  primary: "#3d7a4a", // Forest green
  primaryLight: "#e8f5e9",
  accent: "#d4a574", // Warm tan
  accentLight: "#fdf6ed",
  dark: "#2d3b35",
  muted: "#6b7c73",
  white: "#ffffff",
  border: "#d1ddd5",
  highlight: "#fff3cd",
};

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: colors.dark,
    backgroundColor: colors.white,
  },
  coverPage: {
    padding: 48,
    fontFamily: "Helvetica",
    backgroundColor: colors.primaryLight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  coverTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginBottom: 12,
  },
  coverSubtitle: {
    fontSize: 14,
    color: colors.dark,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 1.6,
  },
  coverAuthor: {
    fontSize: 11,
    color: colors.muted,
    textAlign: "center",
    marginTop: 48,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 14,
    marginBottom: 8,
  },
  subsectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.dark,
    marginTop: 10,
    marginBottom: 4,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 6,
    color: colors.dark,
  },
  smallText: {
    fontSize: 9,
    lineHeight: 1.4,
    color: colors.muted,
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 4,
    paddingLeft: 8,
  },
  bullet: {
    width: 12,
    fontSize: 10,
    color: colors.primary,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.4,
  },
  highlightBox: {
    backgroundColor: colors.primaryLight,
    padding: 12,
    borderRadius: 4,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  accentBox: {
    backgroundColor: colors.accentLight,
    padding: 12,
    borderRadius: 4,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  warningBox: {
    backgroundColor: colors.highlight,
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#e6a800",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  gridItem: {
    width: "48%",
    marginBottom: 8,
  },
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    padding: 10,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 4,
  },
  table: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 6,
  },
  tableRowHeader: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    padding: 8,
    backgroundColor: colors.primaryLight,
  },
  tableCell: {
    flex: 1,
    fontSize: 9,
  },
  tableCellHeader: {
    flex: 1,
    fontSize: 10,
    fontWeight: "bold",
    color: colors.primary,
  },
  dayBadge: {
    backgroundColor: colors.primary,
    color: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 9,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  checklistItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    paddingLeft: 4,
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 2,
    marginRight: 8,
  },
  pageNumber: {
    position: "absolute",
    bottom: 24,
    right: 36,
    fontSize: 9,
    color: colors.muted,
  },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 36,
    fontSize: 8,
    color: colors.muted,
  },
  twoColumn: {
    flexDirection: "row",
    gap: 16,
  },
  column: {
    flex: 1,
  },
  supplementCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  supplementName: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 2,
  },
  supplementDose: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.accent,
    marginBottom: 4,
  },
  mealCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 4,
  },
  tag: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    fontSize: 8,
    color: colors.primary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 12,
  },
});

// Helper components
const BulletPoint = ({ children }: { children: string }) => (
  <View style={styles.bulletPoint}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);

const ChecklistItem = ({ children }: { children: string }) => (
  <View style={styles.checklistItem}>
    <View style={styles.checkbox} />
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);

const SupplementCard = ({
  name,
  dose,
  why,
  feelBy,
}: {
  name: string;
  dose: string;
  why: string;
  feelBy: string;
}) => (
  <View style={styles.supplementCard}>
    <Text style={styles.supplementName}>{name}</Text>
    <Text style={styles.supplementDose}>{dose}</Text>
    <Text style={styles.smallText}>{why}</Text>
    <Text style={[styles.smallText, { color: colors.primary, marginTop: 4 }]}>
      Feel it by: {feelBy}
    </Text>
  </View>
);

export function AntiInflammationPDF() {
  return (
    <Document>
      {/* Page 1: Cover */}
      <Page size="A4" style={styles.coverPage}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: colors.accent,
              marginBottom: 16,
              letterSpacing: 3,
            }}
          >
            THE 21-DAY
          </Text>
          <Text style={styles.coverTitle}>Anti-Inflammation</Text>
          <Text style={[styles.coverTitle, { marginTop: -8 }]}>Program</Text>
          <View
            style={{
              height: 3,
              width: 60,
              backgroundColor: colors.accent,
              marginVertical: 20,
            }}
          />
          <Text style={styles.coverSubtitle}>
            Stop Feeling Old. Reduce Inflammation.{"\n"}Feel Lighter in 14 Days.
            Lock It In By Day 21.
          </Text>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 11, color: colors.muted, textAlign: "center" }}>
              A Beginner-Friendly Guide
            </Text>
          </View>
          <Text style={styles.coverAuthor}>
            By Daryl Stubbs, RMT, CAT(C), C.H.N.C.
          </Text>
        </View>
      </Page>

      {/* Page 2: The One-Page Game Plan (KEY HIGHLIGHT PAGE) */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.pageTitle}>Your Daily Game Plan</Text>
        <Text style={styles.smallText}>
          This is your go-to page. Print it. Put it on your fridge.
        </Text>

        <View style={styles.highlightBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>
            Do These 4 Things Every Day
          </Text>
          <BulletPoint>
            Take your 4 supplements (see next page for details)
          </BulletPoint>
          <BulletPoint>Eat 3 meals. No snacks. 12-hour overnight fast.</BulletPoint>
          <BulletPoint>Walk 10 minutes after lunch and after dinner.</BulletPoint>
          <BulletPoint>Sleep 7+ hours. Stop eating 2-3 hours before bed.</BulletPoint>
        </View>

        <Text style={styles.sectionTitle}>Meal Structure</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Breakfast — Protein + Fat</Text>
          <Text style={styles.smallText}>
            No starches. No sugar. Keeps insulin flat. Examples: eggs, salmon, chia yogurt bowl.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Lunch — Protein + Resistant Starch + Cooked Veg</Text>
          <Text style={styles.smallText}>
            Use cooled-then-reheated rice or potato. Feeds your gut bacteria like fibre.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dinner — Protein + Carbs + Cooked Veg</Text>
          <Text style={styles.smallText}>
            Carbs at night raise melatonin, deepen sleep, stop 3 AM cortisol spikes.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Fibre Ramp Schedule</Text>
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableCellHeader}>Days</Text>
            <Text style={[styles.tableCellHeader, { flex: 3 }]}>Add This</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1-3</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              Cooled rice/potato at lunch + cooked carrots & zucchini
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>4-6</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              1 tsp ground flax or chia at breakfast
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>7-9</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              1 green kiwi/day + cooked spinach
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>10-12</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              10 blueberries or strawberries
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>13-15</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              ½ tsp psyllium husk in water at bedtime
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>16-21</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              Increase psyllium to 1 tsp; add one new cooked veg
            </Text>
          </View>
        </View>

        <View style={styles.accentBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>
            What You Will Feel By Day 21
          </Text>
          <Text style={styles.smallText}>
            Less bloating • clearer head • steadier mood • deeper sleep • easier mornings • looser clothes • brighter skin • fewer sugar cravings • less joint stiffness
          </Text>
        </View>

        <Text style={styles.footer}>21-Day Anti-Inflammation Program</Text>
        <Text style={styles.pageNumber}>2</Text>
      </Page>

      {/* Page 3: Supplements */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.pageTitle}>The 4 Supplements</Text>
        <Text style={[styles.text, { marginBottom: 12 }]}>
          These supplements work together to heal your gut, reduce inflammation, and restore energy.
        </Text>

        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <SupplementCard
              name="1. BodyBio Sodium Butyrate"
              dose="1 cap with breakfast + 1 cap with dinner"
              why="Fuels colon cells. Repairs gut lining. Reduces leaky gut and inflammation."
              feelBy="Day 7-10 — Less bloating, calmer gut, clearer head"
            />
            <SupplementCard
              name="2. Seeking Health Zinc Carnosine"
              dose="1 cap with breakfast + 1 cap at bedtime"
              why="Sticks to inflamed gut tissue and slow-releases zinc. Reverses leaky gut in 14 days."
              feelBy="Day 5-7 — Reflux drops, food reactivity softens"
            />
          </View>
          <View style={styles.column}>
            <SupplementCard
              name="3. NOW Foods Super Enzymes"
              dose="1 tablet with first bite of every meal"
              why="Covers acid, protein, fat, and starch digestion. Stops fermentation and bloating."
              feelBy="Day 2-4 — Less heaviness after meals, more energy"
            />
            <SupplementCard
              name="4. Pure Encapsulations NAC + Glycine"
              dose="1 scoop in water, between meals (mid-morning)"
              why="Restores glutathione (master antioxidant). Drops inflammation, improves energy."
              feelBy="Day 10-14 — Steady energy, better mood, clearer skin"
            />
          </View>
        </View>

        <View style={styles.warningBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>Important Notes</Text>
          <BulletPoint>
            Take NAC + Glycine on an empty stomach — food protein competes for absorption
          </BulletPoint>
          <BulletPoint>
            Skip Super Enzymes if: active ulcer, on blood thinners, pineapple/papaya allergy
          </BulletPoint>
          <BulletPoint>
            Sodium Butyrate has 156mg sodium per capsule — reduce if on salt restriction
          </BulletPoint>
        </View>

        <Text style={styles.sectionTitle}>Daily Supplement Schedule</Text>
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableCellHeader}>Time</Text>
            <Text style={[styles.tableCellHeader, { flex: 2 }]}>Take This</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Breakfast</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>
              1 Butyrate + 1 Zinc Carnosine + 1 Super Enzyme
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Mid-Morning</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>1 scoop NAC + Glycine in water</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Lunch</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>1 Super Enzyme</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Dinner</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>1 Butyrate + 1 Super Enzyme</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Bedtime</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>1 Zinc Carnosine</Text>
          </View>
        </View>

        <Text style={styles.footer}>21-Day Anti-Inflammation Program</Text>
        <Text style={styles.pageNumber}>3</Text>
      </Page>

      {/* Page 4: Week 1 Guide */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.pageTitle}>Week 1: Days 1-7</Text>
        <Text style={[styles.text, { marginBottom: 8 }]}>
          Focus: Reset your eating patterns, start supplements, and let your gut begin to calm.
        </Text>

        <View style={styles.highlightBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>
            Week 1 Focus: The Reset Begins
          </Text>
          <Text style={styles.smallText}>
            Days 1-3: Possible mild fatigue, sugar cravings flaring then easing{"\n"}
            Days 4-7: Stool normalizing, reflux quieting, morning stiffness easing
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Daily Checklist — Week 1</Text>
        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <ChecklistItem>Take all 4 supplements per schedule</ChecklistItem>
            <ChecklistItem>Eat protein + fat breakfast (no starch)</ChecklistItem>
            <ChecklistItem>Lunch: protein + cooled rice/potato + veg</ChecklistItem>
            <ChecklistItem>Dinner: protein + carbs + cooked veg</ChecklistItem>
          </View>
          <View style={styles.column}>
            <ChecklistItem>Walk 10 min after lunch</ChecklistItem>
            <ChecklistItem>Walk 10 min after dinner</ChecklistItem>
            <ChecklistItem>Stop eating 3 hours before bed</ChecklistItem>
            <ChecklistItem>Drink 2.5-3L water</ChecklistItem>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Fibre Additions This Week</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Days 1-3</Text>
          <Text style={styles.smallText}>
            Start with cooled-then-reheated rice or potato at lunch + cooked carrots and zucchini
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Days 4-6</Text>
          <Text style={styles.smallText}>
            Add 1 tsp ground flax or chia seeds to your breakfast
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Day 7</Text>
          <Text style={styles.smallText}>
            Add 1 green kiwi per day + introduce cooked spinach to meals
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Sample Day — Week 1</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>7:00 AM</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              2 eggs + ½ avocado + sautéed spinach. Take: Butyrate, Zinc Carnosine, Enzyme
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>10:00 AM</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>NAC + Glycine in water</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>12:30 PM</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              Chicken thigh + cooled rice + roasted carrots. Take: Enzyme. Walk after.
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>6:30 PM</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              Salmon + sweet potato + zucchini. Take: Butyrate, Enzyme. Walk after.
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>9:30 PM</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              Take Zinc Carnosine. Stop eating by now.
            </Text>
          </View>
        </View>

        <View style={styles.warningBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>If You Feel Tired Days 2-3</Text>
          <Text style={styles.smallText}>
            This is normal — your body is shifting from morning carbs to stable fat-burning. Add ¼ tsp sea salt to 500ml water mid-morning. It resolves by Day 4-5.
          </Text>
        </View>

        <Text style={styles.footer}>21-Day Anti-Inflammation Program</Text>
        <Text style={styles.pageNumber}>4</Text>
      </Page>

      {/* Page 5: Week 2 Guide */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.pageTitle}>Week 2: Days 8-14</Text>
        <Text style={[styles.text, { marginBottom: 8 }]}>
          Focus: Build momentum. Your gut is calming, brain fog is lifting, and energy is rising.
        </Text>

        <View style={styles.highlightBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>
            Week 2 Focus: Things Shift
          </Text>
          <Text style={styles.smallText}>
            Brain fog visibly lifts • Skin brighter, less puffy • Clothes loosen at waist • Mood steadier • Sugar cravings noticeably weaker
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Daily Checklist — Week 2</Text>
        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <ChecklistItem>Continue all supplements</ChecklistItem>
            <ChecklistItem>Keep meal structure consistent</ChecklistItem>
            <ChecklistItem>Add fibre per schedule below</ChecklistItem>
            <ChecklistItem>Maintain 12-hour overnight fast</ChecklistItem>
          </View>
          <View style={styles.column}>
            <ChecklistItem>Both post-meal walks (non-negotiable)</ChecklistItem>
            <ChecklistItem>7+ hours sleep</ChecklistItem>
            <ChecklistItem>2.5-3L water daily</ChecklistItem>
            <ChecklistItem>Note energy & mood improvements</ChecklistItem>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Fibre Additions This Week</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Days 8-9</Text>
          <Text style={styles.smallText}>
            Continue: 1 green kiwi/day + cooked spinach. Maintain flax/chia at breakfast.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Days 10-12</Text>
          <Text style={styles.smallText}>
            Add 10 blueberries or strawberries per day (at breakfast or as dessert).
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Days 13-14</Text>
          <Text style={styles.smallText}>
            Start ½ tsp psyllium husk in 8-10 oz water at bedtime. Follow with another glass of water.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Sample Day — Week 2</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>7:00 AM</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              Chia yogurt bowl + 1 tsp flax + 10 blueberries. Supplements as usual.
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>10:00 AM</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>NAC + Glycine in water + 1 green kiwi</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>12:30 PM</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              Tinned salmon + cooled potato + cucumber + olives + olive oil. Walk after.
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>6:30 PM</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              Steak + roasted potato wedges + cooked spinach. Walk after.
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>9:00 PM</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>
              Zinc Carnosine + ½ tsp psyllium in water (from Day 13).
            </Text>
          </View>
        </View>

        <View style={styles.accentBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>Psyllium Tips</Text>
          <Text style={styles.smallText}>
            Stir into 8-10 oz water and drink immediately (it gels fast). Follow with another full glass. With constipation: more water. With loose stools: less water (4-6 oz).
          </Text>
        </View>

        <Text style={styles.footer}>21-Day Anti-Inflammation Program</Text>
        <Text style={styles.pageNumber}>5</Text>
      </Page>

      {/* Page 6: Week 3 Guide */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.pageTitle}>Week 3: Days 15-21</Text>
        <Text style={[styles.text, { marginBottom: 8 }]}>
          Focus: Lock it in. Your new patterns are becoming habits. Maximize results.
        </Text>

        <View style={styles.highlightBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>
            Week 3 Focus: It Locks In
          </Text>
          <Text style={styles.smallText}>
            Waking refreshed, often before alarm • Food reactivity dropping fast • Steady energy 9 AM → 9 PM • Joint aches reduced • People around you start commenting on how you look • Sugar no longer runs your day
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Daily Checklist — Week 3</Text>
        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <ChecklistItem>Continue all supplements</ChecklistItem>
            <ChecklistItem>Increase psyllium to 1 tsp (Day 16)</ChecklistItem>
            <ChecklistItem>Add one new cooked vegetable</ChecklistItem>
            <ChecklistItem>Maintain all meal structures</ChecklistItem>
          </View>
          <View style={styles.column}>
            <ChecklistItem>Keep both post-meal walks</ChecklistItem>
            <ChecklistItem>Notice: how do you feel vs Day 1?</ChecklistItem>
            <ChecklistItem>Plan your post-Day 21 strategy</ChecklistItem>
            <ChecklistItem>Celebrate your progress!</ChecklistItem>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Fibre Additions This Week</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Days 15-16</Text>
          <Text style={styles.smallText}>
            Continue ½ tsp psyllium. If no bloating, increase to 1 tsp on Day 16.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Days 17-21</Text>
          <Text style={styles.smallText}>
            Add one new cooked vegetable you haven&apos;t tried yet: asparagus, bok choy, butternut squash, or green beans.
          </Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>After Day 21: What Next?</Text>
        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>If You Feel Great</Text>
              <BulletPoint>Reintroduce one food group every 4 days</BulletPoint>
              <BulletPoint>Start with oats, then fruit, then sourdough</BulletPoint>
              <BulletPoint>Keep 12-hour overnight fast forever</BulletPoint>
              <BulletPoint>Keep post-meal walks (non-negotiable)</BulletPoint>
              <BulletPoint>Continue supplements 6-8 more weeks</BulletPoint>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>If You&apos;re Stalled</Text>
              <BulletPoint>Consider GI-MAP stool test</BulletPoint>
              <BulletPoint>Consider SIBO breath test</BulletPoint>
              <BulletPoint>Track which foods still trigger symptoms</BulletPoint>
              <BulletPoint>Consult with a practitioner</BulletPoint>
            </View>
          </View>
        </View>

        <View style={styles.accentBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>Remember</Text>
          <Text style={styles.smallText}>
            The habits you&apos;ve built are more important than the supplements. The 12-hour fast, post-meal walks, protein-forward breakfasts, and reduced processed foods will serve you for life. The supplements are training wheels — eventually your gut will do the work on its own.
          </Text>
        </View>

        <Text style={styles.footer}>21-Day Anti-Inflammation Program</Text>
        <Text style={styles.pageNumber}>6</Text>
      </Page>

      {/* Page 7: Build Your Own Meal */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.pageTitle}>Build Your Own Meal</Text>
        <Text style={[styles.text, { marginBottom: 12 }]}>
          You don&apos;t need rigid meal plans. Pick one item from each column to build a balanced anti-inflammatory meal.
        </Text>

        <Text style={styles.sectionTitle}>Breakfast Formula: Protein + Fat</Text>
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableCellHeader}>Pick a Protein</Text>
            <Text style={styles.tableCellHeader}>Pick a Fat</Text>
            <Text style={styles.tableCellHeader}>Optional Add-On</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>2-3 eggs</Text>
            <Text style={styles.tableCell}>½ avocado</Text>
            <Text style={styles.tableCell}>Sautéed spinach</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Wild salmon (3-4 oz)</Text>
            <Text style={styles.tableCell}>1 tbsp olive oil</Text>
            <Text style={styles.tableCell}>Cucumber slices</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Greek yogurt (½ cup)</Text>
            <Text style={styles.tableCell}>2 tbsp chia seeds</Text>
            <Text style={styles.tableCell}>10 berries</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Turkey slices (3-4 oz)</Text>
            <Text style={styles.tableCell}>Handful of walnuts</Text>
            <Text style={styles.tableCell}>1 tsp flax seeds</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Lunch Formula: Protein + Resistant Starch + Cooked Veg</Text>
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableCellHeader}>Pick a Protein</Text>
            <Text style={styles.tableCellHeader}>Pick a Starch</Text>
            <Text style={styles.tableCellHeader}>Pick a Vegetable</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Chicken thigh</Text>
            <Text style={styles.tableCell}>Cooled rice (1 cup)</Text>
            <Text style={styles.tableCell}>Roasted carrots</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Tinned salmon</Text>
            <Text style={styles.tableCell}>Cooled potato</Text>
            <Text style={styles.tableCell}>Cooked zucchini</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Grass-fed beef</Text>
            <Text style={styles.tableCell}>Cooled sweet potato</Text>
            <Text style={styles.tableCell}>Green beans</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Sardines</Text>
            <Text style={styles.tableCell}>Green plantain</Text>
            <Text style={styles.tableCell}>Cooked spinach</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Dinner Formula: Protein + Carbs + Cooked Veg</Text>
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableCellHeader}>Pick a Protein</Text>
            <Text style={styles.tableCellHeader}>Pick a Carb</Text>
            <Text style={styles.tableCellHeader}>Pick a Vegetable</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Wild salmon (5-6 oz)</Text>
            <Text style={styles.tableCell}>Baked sweet potato</Text>
            <Text style={styles.tableCell}>Cooked kale</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Chicken thighs (2)</Text>
            <Text style={styles.tableCell}>Jasmine rice (¾ cup)</Text>
            <Text style={styles.tableCell}>Roasted red pepper</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Steak (4-6 oz)</Text>
            <Text style={styles.tableCell}>Roasted potato wedges</Text>
            <Text style={styles.tableCell}>Cooked spinach</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Turkey breast</Text>
            <Text style={styles.tableCell}>Butternut squash</Text>
            <Text style={styles.tableCell}>Asparagus</Text>
          </View>
        </View>

        <View style={styles.accentBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>Flavor Boosters (Use Freely)</Text>
          <Text style={styles.smallText}>
            Extra-virgin olive oil • Sea salt • Black pepper • Fresh lemon/lime • Fresh ginger • Turmeric (with pepper + fat) • Fresh herbs (basil, cilantro, parsley) • Garlic-infused oil (early weeks)
          </Text>
        </View>

        <View style={styles.warningBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>Key Reminders</Text>
          <BulletPoint>Always drizzle olive oil on your meals (2-4 tbsp/day total)</BulletPoint>
          <BulletPoint>Cook-then-cool your rice/potato the day before for resistant starch</BulletPoint>
          <BulletPoint>No raw vegetables in Week 1-2 (they&apos;re harder to digest)</BulletPoint>
        </View>

        <Text style={styles.footer}>21-Day Anti-Inflammation Program</Text>
        <Text style={styles.pageNumber}>7</Text>
      </Page>

      {/* Page 8: Shopping Lists */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.pageTitle}>Shopping Lists</Text>
        <Text style={[styles.text, { marginBottom: 8 }]}>
          Stock your kitchen with these anti-inflammatory essentials. Check off as you shop.
        </Text>

        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>Proteins</Text>
            <ChecklistItem>Wild salmon (fresh or tinned)</ChecklistItem>
            <ChecklistItem>Sardines (tinned)</ChecklistItem>
            <ChecklistItem>Pasture-raised eggs (2 dozen)</ChecklistItem>
            <ChecklistItem>Chicken thighs (organic)</ChecklistItem>
            <ChecklistItem>Grass-fed beef or steak</ChecklistItem>
            <ChecklistItem>Turkey breast</ChecklistItem>
            <ChecklistItem>Bone broth (32 oz)</ChecklistItem>

            <Text style={styles.sectionTitle}>Fats & Oils</Text>
            <ChecklistItem>Extra-virgin olive oil (large bottle)</ChecklistItem>
            <ChecklistItem>Avocados (4-6)</ChecklistItem>
            <ChecklistItem>Avocado oil</ChecklistItem>
            <ChecklistItem>Ghee or pasture butter</ChecklistItem>
            <ChecklistItem>Raw walnuts</ChecklistItem>
            <ChecklistItem>Raw almonds</ChecklistItem>
            <ChecklistItem>Tahini</ChecklistItem>

            <Text style={styles.sectionTitle}>Dairy (Lactose-Free)</Text>
            <ChecklistItem>Greek yogurt (plain, lactose-free)</ChecklistItem>
            <ChecklistItem>Kefir (plain, if tolerated)</ChecklistItem>
            <ChecklistItem>Almond milk (unsweetened)</ChecklistItem>
          </View>
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>Vegetables</Text>
            <ChecklistItem>Carrots</ChecklistItem>
            <ChecklistItem>Zucchini</ChecklistItem>
            <ChecklistItem>Spinach (for cooking)</ChecklistItem>
            <ChecklistItem>Kale (for cooking)</ChecklistItem>
            <ChecklistItem>Cucumber</ChecklistItem>
            <ChecklistItem>Red bell pepper</ChecklistItem>
            <ChecklistItem>Green beans</ChecklistItem>
            <ChecklistItem>Asparagus</ChecklistItem>
            <ChecklistItem>Butternut squash</ChecklistItem>
            <ChecklistItem>Olives</ChecklistItem>

            <Text style={styles.sectionTitle}>Starches</Text>
            <ChecklistItem>Jasmine or basmati rice</ChecklistItem>
            <ChecklistItem>White potatoes</ChecklistItem>
            <ChecklistItem>Sweet potatoes</ChecklistItem>
            <ChecklistItem>Green plantains</ChecklistItem>

            <Text style={styles.sectionTitle}>Fruits</Text>
            <ChecklistItem>Green kiwis (7-14)</ChecklistItem>
            <ChecklistItem>Blueberries</ChecklistItem>
            <ChecklistItem>Strawberries</ChecklistItem>
            <ChecklistItem>Raspberries</ChecklistItem>
            <ChecklistItem>Lemons/Limes</ChecklistItem>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>Seeds & Fibre</Text>
            <ChecklistItem>Chia seeds</ChecklistItem>
            <ChecklistItem>Ground flax seeds</ChecklistItem>
            <ChecklistItem>Psyllium husk (whole)</ChecklistItem>
            <ChecklistItem>Hemp seeds</ChecklistItem>
            <ChecklistItem>Pumpkin seeds</ChecklistItem>
          </View>
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>Pantry</Text>
            <ChecklistItem>Garlic-infused olive oil</ChecklistItem>
            <ChecklistItem>Fresh ginger</ChecklistItem>
            <ChecklistItem>Turmeric powder</ChecklistItem>
            <ChecklistItem>Black pepper</ChecklistItem>
            <ChecklistItem>Sea salt</ChecklistItem>
            <ChecklistItem>Cinnamon</ChecklistItem>
            <ChecklistItem>Herbal teas</ChecklistItem>
          </View>
        </View>

        <View style={styles.highlightBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>
            The 4 Supplements (Order These)
          </Text>
          <View style={styles.twoColumn}>
            <View style={styles.column}>
              <ChecklistItem>BodyBio Sodium Butyrate (600mg)</ChecklistItem>
              <ChecklistItem>Seeking Health Zinc Carnosine</ChecklistItem>
            </View>
            <View style={styles.column}>
              <ChecklistItem>NOW Foods Super Enzymes</ChecklistItem>
              <ChecklistItem>Pure Encapsulations NAC + Glycine</ChecklistItem>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>21-Day Anti-Inflammation Program</Text>
        <Text style={styles.pageNumber}>8</Text>
      </Page>

      {/* Page 9: Troubleshooting Cheat Sheet */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.pageTitle}>Quick Troubleshooting</Text>
        <Text style={[styles.text, { marginBottom: 8 }]}>
          Common issues and their fixes. Reference this page when something feels off.
        </Text>

        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>Gut Issues</Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Constipated?</Text>
              <Text style={styles.smallText}>
                • 200-400mg magnesium citrate at bedtime{"\n"}
                • 1 green kiwi morning AND evening{"\n"}
                • Walk 10 min after every meal{"\n"}
                • Drink more water (most constipation = dehydration)
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Loose Stools?</Text>
              <Text style={styles.smallText}>
                • Keep psyllium but use LESS water (4-6 oz){"\n"}
                • Drop butyrate to 1 cap/day{"\n"}
                • Add: white rice, boiled carrots, bone broth{"\n"}
                • Skip raw veg and high-fat meals 48 hours
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Bloated?</Text>
              <Text style={styles.smallText}>
                • You added fibre too fast — go back one step{"\n"}
                • Drop psyllium until things calm{"\n"}
                • Walk after every meal{"\n"}
                • If worse on rice/starch → consider SIBO test
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Acid Reflux?</Text>
              <Text style={styles.smallText}>
                • Stop eating 3 hours before bed{"\n"}
                • Take zinc carnosine with small amount of food{"\n"}
                • Skip coffee for 5 days{"\n"}
                • Sleep on left side, elevate head 4 inches
              </Text>
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>Supplement Issues</Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Nausea from Butyrate?</Text>
              <Text style={styles.smallText}>
                • Always take WITH food (never empty stomach){"\n"}
                • Drop to 1 cap/day for 5 days{"\n"}
                • Pair with fat (olive oil, avocado)
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Nausea from Zinc Carnosine?</Text>
              <Text style={styles.smallText}>
                • Always take with small amount of food{"\n"}
                • Drop to 1 cap/day (morning) for a week
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Headache from NAC + Glycine?</Text>
              <Text style={styles.smallText}>
                • Drink more water (NAC pulls toxins){"\n"}
                • Move to mid-afternoon{"\n"}
                • Drop to ½ scoop for 5 days
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Energy & Mood</Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Tired Days 1-3?</Text>
              <Text style={styles.smallText}>
                Normal. Add ¼ tsp sea salt in 500ml water mid-morning. Resolves by Day 4-5.
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Crashing After Lunch?</Text>
              <Text style={styles.smallText}>
                Walk 10 min after eating. Add more protein/fat, less starch. Drink water.
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Sleep Got Worse?</Text>
              <Text style={styles.smallText}>
                Add MORE carbs at dinner. Cut coffee after 11 AM. 200-400mg magnesium glycinate at bedtime.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.accentBox}>
          <Text style={[styles.subsectionTitle, { marginTop: 0 }]}>Golden Rules</Text>
          <Text style={styles.smallText}>
            Bloated? Hold at previous fibre step for 3 more days. • Skipped a day of supplements? Don&apos;t double up — just restart tomorrow. • When in doubt: more water, more walking, more sleep.
          </Text>
        </View>

        <Text style={styles.footer}>21-Day Anti-Inflammation Program</Text>
        <Text style={styles.pageNumber}>9</Text>
      </Page>
    </Document>
  );
}
