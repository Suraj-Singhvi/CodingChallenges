using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeWarsRankUp
{
    #region Problem Statement - Multiples of 3 or 5
    /** If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
     * The sum of these multiples is 23.
     * Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
     * Note: If the number is a multiple of both 3 and 5, only count it once.*/
    #endregion
    public static class MultiplesOfThreeOrFive
    {
        static void Main(string[] args)
        {
            var input = new int[] { 3, 5};
            var number = 10;
            var multiplesOfGivenNo = findMultiplesOfGivenNumbers(input, number);
            multiplesOfGivenNo.Select(x => Console.WriteLine(x.Key.ToString(), x.Value.Select(x => Console.Write(x.ToString()))));
            Console.WriteLine("multiplesOfGivenNo..........", multiplesOfGivenNo);
            var summationofMultiples = SumOfAllMultiples(multiplesOfGivenNo);

            Console.WriteLine($"summationofMultiples is ...{summationofMultiples}");

            var singleDigitSum = SingleDigitSummation(summationofMultiples);
            Console.WriteLine($"singleDigitSum is ....{singleDigitSum}");

            Console.ReadLine();
        }

        public static List<int> findMultiplesOfGivenNumber(int multiplyOf, int number)
        {
            // for every no from 1...number
            // do modulo division & find the remainder
            // if remainder is 0 -  its a multiple

            var multiplesOfGivenNumber = new List<int>();
            for (int i = 1; i < number; i++)
            {
                int remainder = i % multiplyOf;
                if (remainder == 0)
                    multiplesOfGivenNumber.Add(i);
            }

            return multiplesOfGivenNumber;
        }

        #region Return Dictionary of multiply of 3 - [3,6,9]
        //public static Dictionary<int, List<int>> findMultiplesOfGivenNumbers(int[] multiplesOf, int baseNumber)
        //{
        //    var multiplesOfGivenNumbers = new Dictionary<int, List<int>>();
        //    foreach (var multiplyOf in multiplesOf)
        //    {
        //        multiplesOfGivenNumbers.Add(multiplyOf, findMultiplesOfGivenNumber(multiplyOf, baseNumber));
        //    }
        //    return multiplesOfGivenNumbers;
        //}

        // SUM of multiples
        //public static int SumOfAllMultiples(Dictionary<int, List<int>> multiplesOfGivenNumbers)
        //{
        //    var sum = 0;
        //    foreach (var multiplyOfGivenNo in multiplesOfGivenNumbers)
        //    {
        //        sum += multiplyOfGivenNo.Value.Sum();
        //    }
        //    return sum;
        //}
        #endregion

        public static List<int> findMultiplesOfGivenNumbers(int[] multiplesOf, int baseNumber)
        {
            var multiplesOfGivenNumbers = new List<int>();
            foreach (var multiplyOf in multiplesOf)
            {
                multiplesOfGivenNumbers.AddRange(findMultiplesOfGivenNumber(multiplyOf, baseNumber));
            }
            return multiplesOfGivenNumbers;
        }

        public static int SumOfAllMultiples(List<int> multiplesOfGivenNumbers)
        {
            var sum = 0;
            sum += multiplesOfGivenNumbers.Distinct().Sum();
            return sum;
        }

        public static int SingleDigitSummation(int sumofMultiples)
        {
            var result = -1;
            if (sumofMultiples.ToString().Length > 0)
            {
                var sum = 0;
                sum = sumofMultiples.ToString().Select(x => int.Parse(x.ToString())).Sum();
                if (sum < 10)
                    return sum;

                return SingleDigitSummation(sum);
            }
            return result;
        }

        //public static int SingleDigitSummation(int sumofMultiples)
        //{
        //    int sum = 0;
        //    while (sumofMultiples > 0)
        //    {
        //        sum += sumofMultiples % 10;
        //        sumofMultiples /= 10;
        //    }
        //    if (sum > 9)
        //    {
        //        sum = SingleDigitSummation(sum);
        //    }
        //    return sum;
        //}
    }
}
