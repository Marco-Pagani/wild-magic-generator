import java.util.*;
import java.io.*;

public class FixText {

    public static void main(String args[]) {

        String fileName = "Effect Table 1.2.txt";
        String outFile = "Effect Fixed.txt";

        // This will reference one line at a time
        String line = null;

        try {
            // FileReader reads text files in the default encoding.
            FileReader fileReader = new FileReader(fileName);
            FileWriter fileWriter = new FileWriter(outFile);

            // Always wrap FileReader in BufferedReader.
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);

            while ((line = bufferedReader.readLine()) != null) {
                
                String number = line.substring(1, 5);
                String rest = line.substring(6, line.length());
                String newNumber = "";
                for (int i = 0; i < number.length(); i++) {
                    char c = number.charAt(i);
                    if (c == 'l')
                        newNumber += "1";
                    else if (c == 'O')
                        newNumber += "0";
                    else
                        newNumber += c;
                }
                String fixed = newNumber + rest;
                bufferedWriter.write(fixed);
                bufferedWriter.newLine();
            }

            // Always close files.
            bufferedReader.close();
            bufferedWriter.close();

        } catch (FileNotFoundException ex) {
            System.out.println("Unable to open file '" + fileName + "'");
        } catch (IOException ex) {
            System.out.println("Error reading file '" + fileName + "'");
            // Or we could just do this:
            // ex.printStackTrace();

        }
    }
}