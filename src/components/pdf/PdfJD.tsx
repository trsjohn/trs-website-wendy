"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import type { JD } from "@/lib/types";
import { cleanText, cleanList } from "@/lib/clean";

const styles = StyleSheet.create({
  page: { 
    padding: 32, 
    fontSize: 11, 
    fontFamily: "Helvetica",
    backgroundColor: "#000000",
    color: "#ffffff",
    position: "relative"
  },
  logoContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 100
  },
  logo: {
    width: "100%"
  },
  content: {
    paddingTop: 20
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
    lineHeight: 1.0, // Single spacing for paragraphs
    color: "#ffffff"
  },
  ul: { 
    marginLeft: 10, 
    marginBottom: 6 
  },
  li: { 
    marginBottom: 6, // Slightly more space between list items
    lineHeight: 1.5, // 1.5x spacing for list items
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
  
  // Add employment type (Full-time, Part-time, Contract, etc.)
  if (jd.employment_type) {
    meta.push(jd.employment_type);
  }
  
  // Add location type (Remote, Onsite, Hybrid, etc.)
  if (jd.location_type) {
    meta.push(jd.location_type);
  }
  
  // Add locations (city/state)
  if (locations) {
    meta.push(locations);
  }
  
  // Add other relevant info
  if (level) {
    meta.push(level);
  }
  
  if (jd.remote_policy && jd.remote_policy !== jd.location_type) {
    meta.push(jd.remote_policy);
  }
  
  if (jd.salary) {
    meta.push(`Comp: ${jd.salary}`);
  }

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Logo in top right corner */}
        <View style={styles.logoContainer}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image 
            style={styles.logo}
            src="/logo.png"
          />
        </View>
        
        {/* Main content */}
        <View style={styles.content}>
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
        </View>
      </Page>
    </Document>
  );
}
