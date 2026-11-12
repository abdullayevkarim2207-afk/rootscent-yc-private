# RootScent Market Analysis

**Prepared by:** Karim Abdullayev, Business & Operations  
**Updated:** November 12, 2026

## Market overview

The way I see RootScent is as a digital nose for industrial production. Our system is being developed to learn the normal chemical pattern during a specific manufacturing step and notify an operator when something unusual happens.

Our best starting market is paint, coatings, and adhesive manufacturing. These companies operate repeatable batch processes and care about product consistency, wasted materials, rework, downtime, and quality control. A batch can start moving outside its normal range before final quality testing confirms the problem. If RootScent can provide a useful warning while there is still time to react, then the real value is not just the sensor reading—it is helping the customer make an earlier decision.

We should not enter the market by claiming to be a general-purpose AI gas detector. Several established companies already offer gas detection, VOC monitoring, electronic noses, and chemical-analysis systems. RootScent’s more realistic starting point is one production line, one repeatable process, and one expensive problem that the customer currently discovers too late.

## Target customer and problem

Our ideal first customer is a paint, coatings, adhesive, or specialty-chemical manufacturer with:

- Repeatable batch production.
- A recurring out-of-spec event or process deviation.
- Batch and quality-control records that show what happened.
- A production step where the airborne chemical pattern may change.
- A sampling location approved by plant engineering and EHS.
- A problem expensive enough to justify a paid pilot.

The main users would likely be process engineers, production managers, and quality managers. The plant manager or operations leader would probably make the financial decision. EHS and plant engineering would also need to approve where and how the system is installed.

RootScent would not replace a plant’s current instruments or safety systems. It would add another observation point during production and give the operator an advisory warning to investigate.

## Market size

I used a bottom-up market calculation instead of relying on a broad gas-sensor industry report. The latest available U.S. Census County Business Patterns data shows:

| Market | Establishments | Illustrative recurring revenue at $600/month |
|---|---:|---:|
| U.S. paint/coatings and adhesive manufacturers | 1,664 | $11.98 million ARR |
| Texas | 142 | $1.02 million ARR |
| Dallas–Fort Worth and Houston combined | 105 | $756,000 ARR |
| First 10 customers | 10 | $72,000 ARR |

The 1,664 U.S. establishments include 1,125 paint and coating manufacturers and 539 adhesive manufacturers. These are potential locations, not automatically qualified customers. Some facilities may not have the right problem, budget, data, or approved installation area.

The initial market is large enough to find early customers, but it is probably not large enough by itself to create a major company. The expansion opportunity is important. The broader U.S. chemical-manufacturing sector contains approximately 14,543 employer establishments. RootScent could eventually expand through additional production lines, multiple facilities owned by the same customer, specialty chemicals, resins, polymers, and other repeatable manufacturing processes.

The customer industries are economically significant. The American Coatings Association estimates that the U.S. paint and coatings market was worth $34.1 billion in 2025 and projects approximately $35.3 billion for 2026. RootScent does not need the overall industry to grow rapidly. We need to show that one specific production problem costs the customer enough money to justify our system.

## Competition

RootScent has four main types of competition:

| Category | Examples | How RootScent could be different |
|---|---|---|
| Electronic noses | Aryballe, Alpha MOS, Sensigent, AIRSENSE | Focus on connected monitoring tied to a production step and operator decision |
| Industrial gas and VOC detectors | Honeywell, ION Science, MSA, Industrial Scientific, Blackline | Look for an unusual process pattern instead of only a known gas or fixed threshold |
| High-end analytical systems | FTIR analyzers, online gas chromatography, laboratory GC/MS | Offer a simpler advisory system when full chemical identification is not required |
| Current plant workflow | PLC alarms, existing sensors, operator checks, samples, and final QC | Provide a warning earlier than the current combined process |

Bosch is also both a supplier and a possible substitute. The BME690 sensor and BME AI-Studio already support custom gas classification. This means the sensor alone is not our competitive advantage.

RootScent’s long-term advantage would need to come from:

- Understanding the production process and batch context.
- Reliable installation, controlled airflow, and maintenance.
- Customer-approved data showing normal and abnormal batches.
- Alerts connected to a clear operator action.
- Documented results such as warning time, avoided waste, and fewer false alerts.

Our positioning should be simple: certified detectors ask whether a known hazard has crossed a safety threshold. RootScent is being developed to ask whether the chemical pattern is unusual for what the production line should be doing at that moment.

This is still a hypothesis. We need an industrial pilot before claiming that RootScent performs better than current methods.

## Pricing and business model

I recommend selling RootScent through paid pilots followed by hardware, installation, and recurring monitoring.

### Initial design-partner pilot

**Proposed price: $5,000**

- Six to eight weeks.
- One production line.
- One approved sampling point or small node set.
- One specific process problem.
- Comparison with batch, operator, and QC records.

The first two customers could receive this price because they would help us test and shape the product. The agreement should exclude hazardous-location certification, custom plant-system integrations, unlimited travel, external laboratory work, and any guarantee that the problem will be detectable.

After we document one successful case, a standard pilot could increase to approximately **$10,000–$15,000**.

A possible first production-year package is:

- Four monitoring nodes: $6,000.
- Installation and training: $2,000.
- Monitoring and support: $600 per month.
- Total first year: $15,200.

These prices are proposals to test, not prices customers have already accepted. We should sell based on the cost of the customer’s problem, not the cost of our sensor. If a customer cannot explain what the problem costs or what they would do with an earlier warning, the opportunity is probably not qualified.

## Go-to-market plan

Texas should be our first market because it has 142 paint, coatings, and adhesive establishments and is practical for the founders to visit. We should begin with smaller and mid-sized manufacturers because they may have shorter decision-making processes than large corporations.

During customer conversations, I would ask:

1. When did a batch last go out of specification?
2. How and when did the team discover it?
3. What did it cost in materials, labor, rework, downtime, or delayed delivery?
4. Would an earlier warning have changed what the operator did?
5. What records could confirm whether RootScent detected the right event?
6. Who could approve a paid pilot?

Our first commercial goal should be one paid and site-approved pilot—not a large rollout. The pilot should run beside the customer’s existing systems and measure detection, false alerts, warning time, uptime, and whether the information could change an operator decision.

If the pilot works, we can convert that line into a production contract, add more lines, expand to another facility owned by the customer, and use the results as a case study for similar companies.

## Main risks

The largest risk is whether an early sensor response will remain useful inside a real factory. Temperature, humidity, airflow, contamination, cleaning, sensor aging, and raw-material changes can all affect the signal.

False alerts are another major risk. Operators will stop trusting the product if it warns them too often without identifying a real problem.

Safety and certification also matter. Paint and chemical facilities can contain hazardous classified locations. Our current prototype is not a certified safety detector. Early pilots must be advisory only, operate alongside all required plant systems, and be installed only where the customer confirms the equipment is permitted.

Finally, industrial customers may have long sales cycles, strict vendor requirements, cybersecurity reviews, and concerns about sharing production data. We need to keep the first pilot narrow and easy to evaluate.

## Conclusion

I believe RootScent has a realistic entry market if we remain focused. We do not need to identify every chemical or replace existing plant systems. We need to prove that we can identify one abnormal production pattern early enough for an operator to take useful action.

The first milestone is one paid pilot that shows useful warning time, acceptable false alerts, reliable operation, and financial value for the customer. If we prove that in paint, coatings, or adhesives, we can expand to additional lines, facilities, and other chemical-manufacturing markets.

## Main sources

- [U.S. Census Bureau County Business Patterns](https://www.census.gov/data/developers/data-sets/cbp-zbp/cbp-api.html)
- [American Coatings Association: 2026 industry analysis](https://www.paint.org/the-state-of-the-u-s-paint-and-coatings-industry-2026-geopolitics-on-steroids/)
- [Bosch BME690](https://www.bosch-sensortec.com/en/products/environmental-sensors/gas-sensors/bme690)
- [Aryballe NeOse Advance](https://aryballe.com/our-products/neose-advance/)
- [Alpha MOS electronic nose applications](https://www.alpha-mos.com/frequently-asked-questions)
- [OSHA hazardous-location requirements](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.307)

## Suggestions

1. **Create a professional RootScent email.** We should use an address such as `karim@rootscent.com`, `team@rootscent.com`, or `contact@rootscent.com` for customer outreach, pilot applications, competitions, and partnerships. A company email will look more trustworthy than using a personal Gmail account.

2. **Get the RootScent domain.** We should try to secure `rootscent.com` if it is available. A basic domain normally costs around **$10–$20 per year**, although the actual price depends on availability and the registrar. We should confirm availability before using it in any materials.

3. **Update the website before major outreach.** The website is one of the first things potential customers, investors, and competition reviewers will check after hearing about RootScent. It should clearly explain the customer problem, how the product works, the current prototype, what has and has not been proven, the pilot offer, and how to contact the team using the new RootScent email.
