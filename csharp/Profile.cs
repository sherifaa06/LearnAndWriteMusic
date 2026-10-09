using System;
using System.Collections.Generic;

public class ProfileService
{
    private List<string> usernames = new();

    public void SaveUsername(string username)
    {
        usernames.Add(username);
        Console.WriteLine("Username gespeichert: " + username);
    }
}