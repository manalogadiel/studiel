import { qmGurusCards } from "./qmGurusCards";
import { emergingTrendsCards } from "./emergingTrendsCards";
import { qmChapter1Cards } from "./qmChapter1Cards";
import { qmChapter1V2Cards } from "./qmChapter1V2Cards";
import { mobileComputingCards } from "./mobileComputingCards";
import { automataTheoryCards } from "./automataTheoryCards";
import { it321Cards } from "./it321Cards";
import { it321ReviewerCards } from "./it321ReviewerCards";

export type Flashcard = {
  id: number;
  term: string;
  definition: string;
};

export type Subject = {
  id: string;
  name: string;
  code?: string;
  description?: string;
  isCustom?: boolean;
  cards: Flashcard[];
};

export {
  qmGurusCards,
  emergingTrendsCards,
  qmChapter1Cards,
  qmChapter1V2Cards,
  mobileComputingCards,
  automataTheoryCards,
  it321Cards,
  it321ReviewerCards,
};

export const envCards: Flashcard[] = [
  { id: 1, term: "Surface Water", definition: "Is fresh water on Earth's land surface. Surface water is found in lakes, rivers, streams, and wetlands." },
  { id: 2, term: "River system", definition: "Streams and rivers move across the land and form a flowing network of water." },
  { id: 3, term: "Watersheds", definition: "The area of land that is drained by a river." },
  { id: 4, term: "Ground water", definition: "Water stored beneath the Earth's surface in sediment and rock formations." },
  { id: 5, term: "Water table", definition: "A level where the rocks and soil are saturated with water." },
  { id: 6, term: "Aquifer", definition: "An underground formation that contains groundwater." },
  { id: 7, term: "Porosity", definition: "The amount of space between the particles that make up a rock." },
  { id: 8, term: "Permeability", definition: "The ability of rock or soil to allow water to flow through it." },
  { id: 9, term: "Recharge Zone", definition: "The area of the Earth's surface where water percolates down into the aquifer." },
  { id: 10, term: "Wells", definition: "A hole that is dug or drilled to reach groundwater." },
  { id: 11, term: "Water treatment", definition: "The process that removes elements such as mercury, arsenic, and lead, which are poisonous to humans even in low concentrations." },
  { id: 12, term: "Irrigation", definition: "A method of providing plants with water from sources other than direct precipitation." },
  { id: 13, term: "Dam", definition: "A structure built across a river to control the river's flow." },
  { id: 14, term: "Drip irrigation systems", definition: "Deliver small amounts of water directly to plant roots by using perforated tubing." },
  { id: 15, term: "Desalination", definition: "The process of removing salt from salt water." },
  { id: 16, term: "Water Pollution", definition: "The introduction of chemical, physical, or biological agents into water that degrade water quality and adversely affect the organisms that depend on the water." },
  { id: 17, term: "Waste water", definition: "Water that contains waste from homes or industry." },
  { id: 18, term: "Artificial Eutrophication", definition: "Eutrophication caused by humans." },
  { id: 19, term: "Biomagnification", definition: "The accumulation of pollutants at successive levels of the food chain." },
  { id: 20, term: "Primary Pollutant", definition: "A pollutant that is put directly into the air by human activity." },
  { id: 21, term: "Secondary Pollutant", definition: "Forms when a primary pollutant comes into contact with other primary pollutants or with naturally occurring substances such as water vapor and a chemical reaction takes place." },
  { id: 22, term: "Zero-emission vehicles", definition: "Vehicles that have no tailpipe emissions, no emissions from gasoline, and no emission-control systems that deteriorate over time." },
  { id: 23, term: "Scrubber", definition: "A machine that moves gases through a spray of water that dissolves many pollutants." },
  { id: 24, term: "Smog", definition: "Produced when air pollution hangs over urban areas and reduces visibility." },
  { id: 25, term: "Sick-building syndrome", definition: "Most common in hot places where buildings are tightly sealed to keep out the heat." },
  { id: 26, term: "Radon", definition: "One of the elements produced by the decay of uranium, a radioactive element that occurs naturally in the Earth's crust." },
  { id: 27, term: "Decibels", definition: "A measurement unit to measure the intensity of sound." },
  { id: 28, term: "Acid Precipitation", definition: "Precipitation such as rain, sleet, or snow that contains a high concentration of acids." },
  { id: 29, term: "pH (power of hydrogen)", definition: "A number that is a measure of how acidic or basic a substance is." },
  { id: 30, term: "Acid shock", definition: "The sudden influx of acidic water that causes a rapid change in the water's pH." },
  { id: 31, term: "Climate", definition: "The long-term prevailing weather conditions at a particular place based upon records taken." },
  { id: 32, term: "Latitude", definition: "The distance from the equator measured in degrees north or south of the equator." },
  { id: 33, term: "Wind", definition: "The movement of air within the atmosphere." },
  { id: 34, term: "Prevailing Winds", definition: "Winds that blow predominantly in one direction throughout the year." },
  { id: 35, term: "Trade winds", definition: "Belts of prevailing winds are produced in both hemispheres between 30° north and south latitude and the equator." },
  { id: 36, term: "El Niño", definition: "The name given to the short-term (generally 6- to 18-month period), periodic change in the location of warm and cold water masses in the Pacific Ocean. During an El Niño, winds in the western Pacific Ocean, which are usually weak, strengthen and push warm water eastward." },
  { id: 37, term: "La Niña", definition: "The water in the eastern Pacific Ocean is cooler than usual. El Niño and La Niña are opposite phases of the ENSO cycle; El Niño is the warm phase and La Niña is the cold phase." },
  { id: 38, term: "Pacific Decadal Oscillation", definition: "A long-term, 20- to 30-year change in the location of warm and cold water masses in the Pacific Ocean." },
  { id: 39, term: "Solar maximum", definition: "The sun emits an increased amount of ultraviolet (UV) radiation. UV radiation produces more ozone." },
  { id: 40, term: "Ozone layer", definition: "An area in the stratosphere where ozone is highly concentrated." },
  { id: 41, term: "Polar vortex", definition: "During the dark polar winter, strong circulating winds over Antarctica isolate cold air from surrounding warmer air." },
  { id: 42, term: "Greenhouse effect", definition: "The process of heat absorption." },
  { id: 43, term: "Greenhouse gases", definition: "The gases that do absorb and radiate heat." },
  { id: 44, term: "Global Warming", definition: "The predicted increase in global temperature." },
  { id: 45, term: "Kyoto Protocol", definition: "Requires developed countries to decrease emissions of carbon dioxide and other greenhouse gases." },
  { id: 46, term: "Urban", definition: "Land that is covered mainly with buildings and roads." },
  { id: 47, term: "Rural", definition: "Land that contains relatively few people and large areas of open space." },
  { id: 48, term: "Ecosystem Services", definition: "The resources that are produced by natural and artificial ecosystems." },
  { id: 49, term: "Urbanization", definition: "The movement of people from rural areas to cities." },
  { id: 50, term: "Infrastructure", definition: "All of the things that a society builds for public use." },
  { id: 51, term: "Urban Sprawl", definition: "Rapid expansion of a city into the countryside around the city." },
  { id: 52, term: "Land-use planning", definition: "Determining in advance how land will be used—where houses, businesses, and factories will be built, where land will be protected for recreation, and so on." },
  { id: 53, term: "Geographic information system", definition: "A computerized system for storing, manipulating, and viewing geographic data." },
  { id: 54, term: "Open space", definition: "Land within urban areas that is set aside for scenic and recreational enjoyment." },
  { id: 55, term: "Greenbelts", definition: "Open spaces left in their natural condition." },
  { id: 56, term: "Farmland", definition: "Land that is used to grow crops and fruit." },
  { id: 57, term: "Rangeland", definition: "Land that supports different vegetation types like grasslands, shrublands, and deserts and that is not used for farming or timber production." },
  { id: 58, term: "Clear-cutting", definition: "The process of removing all of the trees from an area of land." },
  { id: 59, term: "Selective cutting", definition: "The process of cutting and removing only middle-aged or mature trees." },
  { id: 60, term: "Deforestation", definition: "The clearing of trees from an area without replacing them." },
  { id: 61, term: "Reforestation", definition: "The process by which trees are planted to re-establish trees that have been cut down in a forest land." },
  { id: 62, term: "Wilderness", definition: "An area in which the land and the ecosystems it supports are protected from all exploitation." },
  { id: 63, term: "Famine", definition: "Widespread starvation caused by a shortage of food." },
  { id: 64, term: "Malnutrition", definition: "A condition that occurs when people do not consume enough Calories or do not eat a sufficient variety of foods to fulfill all of the body's needs." },
  { id: 65, term: "Drought", definition: "A prolonged period during which rainfall is below average." },
  { id: 66, term: "Fertile Soils", definition: "Soil that can support the growth of healthy plants." },
  { id: 67, term: "Chemical weathering", definition: "The minerals in the rock react chemically with substances such as water to form new materials." },
  { id: 68, term: "Erosion", definition: "The wearing away of rock or soil by wind and water." },
  { id: 69, term: "Land degradation", definition: "Happens when human activity or natural processes damage the land so that it can no longer support the local ecosystem." },
  { id: 70, term: "Desertification", definition: "The process by which land in arid or semiarid areas becomes more desert-like because of human activity or climatic changes." },
  { id: 71, term: "Compost", definition: "Partly decomposed organic material." },
  { id: 72, term: "Salinization", definition: "The accumulation of salts in the soil." },
  { id: 73, term: "Pesticides", definition: "Chemicals used to kill insects, weeds, and other crop pests." },
  { id: 74, term: "Pest", definition: "Any organism that occurs where it is not wanted or that occurs in large enough numbers to cause economic damage." },
  { id: 75, term: "Biological pest control", definition: "The use of living organisms to control pests." },
  { id: 76, term: "Pathogens", definition: "Organisms that cause disease." },
  { id: 77, term: "Pheromones", definition: "Chemicals produced by one organism that affect the behavior of another organism, can also be used in pest control." },
  { id: 78, term: "Integrated pest management", definition: "A modern method of controlling pests on crops." },
  { id: 79, term: "Genetic Engineering", definition: "The technology in which genetic material in a living cell is modified for medical or industrial use." },
  { id: 80, term: "Overharvesting", definition: "Catching or removing from a population more organisms than the population can replace." },
  { id: 81, term: "Sustainable Agriculture", definition: "Farming that conserves natural resources and helps keep the land productive." },
  { id: 82, term: "Aquaculture", definition: "The raising of aquatic organisms for human use or consumption." },
  { id: 83, term: "Livestock", definition: "Domesticated animals that are raised to be used on a farm or ranch or to be sold for profit." },
  { id: 84, term: "Surface mining", definition: "Methods are used when ore deposits are located close to Earth's surface." },
  { id: 85, term: "Open-pit mining", definition: "A method that is often used when large quantities of near-surface ore are mined." },
  { id: 86, term: "Smelting", definition: "Crushed ore is melted at high temperatures in furnaces to separate impurities from molten metal." },
  { id: 86.1, term: "Dump", definition: "Excess rock from mines is sometimes dumped into large piles." },
  { id: 87, term: "Subsidence", definition: "The sinking of regions of the ground with little or no horizontal movement." },
  { id: 88, term: "Reclamation", definition: "The process of returning land to its original or better condition after mining is completed." },
  { id: 89, term: "Fossil Fuels", definition: "The remains of ancient organisms that changed into coal, oil, or natural gas." },
  { id: 90, term: "Electric generator", definition: "A machine that converts mechanical energy, or motion, into electrical energy." },
  { id: 91, term: "Turbine", definition: "A wheel that changes the force of a moving gas or a liquid into energy that can do work. In most power plants, water is boiled to produce the steam that turns the turbine." },
  { id: 92, term: "Oil Reserves", definition: "Oil deposits that can be extracted profitably at current prices using current technology." },
  { id: 93, term: "Nuclear energy", definition: "The energy within the nucleus of an atom." },
  { id: 94, term: "Nuclear Fission", definition: "Collisions cause the nuclei to split." },
  { id: 95, term: "Nuclear Fusion", definition: "Occurs when lightweight atomic nuclei combine to form a heavier nucleus and release tremendous amounts of energy." },
  { id: 96, term: "Renewable Energy", definition: "Energy from sources that are constantly being formed." },
  { id: 97, term: "Alternative Energy", definition: "Describes energy sources that are still in development." },
  { id: 98, term: "Tides", definition: "The movement of water in the oceans and seas caused by gravitational attraction between the sun, Earth, and moon." },
  { id: 99, term: "Energy Efficiency", definition: "The percentage of energy put into a system that does useful work." },
  { id: 100, term: "Cogeneration", definition: "The production of two useful forms of energy from the same fuel source." },
  { id: 101, term: "Solid waste", definition: "Any discarded solid material." },
  { id: 102, term: "Biodegradable material", definition: "Can be broken down by biological processes." },
  { id: 103, term: "Nonbiodegradable material", definition: "Cannot be broken down by biological processes." },
  { id: 104, term: "Active Solar Heating", definition: "Energy from the sun can be gathered by collectors and used to heat water or to heat a building." },
  { id: 105, term: "Biomass Fuel", definition: "Plant material, manure, and any other organic matter that is used as an energy source." },
  { id: 106, term: "Hydroelectric Energy", definition: "Energy produced from moving water. It is a renewable resource that accounts for about 20 percent of the world's electricity." },
  { id: 107, term: "Geothermal Energy", definition: "The energy from heat in the Earth's crust." },
  { id: 108, term: "Landfill", definition: "A permanent waste-disposal facility where wastes are put in the ground and covered each day with a layer of soil, plastic, or both." },
  { id: 109, term: "Leachate", definition: "A liquid that has passed through compacted solid waste in a landfill." },
  { id: 110, term: "Source Reduction", definition: "Any change in design, manufacture, purchase, or use of materials or products to reduce their amount or toxicity before they become municipal solid waste." },
  { id: 111, term: "Recycling", definition: "The process of reusing materials or recovering valuable materials from waste or scrap." },
  { id: 112, term: "Photodegradable plastic", definition: "Made so that when it is left in the sun for many weeks, it becomes weak and brittle and eventually breaks into pieces." },
  { id: 113, term: "Green plastic", definition: "Made by blending the sugars in plants with a special chemical agent to make plastic." },
  { id: 114, term: "Hazardous waste", definition: "Any waste that is a risk to the health of humans or other living things." },
  { id: 115, term: "Toxicology", definition: "The study of the harmful effects of substances on organisms." },
  { id: 116, term: "Dose of the chemical", definition: "The amount of a harmful chemical to which a person is exposed." },
  { id: 117, term: "Response", definition: "The damage to health that results from exposure to a given dose." },
  { id: 118, term: "Epidemiology", definition: "The study of the spread of diseases." },
  { id: 119, term: "Risk assessment", definition: "An estimate of the risk posed by an action or substance." },
  { id: 120, term: "Particulates", definition: "Particles in the air that are small enough to breathe into the lungs." },
  { id: 121, term: "Host", definition: "An organism in which a pathogen lives all or part of its life." },
  { id: 122, term: "Vectors", definition: "Organisms, such as mosquitoes, that transmit diseases to people." },
  { id: 123, term: "Sustainability", definition: "The condition in which human needs are met in such a way that a human population can survive indefinitely." },
  { id: 124, term: "Economics", definition: "The study of the choices people make as they use and distribute limited resources." },
  { id: 125, term: "Economic growth", definition: "An increase in the flow of money and products within a market." },
  { id: 126, term: "Permeable", definition: "Materials such as gravel that allow the flow of water." },
  { id: 127, term: "Impermeable", definition: "Materials such as clay or granite that stop the flow of water." },
  { id: 128, term: "Point-source pollution", definition: "Pollution that can often be identified and traced to a source." },
  { id: 129, term: "Acidification", definition: "Changes the balance of a soil's chemistry in several ways." },
  { id: 130, term: "Non-point pollution", definition: "Pollution that comes from many different sources that are often difficult to identify." },
  { id: 131, term: "Thermal pollution", definition: "Can occur when power plants and other industries use water in their cooling systems and then discharge the warm water into a lake or river." },
  { id: 132, term: "Deep-well injection", definition: "Wastes are pumped deep into the ground, where they are absorbed into a dry layer of rock below the level of groundwater." },
  { id: 133, term: "Surface impoundment", definition: "Basically a pond that has a sealed bottom, used for waste disposal." },
];

export const DEFAULT_SUBJECTS: Subject[] = [
  {
    id: "it-321",
    name: "IT 321 – Human Computer Interaction",
    code: "IT 321",
    description: "BatStateU CICS - Key Terminology, Historical Milestones, Reasoning, Problem Space, Gestalt Principles, Human Memory, and Interaction Styles.",
    isCustom: false,
    cards: it321Cards,
  },
  {
    id: "it-321-reviewer",
    name: "IT 321 – HCI (Lecture Reviewer)",
    code: "IT 321-R",
    description: "7-Page Reviewer: Key Terms, Milestones, Philosophy of Mind, Reasoning & Arguments, Problem Space, Gestalt Principles, Memory Models, and Interaction Styles.",
    isCustom: false,
    cards: it321ReviewerCards,
  },
  {
    id: "qm-gurus",
    name: "Chapter 3: Quality Management Gurus",
    code: "QMG 201",
    description: "Deming, Juran, Crosby, Feigenbaum, PDCA, 14-points, and Total Quality Control.",
    isCustom: false,
    cards: qmGurusCards,
  },
  {
    id: "emerging-trends-quality",
    name: "Chapter 2: Emerging Trends in Quality",
    code: "ETQ 301",
    description: "Industry 4.0, Quality 4.0 (C-I-A), enabling technologies, big data, and analytics.",
    isCustom: false,
    cards: emergingTrendsCards,
  },
  {
    id: "qm-chapter-1",
    name: "Chapter 1: Quality Management",
    code: "QM 101",
    description: "Definitions of Quality, organizational levels, QMS, and TQM implementation strategies.",
    isCustom: false,
    cards: qmChapter1Cards,
  },
  {
    id: "qm-chapter-1-v2",
    name: "Chapter 1: Version 2 Quality Management",
    code: "QM 102",
    description: "Terms & definitions, Types of Quality, QC vs QA, QMS/TQM, Dimensions, 8 Principles, and Japanese TQM concepts.",
    isCustom: false,
    cards: qmChapter1V2Cards,
  },
  {
    id: "env-sci",
    name: "Environmental Science",
    code: "SCI 101",
    description: "Water systems, pollution, ecology, climate, resources, and sustainability.",
    isCustom: false,
    cards: envCards,
  },
  {
    id: "mobile-computing",
    name: "Mobile Computing & Wireless Networks",
    code: "MC 301",
    description: "Mobile computing concepts, network topology, transmission media, cellular architecture, and 1G to 6G.",
    isCustom: false,
    cards: mobileComputingCards,
  },
  {
    id: "set-theory-automata",
    name: "Set Theory & Finite Automata",
    code: "CS 201",
    description: "Set theory operations, set builder notation, sets in computer science, and DFA vs NDFA.",
    isCustom: false,
    cards: automataTheoryCards,
  },
];

const STORAGE_KEY = "studiel_subjects_v8";
const ACTIVE_KEY = "studiel_active_subject_id_v8";

export function loadStoredSubjects(): Subject[] {
  if (typeof window === "undefined") return DEFAULT_SUBJECTS;
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ||
      localStorage.getItem("studiel_subjects_v7") ||
      localStorage.getItem("studiel_subjects_v6") ||
      localStorage.getItem("studiel_subjects_v5") ||
      localStorage.getItem("studiel_subjects_v4") ||
      localStorage.getItem("studiel_subjects_v3") ||
      localStorage.getItem("studiel_subjects_v2");
    if (!raw) return DEFAULT_SUBJECTS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      // Ensure all built-in subjects are present and up to date
      const customSubjects = parsed.filter((s: Subject) => s.isCustom);
      return [...DEFAULT_SUBJECTS, ...customSubjects];
    }
  } catch (err) {
    console.error("Failed to load stored subjects", err);
  }
  return DEFAULT_SUBJECTS;
}

export function saveStoredSubjects(subjects: Subject[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subjects));
  } catch (err) {
    console.error("Failed to save subjects to storage", err);
  }
}

export function getActiveSubjectId(available: Subject[]): string {
  if (typeof window === "undefined") return "it-321";
  try {
    const saved =
      localStorage.getItem(ACTIVE_KEY) ||
      localStorage.getItem("studiel_active_subject_id_v7") ||
      localStorage.getItem("studiel_active_subject_id_v6") ||
      localStorage.getItem("studiel_active_subject_id_v5") ||
      localStorage.getItem("studiel_active_subject_id_v4") ||
      localStorage.getItem("studiel_active_subject_id_v3") ||
      localStorage.getItem("studiel_active_subject_id_v2");
    if (saved && available.some((s) => s.id === saved)) {
      return saved;
    }
  } catch { }
  return available[0]?.id ?? "it-321";
}

export function setActiveSubjectId(id: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ACTIVE_KEY, id);
  } catch { }
}

