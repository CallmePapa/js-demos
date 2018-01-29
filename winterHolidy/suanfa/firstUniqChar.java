public int firstUniqChar(String s) {
        if (s == null || s.length() == 0)
            return -1;
        int[] data = new int[256];
        for (int i = 0; i < s.length(); ++i) {
            char c = s.charAt(i);
            int index = i + 1;
            if (data[c] == -1)
                continue;
            else if (data[c] == 0)
                data[c] = index;
            else
                data[c] = -1;
        }
        int re = Integer.MAX_VALUE;
        for (int n : data) {
            if (n > 0)
                re = Math.min(re, n);
        }
        return re == Integer.MAX_VALUE ? -1 : re - 1;
}