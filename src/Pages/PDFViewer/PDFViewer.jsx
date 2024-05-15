
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles for PDF content
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
});

const PDFViewer = ({ book }) => {
  return (
    <Document className="mt-5">
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Book:{book.book_name}</Text>
          
        </View>
      </Page>
    </Document>
  );
};

export default PDFViewer;
