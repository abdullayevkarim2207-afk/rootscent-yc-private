# RootScent Market Research, Pricing, Competition, and Go-to-Market Plan

**Prepared for:** Karim Abdullayev, Co-Founder / Business & Operations  
**Research date:** November 10, 2026  
**Purpose:** A practical founder brief for customer discovery, pilot sales, pricing, competition, and commercialization.

## Executive decision

RootScent should enter the market as an **advisory process-monitoring product**, not as a safety detector and not as a general-purpose “AI nose.” The first offer should be:

> RootScent helps paint, coatings, and adhesive manufacturers identify an unusual airborne chemical pattern during one repeatable production step so an operator can investigate before the batch becomes more expensive.

The first commercial test should be one plant, one line, one approved sampling point, and one recurring abnormality. The first two customers can receive a **$5,000 founding-design-partner pilot** lasting six to eight weeks. This price is intentionally aggressive and must exclude custom integrations, hazardous-location certification, and open-ended engineering. After RootScent has one documented case, the standard pilot should rise to approximately **$10,000–$15,000**.

If the first pilot works, the recommended initial production offer remains:

- Four monitoring nodes: **$6,000**
- Installation and training: **$2,000**
- Monitoring, alerts, model review, and support: **$600 per month**
- First production year: **$15,200**
- Pilot plus first production year: **$20,200**

These are proposed prices to test, not current customer prices or contracted revenue.

## 1. What is known and what is still a hypothesis

### Current founder-reported facts

- RootScent has an early prototype using a Bosch BME690, an ESP32, and a 3D-printed enclosure.
- The team collected different responses from methane and butane in limited room testing.
- RootScent has no paid customer, signed industrial pilot, or industrial performance result yet.
- RootScent is not a certified safety detector.

### Externally supported facts

- Electronic noses, VOC fingerprinting, machine-learning classification, cloud monitoring, and fixed industrial gas detection already exist.
- Bosch itself supports custom gas-classification applications using the BME690 and BME AI-Studio.
- The United States had 1,125 paint/coating manufacturing establishments and 539 adhesive manufacturing establishments in the 2023 County Business Patterns data.
- Texas had 105 paint/coating and 37 adhesive establishments in the same data.
- Electrical equipment installed in a hazardous classified location may need to be intrinsically safe or approved for that specific location and vapor hazard.

### Hypotheses RootScent still has to prove

- A repeatable production abnormality creates a detectable airborne pattern.
- RootScent can detect that pattern early enough to change an operator decision.
- The signal remains useful across temperature, humidity, sensor aging, cleaning cycles, and raw-material changes.
- The customer’s existing instrumentation does not already solve the problem more reliably.
- A plant will pay enough to support installation, validation, support, and future certification costs.

## 2. First customer and buying team

### Ideal first customer profile

The best first customer is not simply any chemical plant. It is a Texas manufacturer with:

- Repeatable batch production.
- At least one recurring out-of-spec condition or process deviation.
- A production step with a plausible VOC-pattern change.
- Batch records or QC results that can label normal and abnormal runs.
- A sampling point in a location approved by plant engineering and EHS.
- A process or production leader who wants to test an advisory tool.
- A problem worth at least several times the pilot price.

The most practical first segments are:

1. Paint and coating manufacturers.
2. Adhesive manufacturers.
3. Specialty chemical blenders with repeatable recipes.

Do not start with broad oil-and-gas safety monitoring. That market increases certification, reliability, procurement, and liability demands before RootScent has validated the underlying process signal.

### People involved in a purchase

| Role | What they care about | RootScent question |
|---|---|---|
| Process engineer | Root cause, process stability, signal quality | Does the signal correspond to a real process change? |
| Production manager | Throughput, downtime, operator workflow | Will this produce a useful warning without distracting operators? |
| Quality manager | Out-of-spec batches, traceability, evidence | Can alerts be matched to batch and QC records? |
| Plant manager | Financial return and operational risk | Does the avoided loss justify the contract? |
| EHS / plant engineering | Installation, classified zones, safe operation | Is the proposed location and equipment allowed? |
| IT / cybersecurity | Connectivity and data access | What leaves the site, how is it secured, and who can see it? |
| Procurement | Price, terms, insurance, vendor readiness | Can RootScent meet the site’s purchasing requirements? |

The recommended first contact is a **process engineer or production manager**. That person can identify the problem and internal data. The team should then identify the plant manager or operations leader who can sponsor a paid pilot and the EHS/engineering person who can approve installation.

## 3. Bottom-up market size

The counts below come from the Census Bureau’s 2023 County Business Patterns files. They count establishments with paid employees, not unique companies and not automatically qualified RootScent buyers.

| Geography | Paint/coatings, NAICS 325510 | Adhesives, NAICS 325520 | Combined |
|---|---:|---:|---:|
| United States | 1,125 | 539 | **1,664** |
| Texas | 105 | 37 | **142** |
| Dallas–Fort Worth MSA | 40 | 20 | **60** |
| Houston MSA | 35 | 10 | **45** |

Source files: [2023 U.S., state, and metro County Business Patterns downloads](https://www2.census.gov/programs-surveys/cbp/datasets/2023/) and the [Census CBP methodology/API guide](https://www.census.gov/data/developers/data-sets/cbp-zbp/cbp-api.2023.html).

The immediate DFW and Houston pool is therefore 105 establishments. This is large enough for focused founder-led discovery, but not every establishment will have a suitable process, budget, or installation location.

### Revenue ceilings, not forecasts

At $600 per month per site, the recurring price is $7,200 per year.

| Scenario | Sites | Illustrative recurring revenue |
|---|---:|---:|
| Entire U.S. entry niche | 1,664 | **$11.98M ARR** |
| Entire Texas entry niche | 142 | **$1.02M ARR** |
| DFW + Houston | 105 | **$756K ARR** |
| First 10 customers | 10 | **$72K ARR** |

These are mathematical ceilings at one subscription per establishment, not a forecast. The narrow entry niche by itself is not a strong venture-scale outcome. Expansion would require more lines per plant, multi-site enterprise accounts, adjacent chemical processes, and higher annual value.

The broader U.S. chemical manufacturing sector, NAICS 325, contained **14,543 establishments** in the same 2023 Census file; Texas contained **1,277**. Those figures describe a possible later market, not qualified current demand.

For context, the American Coatings Association reports $33.2 billion of U.S. paint and coatings producer shipments in 2024, but its broader establishment total also includes stores, wholesalers, and painting contractors. It should not be used as RootScent’s buyer count. [American Coatings Association economic facts](https://www.paint.org/wp-content/uploads/dlm_uploads/2026/03/FACTs-Economic-2026.pdf).

## 4. Competitive landscape

### The closest direct competitors

| Company/product | What it does | Strength | RootScent opening |
|---|---|---|---|
| **Aryballe NeOse / NeOse Advance** | Portable and benchtop odor/VOC fingerprinting, cloud analysis, pass/fail quality workflows | Silicon-photonics platform, odor libraries, industrial workflow, ML and remote monitoring | RootScent must be narrower and operational: continuous monitoring tied to a specific production step and batch decision at a lower starting price |
| **Alpha MOS HERACLES** | Fast-GC electronic nose for lab QC, defect detection, batch consistency, and process monitoring | Mature analytical instrument, reproducible sample handling, customer references | RootScent can attempt in-situ continuous monitoring rather than taking samples to a lab instrument |
| **Sensigent Cyranose 320** | Handheld sensor-array instrument trained on customer-specific vapor profiles | Long history, portable, established pattern-recognition workflow | RootScent can focus on connected, unattended line monitoring and operator alerts rather than handheld sampling |
| **AIRSENSE PEN3** | Commercial portable electronic nose used in research and quality analysis | Established array product and application history | Similar opportunity: process integration and an outcome-specific workflow rather than general odor analysis |
| **Bosch BME690 + AI-Studio** | Commodity sensor and software for custom gas-classification applications | Cheap, compact, developer-accessible; already supports temperature-cycled fingerprints | Supplier and substitute risk. RootScent must add deployment knowledge, validated process labels, integrations, and measured outcomes |

Supporting product sources: [Aryballe product family](https://aryballe.com/our-products/), [Aryballe technology](https://aryballe.com/our-technology/), [Alpha MOS HERACLES](https://www.alpha-mos.com/smell-analysis-heracles-electronic-nose), [Sensigent Cyranose 320](https://www.sensigent.com/cyranose-320.html), and [Bosch BME690](https://www.bosch-sensortec.com/en/products/environmental-sensors/gas-sensors/bme690).

**Most important direct competitive threat:** Aryballe. It publicly describes real-time VOC/odor detection, quality control, production use, cloud data, machine learning, and remote monitoring. RootScent cannot credibly differentiate merely by saying “AI,” “electronic nose,” “cloud,” or “real time.”

### Adjacent industrial safety competitors

Honeywell, MSA, Industrial Scientific, and Blackline Safety sell certified or industrial gas-monitoring equipment. Their core job is detecting known hazardous gases, concentrations, or thresholds and supporting safety/compliance workflows.

- Honeywell Sensepoint XCD configurations publicly sell around the low thousands; one distributor lists a propane configuration at **$2,303**. [Example distributor listing](https://www.bomarkinstruments.com/product-category/gas-detection/fixed-gas-detection/detector-heads/honeywell-detector-heads/sensepoint-xcd/).
- Industrial Scientific’s Radius BZ1 has a public list-price example of **$5,359.20**, with more complex configurations in public price documents reaching roughly $7,500–$12,500. [Radius BZ1 example](https://www.tequipment.net/Industrial-Scientific/series_radius-bz1/).
- Blackline publicly advertises an EXO area monitor plus cloud portal starting at **$180 per month per device**, amortized over four years. [Blackline pricing](https://www.blacklinesafety.com/solutions/services/pricing-plans).

These products are not direct substitutes for process-pattern learning, but they set customer expectations for ruggedness, reliability, installation, calibration, and support. RootScent should never imply it replaces them.

### The biggest competitor is the current workflow

In early sales, the strongest competitor may be:

- Existing PLC or process-control alarms.
- Temperature, pressure, flow, viscosity, pH, or mass measurements.
- Operator observation and smell.
- In-process samples and final QC lab tests.
- Scrap, rework, or blending as an accepted operating cost.
- Doing nothing because failures are too infrequent.

RootScent wins only when it produces a decision earlier or more economically than this combined workflow.

### Public electronic-nose pricing context

Most direct vendors require a quote. A 2024 review describes commercial e-nose systems generally in the **$10,000–$30,000** range. A published study describes the Cyranose 320 at a historical base price of approximately **$9,000–$11,500**. These are useful reference ranges, not current vendor quotes. [2024 review excerpt](https://www.researchgate.net/publication/380878120_Trends_in_Chemical_Sensors_for_Non-Invasive_Breath_Analysis) and [published Cyranose study](https://pmc.ncbi.nlm.nih.gov/articles/PMC7168176/).

## 5. RootScent’s proposed differentiation

The positioning should be:

> Certified detectors ask whether a known gas crosses a safety threshold. Lab e-noses ask whether a sample matches a known odor profile. RootScent aims to ask whether the airborne chemical pattern is unusual for what this production line should be doing at this exact step—and whether an operator should investigate.

The defensible product is not the BME690. Bosch already provides the component and AI tooling. A defensible RootScent product would need five layers:

1. **Process context:** batch, recipe, step, timing, and operating state.
2. **Controlled deployment:** repeatable airflow, placement, maintenance, and environmental correction.
3. **Customer-approved labels:** normal runs, abnormal runs, QC outcomes, and operator notes.
4. **Actionable workflow:** a useful alert, owner, reason to investigate, and feedback loop.
5. **Measured economics:** earlier warning, avoided waste/rework/downtime, uptime, and acceptable false alerts.

This is a differentiation hypothesis. It becomes a competitive advantage only after customers validate it.

## 6. Parts pricing and early bill of materials

### Public component reference prices

Prices were checked on November 10, 2026 and can change. Shipping, tariffs, tax, engineering labor, certification, and tooling are excluded.

| Component | Public low-volume reference | Price |
|---|---|---:|
| Bosch-family gas sensor breakout | Adafruit BME688 STEMMA QT board at DigiKey | **$19.95** |
| BME690 multi-sensor development board | Bosch 8x BME690 shuttle board at DigiKey | **$26.19** |
| ESP32-S3 development board | Espressif board at DigiKey/Mouser | **about $15–$16** |
| Outdoor/NEMA polycarbonate enclosure | Polycase WP-25, quantity 1–9 | **$42.05** |
| Smaller NEMA polycarbonate enclosure | Polycase catalog, depending size | **about $8–$19** |
| 5V/3A chassis supply | Mean Well RS-15-5 at Mouser | **$8.60** before possible tariff |
| 5V/3A DIN-rail supply | Mean Well HDR-30-5 | **$23.85** |
| Cellular development/gateway board | Particle Boron LTE starter kit | **$62.95** |
| Prototype cloud connectivity | Particle free plan, up to 100 devices/100K operations | **$0/month at qualifying usage** |

Sources: [DigiKey BME688 breakout](https://www.digikey.com/en/products/detail/adafruit-industries-llc/5046/14313482), [DigiKey Bosch development board](https://www.digikey.com/en/products/detail/bosch-sensortec/EVALUATION-KIT-BOARD-BME688/14617513), [Espressif ESP32-S3 DevKit](https://www.espressif.com/en/products/devkits/esp32-s3-series/esp32-s3-devkitc-1), [Polycase WP-25](https://www.polycase.com/wp-25), [Mean Well supply search](https://www.mouser.com/c/?mounting+style=Chassis&output+power=15+W&output+voltage-channel+1=5+VDC), [Particle Boron kit](https://store.particle.io/collections/cellular/products/boron-lte-cat-m1-noram-starter-kit-with-ethersim-brn404xkit), and [Particle pricing](https://www.particle.io/pricing/).

Bosch’s BME690 page showed distributor stock as unavailable when researched. That creates a supply risk. RootScent should not design a pilot timeline around BME690 availability without confirming inventory or a qualified alternative.

### Estimated development-node BOM

This is a planning estimate, not a supplier quote.

| Item | Estimated low-volume cost |
|---|---:|
| One gas-sensor breakout | $20–$30 |
| ESP32 development board | $15–$20 |
| Basic enclosure / 3D print | $10–$45 |
| Power supply and protection | $10–$30 |
| Fan or pump and driver for controlled airflow | $25–$75 |
| Tubing, filter, fittings, cable glands | $15–$35 |
| Prototype PCB, wiring, connectors, storage | $25–$70 |
| Mounting and miscellaneous hardware | $15–$30 |
| Assembly and bench test labor | $100–$250 |
| **Estimated development node** | **$235–$555** |

The wide range is intentional. RootScent has not frozen the node architecture, airflow, sensor count, power method, enclosure, connectivity, or installation method.

### Four-node pilot cost model

| Cost category | Planning range |
|---|---:|
| Four assembled development nodes | $940–$2,220 |
| Gateway, spare parts, cables, filters, fixtures | $250–$700 |
| Shipping and Texas travel/installation | $500–$1,500 |
| Founder engineering, setup, monitoring, and analysis | $1,500–$4,000 economic cost |
| Optional external lab/testing support | $0–$3,000+ |
| **Estimated total economic cost** | **$3,190–$11,420+** |

This is why $5,000 must be design-partner pricing, not a promise of normal gross margin. A pilot can be limited to two nodes or customer-funded travel/testing to keep the first project inside the budget.

### Cloud cost is not the main cost

Basic IoT messaging is inexpensive at pilot scale. AWS, for example, gives a 24/7 connection example of roughly $0.042 per device-year before message and storage charges, with messaging around $1 per million in an example region. [AWS IoT Core pricing](https://aws.amazon.com/iot-core/pricing/). The expensive parts of an early industrial pilot are field engineering, installation approval, data labeling, maintenance, travel, and customer support—not raw message transport.

## 7. Safety and deployment boundary

Paint and chemical manufacturing can contain flammable vapors. OSHA identifies paint-finishing and chemical-processing plants as examples of facilities that may contain hazardous classified locations. Equipment in those locations may have to be intrinsically safe or specifically approved for the location and vapor group. [OSHA 29 CFR 1910.307](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.307) and [UL hazardous-location overview](https://www.ul.com/services/ul-and-c-ul-hazardous-areas-certification-north-america).

Therefore the first pilot contract and installation plan should state:

- RootScent is advisory monitoring only.
- Existing required alarms and controls remain in place.
- The plant identifies and approves the sampling point and electrical classification.
- RootScent equipment is installed only where the plant confirms it is permitted.
- Classified-location certification is excluded unless explicitly engineered and contracted.
- No automatic control action is taken from a RootScent alert during the pilot.

This boundary is essential to avoid turning an early process experiment into an unsupported safety claim.

## 8. Recommended pricing

### Offer 1: founding-design-partner pilot

**Price: $5,000** for the first two customers only.

Includes:

- Six to eight weeks.
- One production line.
- One approved sampling point or tightly defined small node set.
- One named process abnormality.
- Baseline collection and advisory alert analysis.
- Final report comparing alerts with available batch, operator, and QC records.

Excludes:

- Hazardous-location certification.
- Replacement of a safety alarm.
- Custom PLC/SCADA integration.
- Unlimited site visits.
- Third-party lab work.
- A guarantee that the event is detectable.

Commercial condition: travel outside an agreed Texas radius, external testing, and customer-requested custom engineering are billed separately or passed through.

### Offer 2: standard pilot after first proof

**Target price: $10,000–$15,000.**

The increase is justified by a better-defined installation, multiple nodes, formal test plan, support, analysis, and documented final results. Credit up to part of the pilot fee toward a production agreement if the customer signs within 30 days.

### Offer 3: first production line

**First year: $15,200**

- Four nodes: $6,000.
- Installation/training: $2,000.
- Monitoring/support: $600 per month.

This price should be quoted as an initial commercial test, not a permanent universal price. After RootScent learns the actual support burden, the recurring fee may need to move toward $750–$1,250 per month per line.

### Value-based qualification

Do not sell from sensor cost. Sell only where the financial problem is large enough.

At a $15,200 first-year price:

- If one incident costs $10,000, the system must help avoid roughly 1.52 incidents per year to break even.
- If one incident costs $20,000, it must help avoid roughly 0.76 incidents.
- If one incident costs $50,000, it must help avoid roughly 0.30 incidents.

This is break-even arithmetic, not a RootScent result. The customer must provide incident frequency, direct cost, and evidence that earlier warning would change the outcome.

## 9. Go-to-market plan

### Phase 1: discover one painful event, weeks 1–4

Karim’s goal is not to pitch the broad vision. It is to document one event.

Targets:

- Build a list of 50 Texas plants.
- Contact 10 people per week.
- Complete 15 discovery conversations.
- Obtain five detailed incident stories.
- Secure two plant walkthroughs.

Required discovery questions:

1. When did a batch last go out of specification?
2. What changed in the process?
3. When and how was it discovered?
4. What measurements existed before QC found it?
5. What did materials, labor, rework, disposal, downtime, and delayed shipment cost?
6. Would a warning 10, 30, or 60 minutes earlier have changed the outcome?
7. Is there a repeatable sampling point and batch record?
8. Who owns this problem and who can approve a paid test?
9. What installation or EHS requirements apply?
10. What result would justify a production purchase?

### Phase 2: convert one problem into a pilot, weeks 3–8

Deliver a two-page pilot proposal containing:

- Named process step and abnormality.
- Plant-approved sampling location.
- Equipment and data flow.
- Baseline and event-labeling plan.
- Six-to-eight-week schedule.
- Customer and RootScent responsibilities.
- Metrics: relevant-event recall, false alerts per line-week, warning time, and uptime.
- $5,000 price and explicit exclusions.
- Advisory/non-safety language.

Do not promise 80% recall or ten minutes of warning as achieved performance. Those can be provisional acceptance targets negotiated with the plant.

### Phase 3: prove a decision, weeks 6–14

The pilot should run parallel to existing systems. RootScent must produce an event table with:

- Timestamp.
- Batch and process step.
- RootScent score/alert.
- Operator observation.
- Existing instrument readings.
- QC result.
- Whether an earlier alert would have changed an action.

The final sales asset is not a sensor chart. It is a case study: problem, signal, lead time, false alerts, uptime, action, and financial value.

### Phase 4: expand inside the account

If the first line works:

1. Convert the pilot to the $15,200 first-year line package.
2. Add a second production line.
3. Add a second site within the same company.
4. Integrate batch identifiers or process-state data.
5. Use the case study to approach similar manufacturers.

Expansion inside a proven account is more credible than immediately entering unrelated industries.

## 10. Texas prospect priorities

These are research targets, not customers or warm leads.

### Priority A: smaller and mid-sized manufacturers

These companies may have shorter decision chains and are appropriate for discovery:

- **Crosslink Paints, Dallas** — manufactures commercial paint and industrial/architectural coatings in a 15,000 sq. ft. facility. [Company description](https://www.crosslinkpaints.com/about-us-crosslink-paints.html).
- **Standard Paints / Wood Defender, Mansfield** — family-owned coatings manufacturing facility. [Company FAQ](https://wooddefender.com/frequently-asked-questions/).
- **GPS Paints, Hurst** — paint manufacturer operating on a 26-acre production site. [Company page](https://www.gpscoatings.com/v2/contenidos/company.php).
- **Preservo Paint & Coatings, Houston** — small-batch paint and coatings manufacturer with explicit QC emphasis. [Company page](https://preservo.com/aboutus.asp).
- **Industrial Coating Specialties, Houston** — manufacturer of paints, primers, enamels, epoxies, and specialty coatings. [Company page](https://www.icscepoxy.com/).
- **Riteks, Houston** — specialty chemical manufacturing facility serving coatings, adhesives, and sealants. [Manufacturing capabilities](https://www.riteks.com/resources/manufacturing-capabilities).
- **Tailored Adhesives, Tyler** — water-based adhesive production and expanding hot-melt/emulsion polymer capacity. [Locations](https://tailoredchemical.com/locations.php).

### Priority B: larger strategic accounts

These may provide larger expansion value but require longer procurement and validation:

- **Sherwin-Williams, Garland** — official manufacturing site for formulated coatings. [Facility page](https://industrial.sherwin-williams.com/na/us/en/packaging/find-location/location-detail.2750%20Locust%20Ave%2C%20Dallas%2C%20TX%2075216%2C%20USA.en_US-10371495-PCG_Manufacturing_GPD.html).
- **Arkema, Fort Worth** — hot-melt and butyl adhesive production. [Facility page](https://www.arkema.com/usa/en/united-states/production-centers/fort-worth-tx-pd/).
- **DuraPRO / IFS Industries, Garland** — multiple adhesive manufacturing facilities. [Footprint](https://durapro.com/footprint).
- **Greif, Atlanta, Texas** — adhesive manufacturing for paper and packaging applications. [Facility page](https://www.greif.com/locations/south-western-adhesives-plant/).
- **Mascoat / Henkel, Houston** — coatings production, R&D, and QC at its flagship facility. [Company page](https://mascoat.henkel-adhesives.com/about.html).

### Outreach message

> Subject: How do you catch a batch problem before final QC?
>
> Hi [Name],
>
> I’m Karim, a co-founder of RootScent. We’re testing whether chemical-pattern monitoring can help paint, coatings, and adhesive manufacturers identify certain batch problems earlier.
>
> We are not selling a safety detector, and we are not assuming the problem is detectable. I’m trying to understand one thing: when a batch goes out of spec, how does your team discover it, and would an earlier warning change the outcome?
>
> Would you be open to a 20-minute conversation? I can share what we are building, but the main goal is to learn how your process works today.
>
> Thanks,  
> Karim Abdullayev  
> Co-Founder, RootScent

## 11. Ninety-day business work plan for Karim

### Days 1–30

- Build and score 50 Texas accounts.
- Identify two relevant people at each account.
- Send 50 personalized messages and make follow-up calls.
- Complete 15 interviews.
- Document five real incidents with frequency, discovery method, and cost categories.
- Ask three budget owners whether they would pay $5,000 for a scoped pilot.

### Days 31–60

- Select one process abnormality with the technical founders.
- Obtain two plant walkthroughs.
- Complete an installation/EHS checklist for each candidate.
- Prepare a two-page scope and data-sharing agreement.
- Ask for a paid pilot, not a vague letter of interest.

### Days 61–90

- Close one paid, site-approved pilot.
- Establish weekly pilot review with the customer.
- Track alerts, labels, uptime, warning time, and false-alert burden.
- Produce a final decision memo and conversion quote.
- If the signal is not useful, document why and change the target problem before expanding sales.

### Weekly founder dashboard

| Metric | Weekly target |
|---|---:|
| New qualified accounts researched | 10 |
| Personalized first contacts | 10–15 |
| Follow-ups | 15–20 |
| Discovery calls | 3–4 |
| Detailed incident records | 1+ |
| Plant walkthroughs | 1 every 2–3 weeks |
| Paid pilot proposals | 1 when qualification is complete |

## 12. Validation and stop conditions

RootScent should not continue selling a use case simply because the technology is interesting.

Proceed when:

- A recurring abnormality has a plausible airborne signature.
- The customer has labeled records and agrees to share them.
- The alert could arrive early enough to change an action.
- The plant approves the installation location.
- The economic value is several times the expected annual price.
- A budget owner will pay for the pilot.

Stop or change the use case when:

- The event is too rare to validate in a reasonable pilot.
- Existing process measurements already detect it earlier.
- Environmental changes overwhelm the signal.
- Required placement is in a classified location RootScent cannot legally or safely serve.
- False alerts would be unacceptable to operators.
- The customer will not provide event labels or QC records.
- The customer says the data is interesting but will not pay.

## Bottom line

Karim’s job is to find the first production problem for which three things are simultaneously true:

1. The abnormality creates a repeatable signal RootScent can detect.
2. The alert arrives early enough for an operator to act.
3. The avoided loss justifies at least a $5,000 pilot and approximately $15,200 for the first production year.

The market contains enough Texas establishments for focused discovery, and competitor pricing shows that industrial customers already pay thousands of dollars for gas and odor instrumentation. However, RootScent’s differentiation is not yet proven. The company should win the first customer through a narrow process-specific experiment, transparent limitations, and a result tied to an operator decision—not through broad claims about AI, fleet learning, or safety.

