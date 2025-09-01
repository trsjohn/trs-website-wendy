"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import type { JD } from "@/lib/types";
import { cleanText, cleanList } from "@/lib/clean";

const styles = StyleSheet.create({
  page: { 
    padding: 32, 
    fontSize: 11, 
    fontFamily: "Helvetica",
    backgroundColor: "#000000",
    color: "#ffffff"
  },
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff"
  },
  logo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#ffffff"
  },
  company: {
    fontSize: 12,
    color: "#cccccc",
    marginBottom: 15
  },
  h1: { 
    fontSize: 20, 
    marginBottom: 4, 
    fontWeight: "bold",
    color: "#ffffff"
  },
  h2: { 
    fontSize: 13, 
    marginTop: 14, 
    marginBottom: 6, 
    fontWeight: "bold",
    color: "#ffffff"
  },
  meta: { 
    color: "#aaaaaa", 
    marginBottom: 12,
    fontSize: 10
  },
  p: { 
    marginBottom: 8, 
    lineHeight: 1.35,
    color: "#ffffff"
  },
  ul: { 
    marginLeft: 10, 
    marginBottom: 6 
  },
  li: { 
    marginBottom: 4,
    color: "#ffffff"
  },
  tagWrap: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    marginTop: 4 
  },
  tag: { 
    fontSize: 9, 
    borderWidth: 1, 
    borderColor: "#666666",
    backgroundColor: "#333333",
    color: "#ffffff",
    padding: 3, 
    marginRight: 6, 
    marginBottom: 6, 
    borderRadius: 4 
  }
});

const Section = ({ title, text, list }: { title: string, text?: string, list?: string[] }) => {
  if (!text && (!list || list.length === 0)) return null;
  return (
    <>
      <Text style={styles.h2}>{title}</Text>
      {text ? <Text style={styles.p}>{text}</Text> : null}
      {list?.length ? (
        <View style={styles.ul}>
          {list.map((item, i) => (
            <Text key={i} style={styles.li}>• {item}</Text>
          ))}
        </View>
      ) : null}
    </>
  );
};

export default function PdfJD({ jd }: { jd: JD }) {
  const title = cleanText(jd.title);
  const level = cleanText(jd.level);
  const aboutCompany = cleanText(jd.about_company);
  const aboutRole = cleanText(jd.about_role);
  const responsibilities = cleanList(jd.responsibilities);
  const requirements = cleanList(jd.requirements);
  const niceToHaves = cleanList(jd.nice_to_haves);
  const benefits = cleanList(jd.benefits);
  const locations = (jd.locations || []).filter(Boolean).join(" • ");
  const tags = jd.tags || [];

  const meta: string[] = [];
  if (level) meta.push(level);
  if (jd.employment_type) meta.push(jd.employment_type);
  if (jd.location_type) meta.push(jd.location_type);
  if (jd.remote_policy) meta.push(jd.remote_policy);
  if (locations) meta.push(locations);
  if (jd.salary) meta.push(`Comp: ${jd.salary}`);

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>TRS</Text>
          <Text style={styles.company}>Talent Recruitment Solutions</Text>
        </View>
        
        <Text style={styles.h1}>{title}</Text>
        {meta.length ? <Text style={styles.meta}>{meta.join("  •  ")}</Text> : null}
        {tags.length ? (
          <View style={styles.tagWrap}>
            {tags.map((t, i) => <Text key={i} style={styles.tag}>{t}</Text>)}
          </View>
        ) : null}

        <Section title="About the Company" text={aboutCompany} />
        <Section title="About the Role" text={aboutRole} />
        <Section title="Responsibilities" list={responsibilities} />
        <Section title="Requirements" list={requirements} />
        <Section title="Nice to Haves" list={niceToHaves} />
        <Section title="Benefits" list={benefits} />
      </Page>
    </Document>
  );
}
