#include "bits/stdc++.h"

using namespace std;

int quick(vector<int> &v, int low, int high)
{
    int ass1 = low - 1;
    int pi = v[high];

    for (int i = low; i < high; i++)
    {
        if (v[i] <= pi)
        {
            ass1++;
            int store = v[ass1];
            v[ass1] = v[i];
            v[i] = store;
        }
    }
    ass1++;
    int store = v[ass1];
    v[ass1] = pi;
    v[high] = store;
    return ass1;
}

void partition(vector<int> &v, int low, int high)
{
    if (low < high)
    {
        int partitionInd = quick(v, low, high);
       partition(v, low, partitionInd - 1);
        partition(v, partitionInd + 1, high);
    }
}

int main()
{
    int n;
    cin >> n;

    vector<int> v(n);

    for (int i = 0; i < n; i++)
    {
        cin >> v[i];
    }

    partition(v,0,n-1);

        for (int i = 0; i < n; i++)
    {
        cout << v[i]<<" ";
    }

    return 0;
}
