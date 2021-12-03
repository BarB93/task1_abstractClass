export function randomNumberOfRange(min: number, max: number):number {
    return Math.floor(Math.random()* max) + min
}

export function factorial(num: number) {
    if(num === 1 || num === 0 ) return 1
    return BigInt(num) * BigInt(factorial(num - 1))
}


//пирамидальная time - O(n log n) memory - (On)
export function HeapSort(A) 
{
    if (A.length === 0) return [];
    let n = A.length, i = Math.floor(n/2), j, k, t;
    while (true)
    { if (i > 0) t = A[--i];
      else { n--;
             if (n === 0) return A;
             t = A[n];  A[n] = A[0];
           }        
      j = i;  k = j*2+1;
      while (k < n) {
          if (k+1 < n && A[k+1] > A[k]) k++;
          if (A[k] > t)
          { A[j] = A[k];  j = k;  k = j*2+1; }
          else break;
       }
      A[j] = t; 
    }
}

//time - O(n^2) memory - (On)
export function QuickSort(A)
{
    if (A.length === 0) return [];
    let a = [], b = [], p = A[0];
    for (let i = 1; i < A.length; i++) {
        if (A[ i ] < p) a[a.length] = A[ i ];
       else b[b.length] = A[ i ];
    }
    return QuickSort(a).concat( p,QuickSort(b) );
}