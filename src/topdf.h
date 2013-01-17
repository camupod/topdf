#ifndef _TOPDF_H_
#define _TOPDF_H_

#include <v8.h>

using namespace v8;

struct topdf_options {

    int pages;
    int memory;
    int override;
    int headings;
    int gridlines;
    int compression;
    char* watermark;
    char* fontdirectory;

};

struct topdf_convert_baton {

    uv_work_t req;

    int step;
    int error;
    bool success;
    char* source;
    char* destination;
    topdf_options* options;
    Persistent<Function> callback;

};

#endif
