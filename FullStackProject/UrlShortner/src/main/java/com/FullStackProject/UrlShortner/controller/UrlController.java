package com.FullStackProject.UrlShortner.controller;

import com.FullStackProject.UrlShortner.model.Url;
import com.FullStackProject.UrlShortner.service.UrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("url/shortner")
public class UrlController {

    @Autowired
    private UrlService urlService;

    @GetMapping("/{id}")
    public String getOriginalUrl(@PathVariable String id) {

        return urlService.getOriginalUrl(id);
    }

    @PostMapping
    public Url generateShortUrl(@RequestBody String url) {

        return urlService.generateShortUrl(url);
    }
}
