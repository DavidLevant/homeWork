package com.FullStackProject.UrlShortner.logic;

import com.google.common.hash.Hashing;
import org.apache.commons.validator.UrlValidator;
import org.apache.commons.validator.routines.*;

import java.nio.charset.Charset;
import java.util.HashMap;

public class GenerateShortUrl {

    public static String getShortUrl(String url) {
        String shortUrl = Hashing.murmur3_32_fixed().hashString(url, Charset.defaultCharset()).toString();
        return shortUrl;
    }


    public static boolean isUrlValid(String url) {
        UrlValidator urlValidator = new UrlValidator(
                new String[]{"http", "https"}
        );
        boolean result = urlValidator.isValid(url);
        return result;
    }

}